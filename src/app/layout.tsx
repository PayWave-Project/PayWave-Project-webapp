import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

import "remixicon/fonts/remixicon.css";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/providers/Theme";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PayWave",
  description: "The future of contactless payments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
