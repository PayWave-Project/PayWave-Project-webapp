"use client";

import { useRouter } from "next/navigation";
import { useGenerateQrCode } from "@/api/qr-code";
import { Icons } from "@/components/common/Icons";
import { ChevronLeft } from "lucide-react";
import React, { useState, useEffect } from "react";
import QRCodeDownload from "@/components/modules/qr-code/QrcodeDownload";

const CreateQRCustom: React.FC = () => {
  const [resData, setResData] = useState<any>({});
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const merchantEmail = localStorage.getItem("wave_email") ?? "";
  const { mutateAsync, isLoading } = useGenerateQrCode();

  const [formData, setFormData] = useState({
    email: merchantEmail,
    type: "static_custom",
    amount: 100,
  });

  const handleFetchDefinedQr = async () => {
    try {
      const res = await mutateAsync(formData);
      setResData(res.data);
    } catch (err) {
      setError("Failed to generate QR code. Please try again.");
    }
  };
  useEffect(() => {
    handleFetchDefinedQr();
  }, []);
  return (
    <div>
      <ChevronLeft className="cursor-pointer" onClick={() => router.back()} />
      <div className="w-full max-w-[600px] mx-auto h-screen py-">
        <div className="bg-white dark:bg-gray-900 border border-gray-100  rounded-lg shadow transition duration-150 ease-in-out cursor-pointer flex-shrink-0">
          <div className="md:px-6 px-3 py-4 flex flex-col gap-2">
            <h3 className="md:text-lg my-2 text-sm font-semibold text-black dark:text-white">
              Custom Amount QR Code
            </h3>
            {isLoading ? (
              <Icons.spinner className="mr-2 h-[50px] w-[50px] animate-spin text-primary" />
            ) : error ? (
              <p className="text-red-500 py-4 text-center">
                {error}{" "}
                <span className="text-primary" onClick={handleFetchDefinedQr}>
                  Re-generate
                </span>{" "}
              </p>
            ) : resData ? (
              <div>
                <QRCodeDownload qrCodeData={resData.qrCode} />;
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQRCustom;
