import type { Metadata } from "next";
import { helveticaNeue, carlBrown, dancingScript } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/components/theme-provider";
import { FloatingNavbar } from "@/components/components/FloatingNavbar";
import { Toaster } from "sonner";
import Preloader from "@/components/components/PreLoader";
import SmoothScroller from "@/components/components/SmoothScroller";

export const metadata: Metadata = {
  title: {
    default: "Luthfi Abdillah - Full Stack Developer Portfolio",
    template: "%s | Luthfi Abdillah",
  },
  description:
    "Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and professional experience in building scalable web applications.",
  keywords: [
    "Luthfi Abdillah",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Luthfi Abdillah" }],
  creator: "Luthfi Abdillah",
  publisher: "Luthfi Abdillah",
  metadataBase: new URL(
  "https://luthfiabdllh.my.id",
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Luthfi Abdillah - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in modern web technologies. Explore my projects, skills, and professional experience.",
    siteName: "Luthfi Abdillah Portfolio",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Luthfi Abdillah Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luthfi Abdillah - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in modern web technologies.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google5de1c1b4d5bef859.html",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${helveticaNeue.variable} ${carlBrown.variable} ${dancingScript.variable}`}
      suppressHydrationWarning
    >
      <body className={helveticaNeue.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <SmoothScroller>
            <Preloader>
              <FloatingNavbar />
              {children}
              <Toaster
                position="top-right"
                toastOptions={{
                  style: {
                    background: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    color: "hsl(var(--foreground))",
                  },
                }}
              />
            </Preloader>
          </SmoothScroller>
        </ThemeProvider>
      </body>
    </html>
  );
}
