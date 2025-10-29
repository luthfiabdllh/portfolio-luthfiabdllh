import type { Metadata } from "next";
import { helveticaNeue, carlBrown, dancingScript } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/components/theme-provider";
import { FloatingNavbar } from "@/components/components/FloatingNavbar";

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
        </ThemeProvider>
      </body>
    </html>
  );
}
