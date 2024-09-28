import { z } from "zod";

export const stepOneSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const stepTwoSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  businessName: z.string().min(1, { message: "Business name is required" }),
  phoneNumber: z
    .string()
    .regex(/^\+?[0-9]\d{1,14}$/, { message: "Invalid phone number" }),
});
