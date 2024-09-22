"use client";

import { Eye, EyeOff, RefreshCcw } from "lucide-react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useEffect, useState } from "react";

interface MetricCardProps {
  title: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title }) => {
  const [isHidden, setIsHidden] = useLocalStorage(
    `metricHidden_${title}`,
    true
  );
  const [displayValue, setDisplayValue] = useState("0");
  const [isLoading, setIsLoading] = useState(true);

  const generateRandomValue = () => {
    return Math.floor(Math.random() * (10000000 - 10000 + 1) + 10000);
  };

  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const loadValue = () => {
    setIsLoading(true);
    setDisplayValue("0");
    setTimeout(() => {
      setDisplayValue(formatNumber(generateRandomValue()));
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    loadValue();
  }, []);

  return (
    <div className="bg-primary flex justify-between text-white lg:p-6 p-4 rounded-lg shadow">
      <div>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold">
            {isHidden ? "******" : `₦${displayValue}`}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        {isHidden ? (
          <Eye
            className="h-6 w-6 text-white cursor-pointer"
            onClick={toggleVisibility}
          />
        ) : (
          <EyeOff
            className="h-6 w-6 text-white cursor-pointer"
            onClick={toggleVisibility}
          />
        )}

        <RefreshCcw
          onClick={loadValue}
          className={`h-6 w-6 text-white cursor-pointer ${
            isLoading ? "animate-spin" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default MetricCard;
