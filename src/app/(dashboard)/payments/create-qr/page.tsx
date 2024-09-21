"use client";

import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const amountTypes = ["Any", "Min", "Max", "Fixed"];
const currencies = ["NGN"];

const CreateQR = () => {
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showAmountTypeDropdown, setShowAmountTypeDropdown] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    narration: "",
    bank_name: "",
    account_number: "",
    currency: "NGN",
    amountType: "Any",
    amount: "",
  });

  const handleDropdownChange = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (name === "currency") setShowCurrencyDropdown(false);
    if (name === "amountType") setShowAmountTypeDropdown(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Generate QR code using formData
    console.log("Form data submitted:", formData);
  };
  return (
    <div className="w-full max-w-[800px] mx-auto h-screen">
      <div className="bg-white dark:bg-gray-900 border border-gray-400 hover:border-primary rounded-lg shadow transition duration-150 ease-in-out cursor-pointer flex-shrink-0">
        <div className="md:px-6 px-3 py-4 flex flex-col gap-2">
          <h3 className="md:text-lg text-sm font-semibold text-black dark:text-white">
            Add Details
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <div className="flex flex-col md:flex-row gap-2">
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <Input
                name="account_number"
                type="number"
                placeholder="Account Number"
                value={formData.account_number}
                onChange={handleInputChange}
              />
              <Input
                name="bank_name"
                type="text"
                placeholder="Bank Name"
                value={formData.bank_name}
                onChange={handleInputChange}
              />
            </div>
            <textarea
              name="narration"
              placeholder="Narration"
              value={formData.narration}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              rows={3}
            />
            <div className="flex gap-2">
              <div className="relative">
                <button
                  type="button"
                  className="text-sm w-[150px] border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-between"
                  onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                >
                  {formData.currency || "Select Currency"}
                  <ChevronDown />
                </button>
                {showCurrencyDropdown && (
                  <div className="absolute mt-2 w-[150px] rounded-md shadow-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 z-10">
                    {currencies.map((currency) => (
                      <div
                        key={currency}
                        className={`flex items-center justify-between cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800`}
                        onClick={() =>
                          handleDropdownChange("currency", currency)
                        }
                      >
                        {currency}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  type="button"
                  className="text-sm w-[150px] border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-between"
                  onClick={() =>
                    setShowAmountTypeDropdown(!showAmountTypeDropdown)
                  }
                >
                  {formData.amountType || "Select Amount Type"}
                  <ChevronDown />
                </button>
                {showAmountTypeDropdown && (
                  <div className="absolute mt-2 w-[150px] rounded-md shadow-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 z-10">
                    {amountTypes.map((type) => (
                      <div
                        key={type}
                        className={`flex items-center justify-between cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800`}
                        onClick={() => handleDropdownChange("amountType", type)}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {formData.amountType === "fixed" && (
              <Input
                name="amount"
                type="number"
                placeholder="Fixed Amount"
                value={formData.amount}
                onChange={handleInputChange}
              />
            )}
            {formData.amountType === "min" && (
              <Input
                name="amount"
                type="number"
                placeholder="Minimum Amount"
                value={formData.amount}
                onChange={handleInputChange}
              />
            )}
            {formData.amountType === "max" && (
              <Input
                name="amount"
                type="number"
                placeholder="Maximum Amount"
                value={formData.amount}
                onChange={handleInputChange}
              />
            )}

            <div className="flex justify-end">
              <button
                className="flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition duration-150 ease-in-out"
                type="submit"
              >
                Generate QR Code
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateQR;
