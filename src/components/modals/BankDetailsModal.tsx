"use client";

import { X, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BankDetailsModalProps {
  onClose: () => void;
}

const BankDetailsModal: React.FC<BankDetailsModalProps> = ({ onClose }) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Bank Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
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
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Account Name
            </p>
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
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Bank Name
            </p>
            <p className="font-medium">{bankDetails.bankName}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Currency</p>
            <p className="font-medium">{bankDetails.currency}</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Please make a transfer to this account to add money to your wallet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankDetailsModal;
