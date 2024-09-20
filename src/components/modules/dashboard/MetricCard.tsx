"use client";

import { Eye, EyeOff, RefreshCcw } from "lucide-react";
import useLocalStorage from "@/hooks/useLocalStorage";

interface MetricCardProps {
  title: string;
  value: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value }) => {
  const [isHidden, setIsHidden] = useLocalStorage(
    `metricHidden_${title}`,
    true
  );

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="bg-primary flex justify-between text-white lg:p-8 p-4 rounded-lg shadow">
      <div>
        <h3 className="text-[16px] font-semibold mb-5">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">
            {isHidden ? "******" : `₦${value}`}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        {isHidden ? (
          <Eye
            className="h-5 w-5 text-white cursor-pointer text-sm"
            onClick={toggleVisibility}
          />
        ) : (
          <EyeOff
            className="h-5 w-5 text-white cursor-pointer"
            onClick={toggleVisibility}
          />
        )}
        <RefreshCcw className="h-5 w-5 text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default MetricCard;
