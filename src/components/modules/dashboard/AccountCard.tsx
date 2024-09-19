import React from "react";
import Image from "next/image";

interface AccountCardProps {
  currency: string;
  amount: number;
  accountStatus: string;
  cardType: string;
  lastFour: string;
}

const AccountCard: React.FC<AccountCardProps> = ({
  currency,
  amount,
  accountStatus,
  cardType,
  lastFour,
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow ${
        accountStatus === "Active" ? "bg-indigo-600 text-white" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-3xl font-bold">{amount.toLocaleString()}</p>
          <p className="text-sm mt-1">{currency}</p>
        </div>
        <div
          className={`px-2 py-1 rounded-full text-xs ${
            accountStatus === "Active"
              ? "bg-indigo-500"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {accountStatus}
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm">•••• {lastFour}</p>
        <Image src={`/${cardType}.svg`} alt={cardType} className="h-6" />
      </div>
    </div>
  );
};

export default AccountCard;
