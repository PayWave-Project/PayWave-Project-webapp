"use client";

import { usePathname } from "next/navigation";

import { Icons } from "./Icons";

const DynamicHeaderText = () => {
  const pathname = usePathname();

  const isDashboardPage = pathname === "/dashboard";
  const isTransactionsPage = pathname === "/transactions";

  return (
    <div>
      <div className="lg:text-2xl text-lg font-semibold text-black dark:text-white">
        {isTransactionsPage && (
          <h1 className="lg:text-2xl text-lg font-semibold text-black dark:text-white">
            Transactions
          </h1>
        )}
      </div>
      {isDashboardPage && (
        <>
          <h1 className="lg:text-2xl text-lg font-semibold text-black dark:text-white">
            Good morning <Icons.sun className="inline-block size-10" />
          </h1>
          <p className="lg:flex hidden text-sm text-gray-500">
            Check the latest updates on your accounts and transactions.
          </p>
        </>
      )}
    </div>
  );
};

export default DynamicHeaderText;
