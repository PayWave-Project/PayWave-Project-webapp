"use client";

import { useGetNotification } from "@/api/profile";

type notification = {
  notificationMessage: string;
  date: string;
  time: string;
};

const NotificationsPage = () => {
  const { data, isLoading } = useGetNotification();
  const notifications = (data?.data?.data as notification[]) || [];
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
          notifications.map((notification) => (
            <ul>
              <li
                key={notification.time}
                className="mb-2 p-2 border-b border-gray-200"
              >
                {notification.notificationMessage}
              </li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
