import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { RegisterForm } from "@/components/modules/register/RegisterForm";
import LoginSidebar from "@/components/modules/login/LoginSidebar";
import Logo from "@/assets/icons/Logo-main.svg";
import LogoWhite from "@/assets/icons/Logo-main-white.svg";

export const metadata: Metadata = {
  title: "PayWave | Login",
  description: "The future of contactless payments.",
};

const RegisterPage = () => {
  return (
    <section className="container relative h-screen items-center justify-between flex lg:flex-row flex-col lg:max-w-none  px-10 md:px-20 lg:px-0">
      <div className="lg:p-8 h-full w-full flex flex-col justify-center items-center">
        <div className="mx-auto flex w-full flex-col justify-center sm:w-[400px]">
          <div className="flex flex-col justify-center items-center text-center">
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={100}
              className="w-[210px] h-[150px] relative z-10 dark:hidden"
            />
            <Image
              src={LogoWhite}
              alt="Logo"
              width={100}
              height={100}
              className="w-[210px] h-[150px] relative z-10 hidden dark:block"
            />
            
          </div>
          <RegisterForm />
          {/* <p className="px-8 text-center text-sm text-muted-foreground">
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
          </p> */}
        </div>
      </div>
      <LoginSidebar />
    </section>
  );
};

export default RegisterPage;
