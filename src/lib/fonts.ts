import localFont from "next/font/local";
import { Dancing_Script } from "next/font/google";

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
  display: "swap",
});

export const helveticaNeue = localFont({
  src: [
    {
      path: "../assets/fonts/HelveticaNeueThin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/HelveticaNeueUltraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/HelveticaNeueHeavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/HelveticaNeueBlack.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
  preload: true,
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
});

export const carlBrown = localFont({
  src: [
    {
      path: "../assets/fonts/CarlBrown.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-carl-brown",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const fontClasses = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
} as const;
