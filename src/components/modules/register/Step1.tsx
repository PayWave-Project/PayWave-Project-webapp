"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { stepOneSchema } from "./schema";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function StepOne({
  onNext,
  defaultValues,
}: {
  onNext: (data: { email: string; password: string }) => void;
  defaultValues: { email: string; password: string };
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(stepOneSchema),
    defaultValues,
  });

  const onSubmit = (data: any) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <Label>Email</Label>
        <Input type="email" {...register("email")} />
        {errors.email && (
          <p className="text-red-500 text-sm">
            {errors.email.message?.toString()}
          </p>
        )}
      </div>

      <div>
        <Label>Password</Label>
        <Input type="password" {...register("password")} />
        {errors.password && (
          <p className="text-red-500 text-sm">
            {errors.password.message?.toString()}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
}
