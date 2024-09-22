import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { LoginForm } from "@/components/modules/login/AuthForm";
import LoginSidebar from "@/components/modules/login/LoginSidebar";
import Logo from "@/assets/icons/Logo-main.png";
import LogoWhite from "@/assets/icons/Logo-main-white.png";

export const metadata: Metadata = {
  title: "PayWave | Login",
  description: "The future of contactless payments.",
};

const LoginPage = () => {
  return (
    <section className="container relative h-screen items-center justify-between flex lg:flex-row flex-col lg:max-w-none  px-10 md:px-20 lg:px-0">
      <div className="lg:p-8 h-full w-full flex flex-col justify-center items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col justify-center items-center space-y-2 text-center">
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
            <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
            <Link href="/register" className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <span className="underline underline-offset-4 hover:text-primary">
                Register
              </span>
            </Link>
          </div>
          <LoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
      <LoginSidebar />
    </section>
  );
};

export default LoginPage;
