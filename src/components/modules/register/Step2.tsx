"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepTwoSchema } from "./schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function StepTwo({
  onBack,
  onSubmitFinal,
  defaultValues,
  isLoading,
}: {
  onBack: () => void;
  onSubmitFinal: (data: any) => void;
  defaultValues: any;
  isLoading: boolean;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(stepTwoSchema),
    defaultValues,
  });

  const onSubmit = (data: any) => {
    onSubmitFinal(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <Label>First Name</Label>
        <Input type="text" {...register("firstName")} />
        {errors.firstName?.message && (
          <p className="text-red-500 text-sm">
            {errors.firstName.message as string}
          </p>
        )}
      </div>

      <div>
        <Label>Last Name</Label>
        <Input type="text" {...register("lastName")} />
        {errors.lastName?.message && (
          <p className="text-red-500 text-sm">
            {errors.lastName.message as string}
          </p>
        )}
      </div>

      <div>
        <Label>Business Name</Label>
        <Input type="text" {...register("businessName")} />
        {errors.businessName?.message && (
          <p className="text-red-500 text-sm">
            {errors.businessName.message as string}
          </p>
        )}
      </div>

      <div>
        <Label>Phone Number</Label>
        <Input type="number" {...register("phoneNumber")} />
        {errors.phoneNumber?.message && (
          <p className="text-red-500 text-sm">
            {errors.phoneNumber.message as string}
          </p>
        )}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" type="button" onClick={onBack}>
          Back
        </Button>
        <Button type="submit">{isLoading ? "Loading..." : "Submit"}</Button>
      </div>
    </form>
  );
}
