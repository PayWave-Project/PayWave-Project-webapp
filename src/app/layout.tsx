import type { Metadata, Viewport } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/providers/Theme";
import TanstackProvider from "@/components/providers/Tanstack";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PayWave",
  description: "The future of contactless payments.",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["", "next14", "pwa", "next-pwa"],
  authors: [
    {
      name: "PayWave",
      url: "app-paywave.netlify.app",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className}`}>
        <TanstackProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
          <Toaster />
        </TanstackProvider>
      </body>
    </html>
  );
}
