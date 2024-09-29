"use client";

import { useState } from "react";

import { quickActions } from "@/types/data";
import { Icons } from "@/components/common/Icons";
import SendMoneyModal from "@/components/modals/SendMoneyModal";
import { useMediaQuery } from "@/hooks/use-media-query";
import { X } from "lucide-react";
import BankDetailsModal from "@/components/modals/BankDetailsModal";
import WithdrawalModal from "@/components/modals/WithdrawModal";

const QuickAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBankDetailsModalOpen, setIsBankDetailsModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  //   const isDesktop = useMediaQuery("(min-width: 768px)");
  type QuickActionType = (typeof quickActions)[number];

  const handleActionClick = (action: QuickActionType) => {
    if (action.title === "Send Money") {
      setIsModalOpen(true);
    } else if (action.title === "Deposit") {
      setIsBankDetailsModalOpen(true);
    } else if (action.title === "Withdraw") {
      setIsWithdrawModalOpen(true);
    } else {
      window.location.href = action.href;
    }
  };

  const QuickActionNav = () => (
    <div className="flex items-center gap-6 pb-4">
      {quickActions.map((action, index) => {
        const IconComponent = Icons[action.icon as keyof typeof Icons];
        return (
          <div
            key={index}
            onClick={() => handleActionClick(action)}
            className="bg-white dark:bg-gray-900 border border-gray-50 dark:border-gray-800 hover:border-primary/30 rounded-lg shadow transition duration-150 ease-in-out cursor-pointer flex-shrink-0"
          >
            <div className="w-[200px] md:w-[255px] h-[140px] md:h-[160px] md:px-6 px-3 py-4 flex flex-col gap-2">
              <IconComponent className="h-6 w-6 mr-2 fill-black dark:fill-white" />
              <h3 className="md:text-lg text-sm font-semibold text-black dark:text-white">
                {action.title}
              </h3>
              <p className="text-sm text-gray-500">{action.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
  return (
    <>
      <QuickActionNav />
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Send Money</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <SendMoneyModal />
          </div>
        </div>
      )}
      {isBankDetailsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Bank Details</h2>
              <button
                onClick={() => setIsBankDetailsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <BankDetailsModal />
          </div>
        </div>
      )}
      {isWithdrawModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Withdraw</h2>
              <button
                onClick={() => setIsWithdrawModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <WithdrawalModal />
          </div>
        </div>
      )}
    </>
  );
};

export default QuickAction;
