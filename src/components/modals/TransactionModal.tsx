import React from "react";
import { Copy, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { TransactionType } from "@/interfaces/transaction";

interface TransactionModalProps {
  transaction: TransactionType;
  onClose: () => void;
}

const TransactionModal: React.FC<TransactionModalProps> = ({
  transaction,
  onClose,
}) => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied reference id",
      variant: "success",
    });
  };
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Transaction Receipt</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="border-t border-b border-dashed border-gray-300 dark:border-gray-600 py-4 mb-4">
        <div className="flex items-center justify-center">
          <p className="font-mono">{transaction.reference || "N/A"}</p>
          <button
            onClick={() => copyToClipboard(transaction.reference)}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Transaction date
          </p>
          <p>{transaction.date}</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Account name</span>
          <span className="font-medium">{transaction.user}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Bank name:</span>
          <span className="font-medium">{transaction.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">
            Transaction type:
          </span>
          <span className="font-medium">{transaction.type}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">
            Amount tendered:
          </span>
          <span className="font-medium">₦{transaction.amount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">
            Transaction fees:
          </span>
          <span className="font-medium">₦{transaction.fee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Narration:</span>
          <span className="font-medium">
            {transaction.description || "N/A"}
          </span>
        </div>
        <div className="flex justify-between font-bold pt-2 border-t border-gray-300 dark:border-gray-600">
          <span>Transaction total:</span>
          <span>₦{(transaction.amount + transaction.fee).toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6 text-center">
        <span
          className={`px-3 py-1 text-sm font-semibold rounded-full 
    ${
      transaction.status === "Success"
        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
        : transaction.status === "Pending"
        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    }`}
        >
          {transaction.status}
        </span>
      </div>
    </div>
  );
};

export default TransactionModal;
