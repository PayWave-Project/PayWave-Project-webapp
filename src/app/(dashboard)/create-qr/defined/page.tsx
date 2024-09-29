"use client";

import { useRouter } from "next/navigation";
import { useGenerateQrCode } from "@/api/qr-code";
import { Icons } from "@/components/common/Icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {  ChevronLeft } from "lucide-react";
import Modal from "@/components/modals/Modal";
import React, { useState,useEffect } from "react";
import QRCodeDownload from "@/components/modules/qr-code/QrcodeDownload";


const CreateQRDefined : React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resData, setResData] = useState<any>({});
  const [errorAmount, setAmountError] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
    const router = useRouter()

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const merchantEmail = localStorage.getItem("wave_email") ?? "";
  const { mutateAsync, isLoading } = useGenerateQrCode();

  const [formData, setFormData] = useState({
    email: merchantEmail,
    amount: 0,
    narration: "",
    type: "static_defined",
  });

  const validateAmount = (value: string): string => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue) || parsedValue < 100) {
      return "Amount must be more than ₦100";
    }
    return "";
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const regex = /^\d*\.?\d*$/;
    if (value === "" || regex.test(value)) {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
      const validationError = validateAmount(value);
      setAmountError(validationError);
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await mutateAsync(formData);
      setResData(res.data);
      setIsModalOpen(true);
    } catch (err) {
      setError("Failed to generate QR code. Please try again.");
    }
  };
  useEffect(() => {
  }, [router]);

  return (
    <div>
      <ChevronLeft className="cursor-pointer" onClick={() => router.back()}/>
      <div className="w-full max-w-[600px] mx-auto h-screen py-10">
      <div className="bg-white dark:bg-gray-900 border border-gray-100  rounded-lg shadow transition duration-150 ease-in-out cursor-pointer flex-shrink-0">
        <div className="md:px-6 px-3 py-4 flex flex-col gap-2">
          <h3 className="md:text-lg my-2 text-sm font-semibold text-black dark:text-white">
            Generate Defined Amount QR Code
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
          <div>
          <Label className="" htmlFor="amount">
              Amount(₦)
            </Label>
            <Input
              type="text"
              placeholder=""
              name="amount"
              value={formData.amount}
              onChange={handleAmountChange}
              disabled={isLoading}
            />
            {errorAmount && (
              <p style={{ color: "red" }} className="text-xs">
                {errorAmount}
              </p>
            )}
          </div>
           <div>
           <Label className="" htmlFor="narration">
           Narration
            </Label>
           <textarea
              name="narration"
              placeholder="Enter payment narration"
              value={formData.narration}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md placeholder:text-sm"
              disabled={isLoading}
              rows={4}
            />
           </div>
            <div className="flex justify-end">
              <button
                disabled={isLoading}
                className="flex text-sm items-center px-4 py-3 bg-primary text-white rounded hover:bg-primary/90 transition duration-150 ease-in-out"
              >
                {isLoading && (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Generate QR Code
              </button>
            </div>
          </form>

          <Modal isOpen={isModalOpen} onClose={closeModal} title="Defined Amount QR Code">
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin text-primary" />
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : resData ? (
              <div>
                <QRCodeDownload qrCodeData={resData.qrCode} />
              </div>
            ) : null}
          </Modal>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default CreateQRDefined;
