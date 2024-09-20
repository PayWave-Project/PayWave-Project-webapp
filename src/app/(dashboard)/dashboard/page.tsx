import Link from "next/link";

import MetricCard from "@/components/modules/dashboard/MetricCard";
import { Icons } from "@/components/common/Icons";
import { metricData, quickActions, transactions } from "@/types/data";
import AddMoneyBtn from "@/components/common/AddMoneyBtn";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-black dark:text-white">
            Dashboard
          </h2>
          <AddMoneyBtn />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {metricData.map((metric, index) => (
            <MetricCard key={index} title={metric.title} value={metric.value} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
          Quick Actions
        </h2>
        <div className="overflow-x-auto">
          <div className="flex items-center gap-6 pb-4">
            {quickActions.map((action, index) => {
              const IconComponent = Icons[action.icon as keyof typeof Icons];
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 border border-gray-400 hover:border-primary rounded-lg shadow transition duration-150 ease-in-out cursor-pointer flex-shrink-0"
                >
                  <div className="w-[200px] md:w-[255px] h-[140px] md:h-[160px] md:px-6 px-3 py-4 flex flex-col gap-2">
                    <IconComponent className="h-6 w-6 mr-2 fill-black dark:fill-white" />
                    <h3 className="md:text-lg text-sm font-semibold text-black dark:text-white">
                      {action.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {action.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
            Quick Actions
          </h2>
          <div className="overflow-x-auto">
            <div className="flex items-center gap-6 pb-4">
              {quickActions.map((action, index) => {
                const IconComponent = Icons[action.icon as keyof typeof Icons];
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 border border-gray-50 dark:border-gray-800 hover:border-primary rounded-lg shadow transition duration-150 ease-in-out cursor-pointer flex-shrink-0"
                  >
                    <div className="w-[200px] md:w-[255px] h-[140px] md:h-[160px] md:px-6 px-3 py-4 flex flex-col gap-2">
                      <IconComponent className="h-6 w-6 mr-2 fill-black dark:fill-white" />
                      <h3 className="md:text-lg text-sm font-semibold text-black dark:text-white">
                        {action.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {action.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-50 dark:border-gray-800 rounded-lg shadow overflow-hidden">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-50 dark:border-gray-800">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <Link href="/transactions" className="text-sm text-primary">
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            {transactions.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-50 dark:divide-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
                      Name
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
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white hidden sm:table-cell">
                        <div className="flex flex-col">
                          <span>{transaction.date.split(", ")[0]}</span>
                          <span className="text-xs text-gray-50">
                            {transaction.date.split(", ")[1]}
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
        </div>
      </div>
    </>
  );
};

export default Dashboard;
