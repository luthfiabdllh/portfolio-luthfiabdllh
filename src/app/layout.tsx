import type { Metadata } from "next";
import { helveticaNeue, carlBrown, dancingScript } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/components/theme-provider";
import { FloatingNavbar } from "@/components/components/FloatingNavbar";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
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
          <FloatingNavbar />
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                color: 'hsl(var(--foreground))',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
