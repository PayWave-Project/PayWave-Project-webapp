import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/icons/Logo-main.png";
import LogoWhite from "@/assets/icons/Logo-main-white.png";
import ForgotPasswordForm from "@/components/modules/forgot-password/AuthForm";

export const metadata: Metadata = {
  title: "PayWave | Forgot Password",
  description: "The future of contactless payments.",
};

const ForgotPassword = () => {
  return (
    <section className="container relative h-screen items-center justify-between flex lg:flex-row flex-col lg:max-w-[1440px] px-10 md:px-20 lg:px-0">
      <div className="lg:p-8 h-full w-full flex flex-col justify-center items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col justify-center items-center gap-y-8 text-center">
            <Image
              src={Logo}
              alt="Logo"
              width={150}
              height={150}
              className="relative z-10 dark:hidden"
            />
            <Image
              src={LogoWhite}
              alt="Logo"
              width={150}
              height={50}
              className="relative z-10 hidden dark:block"
            />
          </div>
          <ForgotPasswordForm />
          <Link
            href="/register"
            className="text-center text-sm text-muted-foreground"
          >
            Don&apos;t have an account?{" "}
            <span className="underline underline-offset-4 hover:text-primary">
              Register
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
