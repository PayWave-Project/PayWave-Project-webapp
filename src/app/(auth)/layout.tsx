import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PayWave",
  description: "The future of contactless payments.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <>{children}</>
    </main>
  );
}
