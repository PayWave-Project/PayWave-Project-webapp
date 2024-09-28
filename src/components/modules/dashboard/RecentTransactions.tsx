"use client";

import { useGetTransactionHistory } from "@/api/wallet";

export type transactionHistory = {
  reference: string;
  amount: number;
  status: string;
  type: string;
  date: string;
  time: string;
};

const RecentTransactions = () => {
  const { data, isLoading } = useGetTransactionHistory();

  const transactions = (data?.data?.data as transactionHistory[]) || [];

  return (
    <div className="overflow-x-auto">
      {isLoading ? (
        <div className="h-[400px] flex justify-center items-center py-8">
          <p className="text-gray-500 dark:text-gray-50">Loading...</p>
        </div>
      ) : transactions.length > 0 ? (
        <table className="min-w-full divide-y divide-gray-50 dark:divide-gray-800">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Reference
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider hidden sm:table-cell">
                Date
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider hidden md:table-cell">
                Type
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Amount
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                Status
              </th>
              <th className="relative px-4 sm:px-6 py-3 hidden sm:table-cell">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex flex-col gap-0.5 text-gray-800 dark:text-white">
                      <p className="text-base font-bold">
                        {transaction.reference}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white hidden sm:table-cell">
                  <div className="flex flex-col">
                    <span>{transaction.date}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-300">
                      {transaction.time}
                    </span>
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white hidden md:table-cell">
                  {transaction.type}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  ₦{transaction.amount.toFixed(2)}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-lg
        ${
          transaction.status === "success"
            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            : transaction.status === "pending"
            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
        }`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="h-[400px] flex justify-center items-center py-8">
          <p className="text-gray-500 dark:text-gray-50">
            No transactions found
          </p>
        </div>
      )}
    </div>
  );
};

export default RecentTransactions;
