"use client";

import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BankDetailsModal = () => {
  const { toast } = useToast();

  const bankDetails = {
    accountName: "John Doe",
    accountNumber: "0123456789",
    bankName: "wema",
    accountStatus: "Active",
    currency: "NGN",
  };

  const isActive = bankDetails.accountStatus.toLowerCase() === "active";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      variant: "success",
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Account Status
        </p>
        <p
          className={`font-medium ${
            isActive ? "text-green-500" : "text-red-500"
          }`}
        >
          {bankDetails.accountStatus}
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Account Name</p>
        <p className="font-medium">{bankDetails.accountName}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Account Number
        </p>
        <div className="flex items-center">
          <p className="font-medium">{bankDetails.accountNumber}</p>
          <button
            onClick={() => copyToClipboard(bankDetails.accountNumber)}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Bank Name</p>
        <p className="font-medium">{bankDetails.bankName}</p>
      </div>

      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Currency</p>
        <p className="font-medium">{bankDetails.currency}</p>
      </div>
    </div>
  );
};

export default BankDetailsModal;
