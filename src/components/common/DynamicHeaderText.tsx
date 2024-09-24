"use client";

import { usePathname } from "next/navigation";

import { Icons } from "./Icons";
import { useTheme } from "next-themes";

const DynamicHeaderText = () => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const isDashboardPage = pathname === "/dashboard";
  const isTransactionsPage = pathname === "/transactions";
  const isPaymentPage = pathname === "/payments";
  const isCreateQrPage = pathname === "/payments/create-qr";
  const isNotificationsPage = pathname === "/notifications";
  const isSettingsPage = pathname === "/settings";
  const isWalletPage = pathname === "/wallet";

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 5) return "Good night";
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    if (hour < 22) return "Good evening";
    return "Good night";
  };

  const getIcon = () => {
    const hour = new Date().getHours();
    if (hour < 5 || hour >= 22)
      return (
        <Icons.night
          className="inline-block size-8"
          strokeColor={theme === "dark" ? "white" : "black"}
        />
      );
    if (hour < 12)
      return (
        <Icons.morning
          className="inline-block size-8"
          strokeColor={theme === "dark" ? "white" : "black"}
        />
      );
    if (hour < 18)
      return (
        <Icons.afternoon
          className="inline-block size-8"
          strokeColor={theme === "dark" ? "white" : "black"}
        />
      );
    return (
      <Icons.evening
        className="inline-block size-8"
        strokeColor={theme === "dark" ? "white" : "black"}
      />
    );
  };

  return (
    <div>
      <div className="lg:text-2xl text-lg font-semibold text-black dark:text-white">
        {isTransactionsPage && (
          <h1 className="lg:text-2xl text-lg font-semibold text-black dark:text-white">
            Transactions
          </h1>
        )}
        {isPaymentPage && (
          <h1 className="lg:text-2xl text-lg font-semibold text-black dark:text-white">
            Payments
          </h1>
        )}
        {isCreateQrPage && (
          <h1 className="lg:text-2xl text-lg font-semibold text-black dark:text-white">
            Create QR Code
          </h1>
        )}
        {isNotificationsPage && (
          <h1 className="lg:text-2xl text-lg font-semibold text-black dark:text-white">
            Notifications
          </h1>
        )}
        {isSettingsPage && (
          <h1 className="lg:text-2xl text-lg font-semibold text-black dark:text-white">
            Settings
          </h1>
        )}
        {isWalletPage && (
          <h1 className="lg:text-2xl text-lg font-semibold text-black dark:text-white">
            Wallet
          </h1>
        )}
      </div>
      {isDashboardPage && (
        <>
          <h1 className="flex items-center gap-2 lg:text-2xl text-lg font-semibold text-black dark:text-white">
            {getGreeting()} {getIcon()}
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
