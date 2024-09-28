import Link from "next/link";

import MetricCard from "@/components/modules/dashboard/MetricCard";
import AddMoneyBtn from "@/components/common/AddMoneyBtn";
import RecentTransactions from "@/components/modules/dashboard/RecentTransactions";
import KycVerified from "@/components/modules/dashboard/KycVerified";
import QuickAction from "@/components/modules/dashboard/QuickAction";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <KycVerified />
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-black dark:text-white">
            Dashboard
          </h2>
          <AddMoneyBtn />
        </div>

        <MetricCard title={""} />
      </div>

      <div>
        <div>
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            Quick Actions
          </h2>
          <div className="overflow-x-auto">
            <QuickAction />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-50 dark:border-gray-800 rounded-lg shadow overflow-hidden">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-50 dark:border-gray-800">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <Link href="/transactions" className="text-sm text-primary">
              View all
            </Link>
          </div>
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
