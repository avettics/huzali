import type { Metadata } from "next";
import { Geist_Mono, Manrope, Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Huzali",
    template: "%s | Huzali",
  },
  description:
    "Huzali is an East African beauty, skills and economic opportunity platform.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        manrope.variable,
        playfairDisplay.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
