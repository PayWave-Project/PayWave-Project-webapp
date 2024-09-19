"use client";

import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/Icons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { UserPayloadInterface } from "@/interfaces/user";
import { ClassNameProps } from "@/interfaces/className";
import {
  isValidName,
  isValidPhoneNumber,
  isValidEmail,
  isValidPassword,
  doPasswordsMatch,
  validateForm,
  validateBusinessForm,
  isValidBusinessName,
  isValidRCNumber,
  isValidBVN,
} from "@/utils/validations";

export function RegisterForm(
  className: ClassNameProps,
  userPayloadInterface: UserPayloadInterface
) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isContinue, setIsContinue] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserPayloadInterface>({
    firstName: "",
    lastName: "",
    phoneNo: "",
    emailAddress: "",
    password: "",
    cPassword: "",
    businessName: "",
    rcNumber: "",
    bvn: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    emailAddress: "",
    password: "",
    cPassword: "",
  });
  const [businessErrors, setBusinessErrors] = useState({
    businessName: "",
    rcNumber: "",
    bvn: "",
  });
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const validationErrors = validateBusinessForm(userData);
    if (Object.values(validationErrors).every((error) => error === null)) {
      setIsLoading(true);
      //   console.log("Form data submitted:", userData);
      setUserData({ ...userData });
      setTimeout(() => {
        toast({
          title: "Registration successful",
          variant: "success",
        });
        setIsContinue(false);
        setIsLoading(false);
        setUserData({
          firstName: "",
          lastName: "",
          phoneNo: "",
          emailAddress: "",
          password: "",
          cPassword: "",
          businessName: "",
          rcNumber: "",
          bvn: "",
        });
        window.location.href = "/login";
      }, 3000);
    } else {
      setBusinessErrors(validationErrors);
    }
  };
  // Oyin4real$$
  const onContinueHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(userData);
    if (Object.values(validationErrors).every((error) => error === null)) {
      setUserData({ ...userData });
      setIsContinue(true);
    } else {
      setErrors(validationErrors);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    let errorMessage = "" as string | null;
    switch (name) {
      case "firstName":
        errorMessage = isValidName(value);
        break;
      case "lastName":
        errorMessage = isValidName(value);
        break;
      case "phoneNo":
        errorMessage = isValidPhoneNumber(value);
        break;
      case "emailAddress":
        errorMessage = isValidEmail(value);
        break;
      case "password":
        errorMessage = isValidPassword(value);
        break;
      case "cPassword":
        errorMessage = doPasswordsMatch(userData.password, value);
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage || "",
    }));
  };

  const handleChangeBusiness = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    let errorMessage = "" as string | null;
    switch (name) {
      case "businessName":
        errorMessage = isValidBusinessName(value);
        break;
      case "rcNumber":
        errorMessage = isValidRCNumber(value);
        break;
      case "bvn":
        errorMessage = isValidBVN(value);
        break;
    }

    setBusinessErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage || "",
    }));
  };
  return (
    <>
      <div className={cn("grid gap-6", className)} {...userPayloadInterface}>
        {!isContinue ? (
          <div>
            <div className="text-center pb-3">
              <h1 className="text-2xl font-semibold tracking-tight ">
                Create Account
              </h1>
              <Link
                href="/login"
                className="text-sm text-muted-foreground  text-center"
              >
                Already have an account?{" "}
                <span className="underline underline-offset-4 hover:text-primary">
                  Login
                </span>
              </Link>
            </div>
            <form onSubmit={onContinueHandler}>
              <div className="grid">
                <div className="grid gap-1">
                  <Label className="sr-onl" htmlFor="firstName">
                    First Name
                  </Label>

                  <Input
                    id="firstName"
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    autoCapitalize="none"
                    autoComplete="firstName"
                    autoCorrect="off"
                    disabled={isLoading}
                    value={userData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="error-text">{errors.firstName}</p>
                  )}
                </div>
                <div className="grid gap-1 mt-4">
                  <Label className="sr-onl" htmlFor="lastName">
                    Last Name
                  </Label>

                  <Input
                    id="lastName"
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    autoCapitalize="none"
                    autoComplete="lastName"
                    autoCorrect="off"
                    disabled={isLoading}
                    value={userData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="error-text">{errors.lastName}</p>
                  )}
                </div>
                <div className="grid gap-1 mt-4">
                  <Label className="sr-onl" htmlFor="phoneNo">
                    Phone Number
                  </Label>

                  <Input
                    id="phoneNo"
                    placeholder="Phone Number"
                    type="tel"
                    name="phoneNo"
                    autoCapitalize="none"
                    autoComplete="phone"
                    autoCorrect="off"
                    disabled={isLoading}
                    value={userData.phoneNo}
                    onChange={handleChange}
                  />
                  {errors.phoneNo && (
                    <p className="error-text">{errors.phoneNo}</p>
                  )}
                </div>
                <div className="grid gap-1 mt-4">
                  <Label className="sr-onl" htmlFor="emailAddress">
                    Email Address
                  </Label>
                  <Input
                    id="emailAddress"
                    placeholder="name@example.com"
                    type="email"
                    name="emailAddress"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    value={userData.emailAddress}
                    onChange={handleChange}
                  />
                  {errors.emailAddress && (
                    <p className="error-text">{errors.emailAddress}</p>
                  )}
                </div>
                <div className="grid gap-1 mt-4">
                  <Label className="sr-onl" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="password"
                    autoCorrect="off"
                    name="password"
                    disabled={isLoading}
                    value={userData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="error-text">{errors.password}</p>
                  )}
                </div>
                <div className="grid gap-1 mt-4">
                  <Label className="sr-onl" htmlFor="cPassword">
                    Confirm Password
                  </Label>
                  <Input
                    id="cPassword"
                    placeholder="Confirm Password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="password"
                    name="cPassword"
                    autoCorrect="off"
                    disabled={isLoading}
                    value={userData.cPassword}
                    onChange={handleChange}
                  />
                  {errors.cPassword && (
                    <p className="error-text">{errors.cPassword}</p>
                  )}
                </div>
                <Button disabled={isLoading} className="my-4 ">
                  Continue &nbsp;{" "}
                  <i className="ri-arrow-right-line align-middle"></i>
                </Button>

                {/* <Button disabled={isLoading} className="mt-8 ">
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Create Account
            </Button> */}
              </div>
            </form>
          </div>
        ) : (
          <div>
            <div className="flex items-center pb-5 gap-5">
              <i
                className="ri-arrow-left-line cursor-pointer"
                onClick={() => setIsContinue(false)}
              ></i>
              <h1 className="text-xl font-semibold tracking-tight">
                Continue
              </h1>
            </div>

            <form onSubmit={onSubmit}>
              <div className="grid">
                <div className="grid gap-1">
                  <Label className="sr-onl" htmlFor="businessName">
                    Business Name
                  </Label>

                  <Input
                    id="businessName"
                    placeholder="Business Name"
                    type="text"
                    name="businessName"
                    autoCapitalize="none"
                    autoComplete="businessName"
                    autoCorrect="off"
                    disabled={isLoading}
                    value={userData.businessName}
                    onChange={handleChangeBusiness}
                  />
                  {businessErrors.businessName && (
                    <p className="error-text">{businessErrors.businessName}</p>
                  )}
                </div>
                <div className="grid gap-1 mt-4">
                  <Label className="sr-onl" htmlFor="rcNumber">
                    RC Number
                  </Label>

                  <Input
                    id="lastName"
                    placeholder="RC Number"
                    type="text"
                    name="rcNumber"
                    autoCapitalize="none"
                    autoComplete="rcNumber"
                    autoCorrect="off"
                    disabled={isLoading}
                    value={userData.rcNumber}
                    onChange={handleChangeBusiness}
                  />
                  {businessErrors.rcNumber && (
                    <p className="error-text">{businessErrors.rcNumber}</p>
                  )}
                </div>
                <div className="grid gap-1 mt-4">
                  <Label className="sr-onl" htmlFor="bvn">
                    BVN(Bank Verification Number)
                  </Label>

                  <Input
                    id="bvn"
                    placeholder="bvn"
                    type="text"
                    name="bvn"
                    autoCapitalize="none"
                    autoComplete="bvn"
                    autoCorrect="off"
                    disabled={isLoading}
                    value={userData.bvn}
                    onChange={handleChangeBusiness}
                  />
                  {businessErrors.bvn && (
                    <p className="error-text">{businessErrors.bvn}</p>
                  )}
                </div>

                <Button disabled={isLoading} className="mt-8 ">
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Create Account
                </Button>
                <p className="px-8 text-center text-sm text-muted-foreground pt-2">
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
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default RegisterForm;
