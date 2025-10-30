import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const contactSchema = z.object({
  firstname: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name is too long"),
  lastname: z.string().max(50, "Last name is too long").optional(),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(100, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 emails per 15 minutes

function getRateLimitKey(ip: string, email: string): string {
  return `${ip}:${email}`;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  record.count++;
  return false;
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, "");
}

export async function POST(req: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    // Get client IP for rate limiting
    const headersList = await headers();
    const forwarded = headersList.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "unknown";

    // Parse and validate request body
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON payload" },
        { status: 400 }
      );
    }

    // Validate input schema
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      const errors = validation.error.issues.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      return NextResponse.json(
        {
          error: "Validation failed",
          details: errors,
        },
        { status: 400 }
      );
    }

    const { firstname, lastname, email, subject, message } = validation.data;

    // Rate limiting
    const rateLimitKey = getRateLimitKey(ip, email);
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        {
          error:
            "Too many requests. Please wait before sending another message.",
          retryAfter: RATE_LIMIT_WINDOW / 1000,
        },
        { status: 429 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      firstname: sanitizeInput(firstname),
      lastname: lastname ? sanitizeInput(lastname) : "",
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    };

    // Send email via Resend
    const emailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || "Contact Form <onboarding@resend.dev>",
      to: process.env.TO_EMAIL || "ahmadabdllh000@gmail.com",
      subject: `📩 Portfolio Contact: ${sanitizedData.subject}`,
      replyTo: sanitizedData.email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2C75FF; border-bottom: 2px solid #2C75FF; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
            <p><strong>Name:</strong> ${sanitizedData.firstname} ${
        sanitizedData.lastname
      }</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
            <p><strong>IP Address:</strong> ${ip}</p>
            <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #2C75FF; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${
              sanitizedData.message
            }</p>
          </div>

          <div style="margin-top: 30px; padding: 15px; background-color: #e3f2fd; border-radius: 6px; font-size: 12px; color: #666;">
            <p style="margin: 0;">This email was sent from your portfolio contact form. Please reply directly to respond to the sender.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

From: ${sanitizedData.firstname} ${sanitizedData.lastname}
Email: ${sanitizedData.email}
Subject: ${sanitizedData.subject}
IP: ${ip}
Time: ${new Date().toLocaleString()}

Message:
${sanitizedData.message}
      `,
    });

    if (emailResult.error) {
      console.error("Resend API error:", emailResult.error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
        id: emailResult.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again later.",
        ...(process.env.NODE_ENV === "development" && {
          details: String(error),
        }),
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
