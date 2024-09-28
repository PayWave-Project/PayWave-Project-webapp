"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/Icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLoginMerchant, useSendOtp } from "@/api/auth";
import { useAuthStore } from "@/store";
import { isValidEmail } from "@/utils/validations";

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const { mutateAsync, isLoading } = useLoginMerchant();
  const { mutateAsync: sendOtp, isLoading: isLoadingOtp } = useSendOtp();

  const { toast } = useToast();
  const router = useRouter();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const handleSendOTP = async () => {
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
          email: email,
        });
      } catch (error: any) {
        toast({
          title: error?.response?.data?.message || "Failed to send OTP",
          variant: "error",
        });
      }
    };

    if (!email || !password) {
      toast({
        title: "Email and password are required.",
        variant: "error",
      });
      return;
    }

    try {
      const credentials = { email, password };
      const res = await mutateAsync(credentials);
      toast({
        title: "Login successful!",
        variant: "success",
      });
      const token = res.data.token;
      const id = res.data.merchant._id;
      const firstName = res.data.merchant.firstName;
      const lastName = res.data.merchant.lastName;
      const merchantEmail = res.data.merchant.email;
      const merchantId = res.data.merchant.merchantId;
      const businessName = res.data.merchant.businessName;
      const phoneNumber = res.data.merchant.phoneNumber;
      const profileImage = res.data.merchant.merchantPicture.url;

      Cookies.set("token", token);
      Cookies.set("id", id);
      useAuthStore
        .getState()
        .setAuthInfo(
          merchantId,
          merchantEmail,
          businessName,
          lastName,
          firstName,
          phoneNumber,
          profileImage
        );

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred.";

      if (error && typeof error === "object" && "response" in error) {
        const errorResponse = error as {
          response?: { data?: { message?: string } };
        };
        errorMessage = errorResponse.response?.data?.message || errorMessage;
      }

      if (
        errorMessage === "Password is incorrect" ||
        errorMessage === "Merchant not registered"
      ) {
        errorMessage = "Invalid credentials";
      }

      if (
        errorMessage ===
        "Sorry Merchant not verified yet. Check your mail to verify your account!"
      ) {
        handleSendOTP();
        setTimeout(() => {
          router.push("/verify-account");
        }, 1000);
      }

      toast({
        title: "Login failed.",
        description: errorMessage,
        variant: "error",
      });
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid">
          <div className="grid gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1 mt-8">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="flex justify-end mt-2">
            <Link
              href="/forgot-password"
              className="text-sm text-muted-foreground hover:text-primary underline"
            >
              Forgot password?
            </Link>
          </div>
          <Button disabled={isLoading} className="mt-8">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
