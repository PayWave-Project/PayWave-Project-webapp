"use client";

import { useGetNotification } from "@/api/profile";
import { NotificationsType } from "@/api/profile";
import { formatDistanceToNow } from "date-fns";

const NotificationsPage = () => {
  const { data, isLoading } = useGetNotification();
  const notifications = (data?.data?.data as NotificationsType[]) || [];

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date");
      }
      return formatDistanceToNow(date, { addSuffix: true });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Unknown date";
    }
  };
  return (
    <div className="min-w-[400px] w-full mx-auto p-4 bg-white shadow-md rounded-lg">
      <div>
        {isLoading ? (
          <div className="h-[400px] flex justify-center items-center py-8">
            <p className="text-gray-500 dark:text-gray-50">Loading...</p>
          </div>
        ) : notifications.length === 0 ? (
          <div className="h-[400px] flex justify-center items-center py-8">
            <p className="text-gray-500 dark:text-gray-50">
              No notifications found
            </p>
          </div>
        ) : (
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li
                key={notification._id}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start">
                  <div
                    className={`w-2 h-2 mt-2 mr-3 rounded-full ${
                      notification.subject?.includes("Success")
                        ? "bg-green-500"
                        : notification.subject?.includes("Failed")
                        ? "bg-red-500"
                        : notification.subject
                        ? "bg-blue-500"
                        : ""
                    }`}
                  ></div>
                  <div className="flex-grow">
                    <div className="flex flex-col font-semibold text-gray-800">
                      <p>{notification.message.split(".")[0]}</p>
                      <p className="text-sm">
                        {notification.message.split(".")[1]}
                      </p>
                    </div>
                    <div className="mt-2 flex justify-between items-center text-sm text-gray-500">
                      <span>
                        {formatDate(notification.date)} {notification.time}
                      </span>

                      <span>{notification.email}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
