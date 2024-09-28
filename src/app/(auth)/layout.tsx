import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "PayWave",
  description: "The future of contactless payments.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Cookies = cookies();
  const token = Cookies.get("token");

  if (token) redirect("/dashboard");
  return <main className="flex justify-center items-center">{children}</main>;
}
