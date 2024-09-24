"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { useMediaQuery } from "@/hooks/use-media-query";
import { PlusIcon, X } from "lucide-react";
import { useState } from "react";
import BankDetailsModal from "../modals/BankDetailsModal";

const AddMoneyBtn = () => {
  const [showBankDetailsModal, setShowBankDetailsModal] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const handleAddMoney = () => {
    setShowBankDetailsModal(true);
  };

  const AddMoneyButton = () => (
    <Button
      onClick={handleAddMoney}
      className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition duration-150 ease-in-out"
    >
      <PlusIcon className="h-4 w-4 mr-2" />
      Add money
    </Button>
  );

  if (isDesktop) {
    return (
      <>
        <AddMoneyButton />
        {showBankDetailsModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md w-full shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Bank Details</h2>
                <button
                  onClick={() => setShowBankDetailsModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <BankDetailsModal />
              <div className="mt-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Please make a transfer to this account to add money to your
                  wallet.
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <Drawer open={showBankDetailsModal} onOpenChange={setShowBankDetailsModal}>
      <DrawerTrigger asChild>
        <AddMoneyButton />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Bank Details</DrawerTitle>
          <DrawerDescription>
            Please make a transfer to this account to add money to your wallet.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <BankDetailsModal />
        </div>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddMoneyBtn;
