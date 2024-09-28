"use client";

import Cookies from "js-cookie";
import { useQueryClient } from "@tanstack/react-query";

import { useSignOutMerchant } from "@/api/auth";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Icons } from "../common/Icons";
import { useAuthStore } from "@/store";

interface ConfirmLogoutModalProps {
  onCancel: () => void;
}

const ConfirmLogoutModal: React.FC<ConfirmLogoutModalProps> = ({
  onCancel,
}) => {
  const queryClient = useQueryClient();
  const removeAuthStore = useAuthStore((state) => state.removeAuthStore);
  const { mutateAsync, isLoading } = useSignOutMerchant();

  const router = useRouter();
  const toast = useToast();
  const handleConfirm = async () => {
    try {
      await mutateAsync();
      toast.toast({
        title: "Logged out successfully",
        variant: "success",
      });
      Cookies.remove("token");
      Cookies.remove("id");
      removeAuthStore();
      queryClient.clear();

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
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex items-center gap-0.5 px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}{" "}
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogoutModal;
