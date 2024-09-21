"use client";

import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface ConfirmLogoutModalProps {
  onCancel: () => void;
}

const ConfirmLogoutModal: React.FC<ConfirmLogoutModalProps> = ({
  onCancel,
}) => {
  const router = useRouter();
  const toast = useToast();
  const handleConfirm = async () => {
    try {
      toast.toast({
        title: "Logged out successfully",
        variant: "success",
      });
      router.push("/login");
    } catch (error) {
      toast.toast({
        title: "Failed to logout",
        description: "Please try again",
        variant: "error",
      });
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-sm w-full shadow-lg">
        <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
        <p className="mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogoutModal;
