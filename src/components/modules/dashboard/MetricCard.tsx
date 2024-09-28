"use client";

import { useEffect, useState } from "react";

import { Eye, EyeOff, RefreshCcw } from "lucide-react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useGetBalance } from "@/api/wallet";

interface MetricCardProps {
  title: string;
}

interface StatCardProps {
  title: string;
  value: string;
  trend: "up" | "down";
  isHidden: boolean;
}

const MetricCard: React.FC<MetricCardProps> = () => {
  const { data, refetch, isLoading, isFetching } = useGetBalance();
  const balance = data?.data.balance;
  const [isHidden, setIsHidden] = useLocalStorage(
    `metricHidden_Total_Balance`,
    true
  );
  const [displayValue, setDisplayValue] = useState("0");

  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    if (balance) {
      setDisplayValue(formatNumber(balance));
    }
  }, [balance]);

  return (
    <div className="grid grid-cols-2 lg:gap-6 gap-4">
      <div className="col-span-2 lg:col-span-1">
        <MainMetricCard
          isHidden={isHidden}
          displayValue={displayValue}
          isLoading={isFetching}
          onToggleVisibility={() => setIsHidden(!isHidden)}
          onRefresh={refetch}
        />
      </div>
      {/* <div className="col-span-1 hidden md:block">
        <StatCard
          title="Total Deposits"
          value={displayValue}
          trend="down"
          isHidden={isHidden}
        />
      </div>
      <div className="col-span-1 hidden md:block">
        <StatCard
          title="Total Withdrawal"
          value={displayValue}
          trend="up"
          isHidden={isHidden}
        />
      </div> */}
    </div>
  );
};

const MainMetricCard: React.FC<{
  isHidden: boolean;
  displayValue: string;
  isLoading: boolean;
  onToggleVisibility: () => void;
  onRefresh: () => void;
}> = ({ isHidden, displayValue, isLoading, onToggleVisibility, onRefresh }) => (
  <div className="bg-primary flex justify-between text-white lg:p-6 p-4 rounded-lg shadow">
    <div>
      <h3 className="text-[16px] font-semibold mb-5">Total Balance</h3>
      <div className="flex justify-between items-center">
        <p className="text-3xl font-bold">
          {isHidden ? "******" : `₦${displayValue}`}
        </p>
      </div>
    </div>
    <div className="flex flex-col justify-between">
      {isHidden ? (
        <Eye
          className="h-5 w-5 text-white cursor-pointer text-sm"
          onClick={onToggleVisibility}
        />
      ) : (
        <EyeOff
          className="h-5 w-5 text-white cursor-pointer"
          onClick={onToggleVisibility}
        />
      )}{" "}
      <RefreshCcw
        onClick={onRefresh}
        className={`h-6 w-6 text-white cursor-pointer ${
          isLoading ? "animate-spin" : ""
        }`}
      />
    </div>
  </div>
);

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  trend,
  isHidden,
}) => (
  <div className="bg-slate-200 dark:bg-gray-800 flex justify-between items-center text-primary lg:p-6 p-4 rounded-lg shadow">
    <div>
      <h3 className="text-[16px] font-medium dark:text-white/50 mb-5">
        {title}
      </h3>
      <p className="text-2xl font-bold text-nowrap break-words dark:text-white">
        {isHidden ? "******" : `₦${value}`}
      </p>
    </div>
    <div className="flex flex-col items-end">
      {trend === "down" ? (
        <TrendingDown size={45} color="#3e9392" />
      ) : (
        <TrendingUp size={45} color="#c90c0c" />
      )}
    </div>
  </div>
);

export default MetricCard;
