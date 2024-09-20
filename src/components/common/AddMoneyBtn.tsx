"use client";

import { useState } from "react";
import { PlusIcon } from "lucide-react";

import BankDetailsModal from "../modals/BankDetailsModal";

const AddMoneyBtn = () => {
  const [showBankDetailsModal, setShowBankDetailsModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowBankDetailsModal(true)}
        className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition duration-150 ease-in-out"
      >
        <PlusIcon className="h-4 w-4 mr-2" />
        Add money
      </button>
      {showBankDetailsModal && (
        <BankDetailsModal onClose={() => setShowBankDetailsModal(false)} />
      )}
    </>
  );
};

export default AddMoneyBtn;
