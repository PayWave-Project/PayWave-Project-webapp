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
import { useLoginMerchant } from "@/api/auth";
import { useAuthStore } from "@/store";

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const { mutateAsync, isLoading } = useLoginMerchant();
  const { toast } = useToast();
  const router = useRouter();

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

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
      const merchant_id = res.data.merchant.userId;
      const firstName = res.data.merchant.firstName;
      const businessName = res.data.merchant.businessName;
      const phoneNumber = res.data.merchant.phoneNumber;

      Cookies.set("token", token);
      Cookies.set("merchant_id", merchant_id);
      useAuthStore.getState().setAuthInfo(businessName, firstName, phoneNumber);

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

      toast({
        title: "Login failed.",
        description: errorMessage,
        variant: "error",
      });
      console.log("Error:", error);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1 mt-8">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Password"
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
