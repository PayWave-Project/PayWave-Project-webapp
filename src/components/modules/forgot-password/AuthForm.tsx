"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useResetPassword, useSendOtp, useVerifyOtp } from "@/api/auth";
import OtpInput from "react-otp-input";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/common/Icons";
import { isValidEmail } from "@/utils/validations";

const ForgotPasswordForm = () => {
  const { mutateAsync, isLoading } = useSendOtp();
  const { mutateAsync: verifyOtp, isLoading: isVerifyingOtp } = useVerifyOtp();
  const { mutateAsync: resetPassword, isLoading: isResettingPassword } =
    useResetPassword();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: "",
    confirmPassword: "",
  });
  const [otpValue, setOtpValue] = useState("");

  const buttonText = {
    1: "Send OTP",
    2: "Verify OTP",
    3: "Change Password",
  };

  const { toast } = useToast();
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    if (typeof e === "string") {
      setOtpValue(e);
      setFormData((prev) => ({ ...prev, otp: e }));
    } else {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSendOTP = async () => {
    const emailError = isValidEmail(formData.email);
    if (emailError) {
      toast({
        title: emailError,
        variant: "error",
      });
      return;
    }
    try {
      const res = await mutateAsync({
        email: formData.email,
      });
      toast({
        title: res.data.message,
        variant: "success",
      });
      handleNextStep();
    } catch (error) {
      toast({
        title: "Failed to send OTP",
        variant: "error",
      });
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const res = await verifyOtp({
        email: formData.email,
        otp: formData.otp,
      });
      toast({
        title: res.data.message,
        variant: "success",
      });
      handleNextStep();
    } catch (error) {
      toast({
        title: "Failed to verify OTP",
        variant: "error",
      });
    }
  };

  const handleChangePassword = async () => {
    try {
      const res = await resetPassword({
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      });
      toast({
        title: res.data.message,
        variant: "success",
      });
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } catch (error) {
      toast({
        title: "Failed to change password",
        variant: "error",
      });
    }
  };

  const handleNextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    switch (step) {
      case 1:
        await handleSendOTP();
        break;
      case 2:
        await handleVerifyOTP();
        break;
      case 3:
        await handleChangePassword();
        break;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h1 className="text-center text-2xl font-semibold tracking-tight">
              Forgot Password?
            </h1>
            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
          </>
        );
      case 2:
        return (
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <h1 className="text-center text-2xl font-semibold tracking-tight">
              Verify OTP sent to {formData.email}
            </h1>
            <div className="grid gap-1">
              <OtpInput
                inputStyle="inputStyleOTP"
                value={otpValue}
                onChange={handleInputChange}
                inputType="number"
                shouldAutoFocus={true}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <>
            <h1 className="text-center text-2xl font-semibold tracking-tight">
              Change Password
            </h1>
            <div className="grid gap-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                disabled={isResettingPassword}
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                disabled={isResettingPassword}
              />
            </div>
          </>
        );
    }
  };

  return (
    <div className="grid gap-6">
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          {renderStep()}
          <div className="flex justify-between mt-4">
            {step > 1 && (
              <Button
                type="button"
                onClick={handlePrevStep}
                disabled={isLoading}
              >
                Previous
              </Button>
            )}
            <Button
              type="submit"
              disabled={isLoading || isVerifyingOtp || isResettingPassword}
            >
              {isLoading ||
                isVerifyingOtp ||
                (isResettingPassword && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ))}
              {buttonText[step as keyof typeof buttonText]}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
