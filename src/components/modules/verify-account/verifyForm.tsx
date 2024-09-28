"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSendOtp, useVerifyOtp } from "@/api/auth";
import OtpInput from "react-otp-input";
import { useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { isValidEmail } from "@/utils/validations";

const VerifyForm = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const { mutateAsync: sendOtp, isLoading: isSendingOtp } = useSendOtp();
  const { mutateAsync: verifyOtp, isLoading: isVerifyingOtp } = useVerifyOtp();
  const [formData, setFormData] = useState({
    otp: "",
  });
  const [otpValue, setOtpValue] = useState("");

  const { toast } = useToast();
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    if (typeof e === "string") {
      setOtpValue(e);
      setFormData((prev) => ({ ...prev, otp: e }));
    }
  };

  const handleSendOTP = async () => {
    if (!email) {
      toast({
        title: "Email is required",
        variant: "error",
      });
      return;
    }
    const emailError = isValidEmail(email);
    if (emailError) {
      toast({
        title: emailError,
        variant: "error",
      });
      return;
    }
    try {
      const res = await sendOtp({
        email,
      });
      toast({
        title: res.data.message,
        variant: "success",
      });
    } catch (error: any) {
      toast({
        title: error?.response?.data?.message || "Failed to send OTP",
        variant: "error",
      });
    }
  };

  const handleVerifyOTP = async () => {
    try {
      if (!email) {
        toast({
          title: "Email is required",
          variant: "error",
        });
        return;
      }
      const res = await verifyOtp({
        email,
        otp: formData.otp,
      });
      toast({
        title: "Verification successful, proceed to login.",
        variant: "success",
      });
      router.push("/dashboard");
    } catch (error: any) {
      toast({
        title: error?.response?.data?.message || "Failed to verify OTP",
        variant: "error",
      });
    }
  };

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    await handleVerifyOTP();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-1 mt-4">
        <Label htmlFor="otp">OTP</Label>
        <OtpInput
          inputStyle="inputStyleOTP"
          value={otpValue}
          onChange={handleInputChange}
          numInputs={6}
          shouldAutoFocus
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
      </div>

      <Button
        type="submit"
        className="mt-4"
        disabled={isSendingOtp || isVerifyingOtp}
      >
        Verify OTP
      </Button>
    </form>
  );
};

export default VerifyForm;
