"use client";

import { useState } from "react";

import { useUpdateMerchantKyc } from "@/api/profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const KYC = () => {
  const { mutateAsync, isLoading } = useUpdateMerchantKyc();
  const { toast } = useToast();
  const [bvn, setBvn] = useState("");
  const [cac, setCac] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const payload = {
        BVN: bvn,
        CAC: cac,
      };
      const res = await mutateAsync(payload);
      toast({
        title: "Success",
        description: "KYC submitted successfully",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit KYC",
        variant: "error",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <Label className="block mb-2">KYC ID</Label>
        <Input
          type="text"
          className="border px-4 py-2 w-full"
          placeholder="Enter CAC"
          value={cac}
          onChange={(e) => setCac(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <Label className="block mb-2">BVN</Label>
        <Input
          type="text"
          className="border px-4 py-2 w-full"
          placeholder="Enter BVN"
          value={bvn}
          onChange={(e) => setBvn(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <Button
          disabled={isLoading}
          type="submit"
          className="bg-primary text-white px-4 py-2"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
