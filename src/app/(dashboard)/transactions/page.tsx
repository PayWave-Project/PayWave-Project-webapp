"use client";

import {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Check, ChevronDown, MoreHorizontal } from "lucide-react";
import TransactionModal from "@/components/common/TransactionModal";
import { transactions } from "@/types/data";
import { TransactionType } from "@/interfaces/transaction";

const TransactionsPage = () => {
  const [typeFilter, setTypeFilter] = useState("All types");
  const [statusFilter, setStatusFilter] = useState("All status");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionType | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;
  const types = ["All types", "Withdrawal", "Deposit", "Transfer"];
  const statuses = ["All status", "Success", "Pending", "Failed"];

  const typeDropdownRef = useRef<HTMLDivElement | null>(null);
  const statusDropdownRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        closeModal();
      }
    },
    []
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        typeDropdownRef.current &&
        !typeDropdownRef.current.contains(event.target as Node) &&
        statusDropdownRef.current &&
        !statusDropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [typeDropdownRef, statusDropdownRef]);

  const filteredTransactions = transactions.filter((t) => {
    const typeMatch = typeFilter === "All types" || t.type === typeFilter;
    const statusMatch =
      statusFilter === "All status" || t.status === statusFilter;
    return typeMatch && statusMatch;
  });

  const handleTypeSelect = (type: string) => {
    setTypeFilter(type);
    setActiveDropdown(null);
  };

  const handleStatusSelect = (status: SetStateAction<string>) => {
    setStatusFilter(status);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown((prevDropdown) =>
      prevDropdown === dropdown ? null : dropdown
    );
  };

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const handleNextPage = () => {
    if (
      currentPage < Math.ceil(filteredTransactions.length / transactionsPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const openModal = (transaction: TransactionType) => {
    setSelectedTransaction(transaction);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
  };

  return (
    <div className="bg-white h-full dark:bg-gray-900 border border-gray-400 dark:border-gray-600 rounded-lg shadow overflow-hidden">
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-400 dark:border-gray-600">
        <div className="flex items-center gap-2">
          <div className="relative" ref={typeDropdownRef}>
            <button
              onClick={() => toggleDropdown("filter")}
              className="text-sm w-[150px] border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-between"
            >
              {typeFilter}
              <ChevronDown />
            </button>
            {activeDropdown === "filter" && (
              <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 z-10">
                {types.map((type) => (
                  <div
                    key={type}
                    onClick={() => handleTypeSelect(type)}
                    className={`flex items-center justify-between cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800`}
                  >
                    {type}
                    {typeFilter === type ? <Check /> : null}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative" ref={statusDropdownRef}>
            <button
              onClick={() => toggleDropdown("status")}
              className="text-sm w-[150px] border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-between"
            >
              {statusFilter}
              <ChevronDown />
            </button>
            {activeDropdown === "status" && (
              <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 z-10">
                {statuses.map((status) => (
                  <div
                    key={status}
                    onClick={() => handleStatusSelect(status)}
                    className={`flex items-center justify-between cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800`}
                  >
                    {status}
                    {statusFilter === status ? <Check /> : null}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        {filteredTransactions.length > 0 ? (
          <>
            <table className="min-w-full divide-y divide-gray-400 dark:divide-gray-600">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                    Status
                  </th>
                  <th className="relative px-4 sm:px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-400 dark:divide-gray-600">
                {currentTransactions.map((transaction, index) => (
                  <tr key={transaction.reference || index}>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-800 mr-2"></div>
                        <div className="flex flex-col gap-0.5 text-gray-800 dark:text-white">
                          <p className="text-base font-bold">
                            {transaction.user}
                          </p>

                          <p className="text-sm font-medium text-gray-500">
                            {transaction.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">
                      <div className="flex flex-col">
                        <span>{transaction.date.split(", ")[0]}</span>
                        <span className="text-xs text-gray-400">
                          {transaction.date.split(", ")[1]}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">
                      {transaction.type}
                    </td>
                    <td className="flex flex-col gap-0.5 px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      ₦{transaction.amount.toFixed(2)}
                      <span className="text-xs text-gray-400">
                        (₦{transaction.fee.toFixed(2)})
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-lg 
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
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => openModal(transaction)}
                        className="text-black dark:text-white p-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-400 dark:border-gray-600"
                      >
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="w-full flex justify-between items-center px-4 sm:px-6 py-4 border-t border-gray-400 dark:border-gray-600">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="text-sm text-primary disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-sm text-gray-500 dark:text-white">
                Page {currentPage} of{" "}
                {Math.ceil(filteredTransactions.length / transactionsPerPage)}
              </span>
              <button
                onClick={handleNextPage}
                disabled={
                  currentPage ===
                  Math.ceil(filteredTransactions.length / transactionsPerPage)
                }
                className="text-sm text-primary disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="h-[400px] flex justify-center items-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              No transactions found
            </p>
          </div>
        )}
      </div>
      {selectedTransaction && (
        <div
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <TransactionModal
            transaction={selectedTransaction}
            onClose={closeModal}
          />
        </div>
      )}
    </div>
  );
};

export default TransactionsPage;
