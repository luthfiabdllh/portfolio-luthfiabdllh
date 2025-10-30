"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import ElectricBorder from "../ElectricBorder";
import Navbar from "./Navbar";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  isLoading: boolean;
}

const Contact2 = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    isLoading: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Set loading state
    setStatus({ isLoading: true });

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Success toast
        toast.success(
          result.message ||
            "Message sent successfully! We'll get back to you soon.",
          {
            id: loadingToast,
            duration: 5000,
          }
        );

        // Reset form
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        // Handle validation errors
        if (result.details && Array.isArray(result.details)) {
          const errorMessages = result.details
            .map((err: { field: string; message: string }) => err.message)
            .join(", ");
          toast.error(errorMessages, {
            id: loadingToast,
            duration: 6000,
          });
        } else {
          toast.error(
            result.error || "Failed to send message. Please try again.",
            {
              id: loadingToast,
              duration: 6000,
            }
          );
        }
      }
    } catch {
      toast.error(
        "Network error. Please check your connection and try again.",
        {
          id: loadingToast,
          duration: 6000,
        }
      );
    } finally {
      setStatus({ isLoading: false });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      <Navbar />
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-0 min-h-screen flex items-center justify-center">
        <div className="flex flex-col justify-between gap-8 sm:gap-12 lg:gap-20 lg:flex-row w-full">
          {/* Left Column - Contact Info */}
          <div className="flex max-w-sm flex-col justify-center gap-6 sm:gap-8 lg:gap-10 lg:sticky lg:top-20 lg:h-fit mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight">
                <span className="font-carl-brown">Co</span>NTA
                <span className="font-carl-brown">C</span>T ME
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground font-thin leading-relaxed max-w-md mx-auto lg:mx-0">
                I&apos;m always open to new opportunities and collaborations. Feel
                free to reach out—let&apos;s create something amazing together.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1 max-w-2xl mx-auto lg:mx-0 w-full">
            <ElectricBorder
              color="#2C75FF"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16, position: "relative" }}
            >
              <form
                onSubmit={handleSubmit}
                className="relative flex flex-col gap-4 sm:gap-5 lg:gap-6 rounded-2xl border border-white/20 bg-background/50 p-4 sm:p-6 lg:p-8 xl:p-10"
              >
                <h2 className="text-xl sm:text-2xl font-thin text-left mb-1 sm:mb-2">
                  SEND ME A MESSAGE
                </h2>

                {/* Form Fields */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-1 space-y-1.5 sm:space-y-2">
                    <Label htmlFor="firstname" className="text-xs sm:text-sm  ">
                      First Name *
                    </Label>
                    <Input
                      type="text"
                      id="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="h-10 sm:h-11 text-sm bg-background/50 border-white/20 focus:border-primary transition-colors"
                      required
                      disabled={status.isLoading}
                    />
                  </div>
                  <div className="flex-1 space-y-1.5 sm:space-y-2">
                    <Label htmlFor="lastname" className="text-xs sm:text-sm  ">
                      Last Name
                    </Label>
                    <Input
                      type="text"
                      id="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      className="h-10 sm:h-11 text-sm bg-background/50 border-white/20 focus:border-primary transition-colors"
                      disabled={status.isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="email" className="text-xs sm:text-sm  ">
                    Email Address *
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="h-10 sm:h-11 text-sm bg-background/50 border-white/20 focus:border-primary transition-colors"
                    required
                    disabled={status.isLoading}
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="subject" className="text-xs sm:text-sm  ">
                    Subject *
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="h-10 sm:h-11 text-sm bg-background/50 border-white/20 focus:border-primary transition-colors"
                    required
                    disabled={status.isLoading}
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="message" className="text-xs sm:text-sm  ">
                    Message *
                  </Label>
                  <Textarea
                    placeholder="Tell us more about your project or inquiry..."
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="resize-none text-sm bg-background/50 border-white/20 focus:border-primary transition-colors min-h-[100px] sm:min-h-[120px]"
                    required
                    disabled={status.isLoading}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status.isLoading}
                  className="w-full h-10 sm:h-11 lg:h-12 text-sm sm:text-base bg-primary hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2 sm:mt-4"
                >
                  {status.isLoading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                      <span className="text-xs sm:text-sm lg:text-base">
                        Sending...
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="text-xs sm:text-sm lg:text-base">
                        Send Message
                      </span>
                    </div>
                  )}
                </Button>
              </form>
            </ElectricBorder>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact2 };
