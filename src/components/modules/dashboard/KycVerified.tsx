"use client";

import { useGetMerchantProfile } from "@/api/profile";
import { CircleAlert } from "lucide-react";
import Link from "next/link";

const KycVerified = () => {
  const { data: profile } = useGetMerchantProfile();

  const isVerified = profile?.data?.data?.isKYCverified;
  return (
    <>
      {!isVerified && (
        <div className="flex justify-between items-center p-4 bg-red-100 rounded-lg">
          <div className="text-red-800 flex items-center gap-2">
            <CircleAlert />
            Complete your KYC process to activate your account.
          </div>
          <Link href="/settings?tab=kyc">
            <button className="bg-red-800 hover:bg-red-800/90 text-red-100 px-4 py-2 rounded-lg">
              Complete KYC
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default KycVerified;
