"use client";

import {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Check, ChevronDown, MoreHorizontal } from "lucide-react";
import {
  isToday,
  isYesterday,
  isThisWeek,
  isThisMonth,
  isThisYear,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

import TransactionModal from "@/components/modals/TransactionModal";
import { useGetTransactionHistory } from "@/api/wallet";
import { transactionHistory } from "@/components/modules/dashboard/RecentTransactions";

const TransactionsPage = () => {
  const [typeFilter, setTypeFilter] = useState("All types");
  const [statusFilter, setStatusFilter] = useState("All status");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedTransaction, setSelectedTransaction] =
    useState<transactionHistory | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;
  const types = ["All types", "Withdrawal", "Deposit", "Transfer"];
  const statuses = ["All status", "Success", "Pending", "Failed"];

  const typeDropdownRef = useRef<HTMLDivElement | null>(null);
  const statusDropdownRef = useRef<HTMLDivElement | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const { data, refetch } = useGetTransactionHistory(currentPage);
  const transactions = (data?.data?.data as transactionHistory[]) || [];
  const pagination = data?.data?.pagination;

  console.log(transactions);

  const handleNextPage = () => {
    if (pagination && currentPage < pagination.totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await refetch();
      setIsLoading(false);
    };

    fetchData();
  }, [currentPage, refetch]);

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

  const openModal = (transaction: transactionHistory) => {
    setSelectedTransaction(transaction);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
  };

  const getRelativeDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();

    if (isToday(date)) return "Today";
    if (isYesterday(date)) return "Yesterday";

    const daysDiff = differenceInDays(now, date);
    if (daysDiff < 7) return `${daysDiff} days ago`;

    if (isThisWeek(date)) return "This week";

    const weeksDiff = differenceInWeeks(now, date);
    if (weeksDiff === 1) return "Last week";
    if (weeksDiff < 4) return `${weeksDiff} weeks ago`;

    if (isThisMonth(date)) return "This month";

    const monthsDiff = differenceInMonths(now, date);
    if (monthsDiff === 1) return "Last month";
    if (monthsDiff < 12) return `${monthsDiff} months ago`;

    if (isThisYear(date)) return "This year";

    const yearsDiff = differenceInYears(now, date);
    return `${yearsDiff} year${yearsDiff > 1 ? "s" : ""} ago`;
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
        {isLoading ? (
          <div className="h-[400px] flex justify-center items-center py-8">
            <p className="text-gray-500 dark:text-gray-400">Loading...</p>
          </div>
        ) : filteredTransactions.length > 0 ? (
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
                    Activity
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
                {filteredTransactions.map((transaction, index) => (
                  <tr key={transaction.reference || index}>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex flex-col gap-0.5 text-gray-800 dark:text-white">
                          <p className="text-base font-bold">
                            {transaction.reference}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">
                      <div className="flex flex-col">
                        <span>{getRelativeDate(transaction.date)}</span>
                        <span className="text-xs text-gray-400">
                          {transaction.date.split(", ")[1]}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">
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
                Page {currentPage} of {pagination?.totalPages || 1}
              </span>
              <button
                onClick={handleNextPage}
                disabled={!pagination || currentPage === pagination.totalPages}
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
