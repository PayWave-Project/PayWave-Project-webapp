import { Metadata } from "next";
import Image from "next/image";

import { RegisterForm } from "@/components/modules/register/RegisterForm";
import LoginSidebar from "@/components/modules/login/LoginSidebar";
import Logo from "@/assets/icons/Logo-main.png";
import LogoWhite from "@/assets/icons/Logo-main-white.png";

export const metadata: Metadata = {
  title: "PayWave | Login",
  description: "The future of contactless payments.",
};

const RegisterPage = () => {
  return (
    <section className="container relative h-screen items-center justify-between flex lg:flex-row flex-col lg:max-w-none  px-10 md:px-20 lg:px-0">
      <div className="lg:p-8 h-full w-full flex flex-col justify-center items-center relative">
        <div className="mx-auto flex w-full flex-col justify-center sm:w-[400px]">
          <div className="flex flex-col justify-center items-center text-center lg:absolute lg:top-8 lg:left-8">
            <Image
              src={Logo}
              alt="Logo"
              width={150}
              height={50}
              className="relative z-10 dark:hidden lg:w-[150px] lg:h-[60px]"
            />
            <Image
              src={LogoWhite}
              alt="Logo"
              width={150}
              height={50}
              className="relative z-10 hidden dark:block"
            />
          </div>
          <RegisterForm />
        </div>
      </div>
      <LoginSidebar />
    </section>
  );
};

export default RegisterPage;
