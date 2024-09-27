"use client";

import React, { useState } from "react";
import { StepOne } from "./Step1";
import { StepTwo } from "./Step2";
import { useRegisterMerchant } from "@/api/auth";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const { mutateAsync, isLoading } = useRegisterMerchant();
  const { toast } = useToast();
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );
  const handleNext = (data: Record<string, unknown>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleFinalSubmit = async (data: any) => {
    const finalData = { ...formData, ...data };
    console.log("Registration Data:", finalData);
    try {
      await mutateAsync(finalData);
      toast({
        title: "Registration successful",
        description: "You have successfully registered your business",
      });
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "Please try again",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">Register</h1>
      <p className="text-sm text-center">Step {step} of 2</p>
      {step === 1 && <StepOne onNext={handleNext} defaultValues={formData} />}
      {step === 2 && (
        <StepTwo
          onBack={handleBack}
          onSubmitFinal={handleFinalSubmit}
          defaultValues={formData}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default RegisterForm;
