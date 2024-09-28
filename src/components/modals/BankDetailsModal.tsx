"use client";

import { Copy, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useGetDepositAccount } from "@/api/wallet";

type BankAccountDetails = {
  accountName: string;
  accountNumber: string;
  bankName: string;
  bankCode: string;
};

const BankDetailsModal = () => {
  const { data, isLoading } = useGetDepositAccount();
  const bankDetails: BankAccountDetails = data?.data?.data;

  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      variant: "success",
    });
  };

  return (
    <div className="space-y-4">
      {isLoading ? (
        <div className="h-[200px] flex items-center justify-center">
          <Loader2 className="w-6 h-6 animate-spin" />
        </div>
      ) : bankDetails ? (
        <>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Account Status
            </p>
            <p className={`font-medium ${"text-green-500"}`}>Active</p>
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
            <p className="font-medium">NGN</p>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Please make a transfer to this account to add money to your
              wallet.
            </p>
          </div>
        </>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          No details found
        </p>
      )}
    </div>
  );
};

export default BankDetailsModal;
