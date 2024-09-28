"use client";

import { Landmark, ChevronsUpDown, Check, Loader2 } from "lucide-react";
import OtpInput from "react-otp-input";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { useGetBankList, useVerifyBank, useWithdrawMoney } from "@/api/wallet";
import { Label } from "@/components/ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import Image from "next/image";
import success from "@/assets/images/green-arrow-pointing-right.png";

interface Bank {
  _id: string;
  slug: string;
  name: string;
  code: string;
  nibss_bank_code: string;
  country: string;
}

const WithdrawalModal = () => {
  const { toast } = useToast();
  const { mutateAsync: verifyBank, isLoading: verifingBank } = useVerifyBank();
  const { data, isLoading: loadingBankList } = useGetBankList();
  const { mutateAsync: withdrawMoney, isLoading: withdrawingMoney } =
    useWithdrawMoney();

  const bankLists: Bank[] = data?.data?.data || [];

  const [step, setStep] = useState(1);
  const [bankListOpen, setBankListOpen] = useState(false);
  const [bankListValue, setBankListValue] = useState("");
  const [bankListCode, setBankListCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [email, setEmail] = useState("");
  const [verificationResult, setVerificationResult] = useState("");
  const [amount, setAmount] = useState("");
  const [pinValue, setPinValue] = useState("");
  const handleInputChange = (pin: string) => {
    setPinValue(pin);
  };

  const handleNextStep = (step: number) => {
    setStep(step);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  useEffect(() => {
    const verifyBankAccount = async () => {
      if (accountNumber.length !== 10) {
        setVerificationResult("");
        return;
      }
      if (bankListCode && accountNumber.length === 10) {
        try {
          const result = await verifyBank({
            beneficiaryBankCode: bankListCode,
            beneficiaryAccountNumber: accountNumber,
          });
          const verifyResult = result.data.data.account_name;
          setVerificationResult(verifyResult);
        } catch (error) {
          setVerificationResult("");
          toast({
            title: "Verification Failed",
            description:
              "Unable to verify the account. Please check the details and try again.",
            variant: "error",
          });
        }
      } else {
        setVerificationResult("");
      }
    };

    verifyBankAccount();
  }, [bankListValue, accountNumber]);

  useEffect(() => {
    const handleWithdrawMoney = async () => {
      if (pinValue.length === 4) {
        try {
          await withdrawMoney({
            beneficiaryBankCode: bankListCode,
            beneficiaryAccountNumber: accountNumber,
            amount: parseFloat(amount),
            authPIN: pinValue,
            email: email,
          });

          toast({
            title: "Transfer Successful",
            description: `Your money has been sent to ${verificationResult} successfully.`,
            variant: "success",
          });

          handleNextStep(4);
        } catch (error) {
          toast({
            title: "Transfer Failed",
            description: (error as any).response.data.message,
            variant: "error",
          });
        }
      }
    };

    handleWithdrawMoney();
  }, [pinValue]);

  return (
    <div className="space-y-4">
      <div>
        <div>
          {step === 1 && (
            <div
              onClick={() => handleNextStep(2)}
              className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              <Landmark className="w-6 h-6" />

              <div>
                <h2 className="text-xl font-bold">Bank Transfer</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Withdraw money to your bank account
                </p>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="w-full flex flex-col gap-4">
              <div>
                <Label>Select Bank</Label>
                <Popover open={bankListOpen} onOpenChange={setBankListOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={bankListOpen}
                      className="w-full justify-between"
                    >
                      {bankListValue
                        ? bankLists.find(
                            (banks) => banks.name === bankListValue
                          )?.name
                        : "Select Bank..."}
                      {loadingBankList ? (
                        <Loader2 className="ml-2 h-4 w-4 shrink-0 opacity-50 animate-spin" />
                      ) : (
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[400px] p-0">
                    <Command>
                      <CommandInput placeholder="Search Bank" />
                      <CommandList>
                        <CommandEmpty>No Bank Found.</CommandEmpty>
                        <CommandGroup>
                          {bankLists.map((banks) => (
                            <CommandItem
                              key={banks.code}
                              value={banks.name}
                              onSelect={(currentValue) => {
                                setBankListValue(
                                  currentValue === bankListValue
                                    ? ""
                                    : currentValue
                                );
                                setBankListCode(banks.code);
                                setBankListOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  bankListValue === banks.code
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {banks.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label>Account Number</Label>
                <Input
                  placeholder="Enter Account Number"
                  onChange={(e) => setAccountNumber(e.target.value)}
                  value={accountNumber}
                  type="text"
                />
              </div>
              {verifingBank && (
                <div className="text-sm text-center text-gray-500 dark:text-gray-400">
                  Verifying Account...
                </div>
              )}
              {verificationResult && (
                <div className="text-sm text-center text-gray-500 dark:text-gray-400">
                  {verificationResult}
                </div>
              )}
              <div>
                <Label>Email</Label>
                <Input
                  placeholder="Enter Email"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <Label>Amount</Label>
                <Input
                  placeholder="Enter Amount"
                  value={amount}
                  type="number"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="flex justify-between">
                <button
                  className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                  onClick={handlePreviousStep}
                >
                  Back
                </button>
                <button
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
                  onClick={() => handleNextStep(3)}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <>
              {withdrawingMoney ? (
                <div className="h-[200px] flex items-center justify-center">
                  <Loader2 className="w-6 h-6 animate-spin" />
                </div>
              ) : (
                <>
                  {" "}
                  <h2 className="text-xl font-bold text-center">
                    Confirm Transfer
                  </h2>
                  <div className="mt-4 space-y-2">
                    <p className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <strong>Account Name:</strong>
                      {verificationResult ? verificationResult : "Account Name"}
                    </p>
                    <p className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <strong>Bank:</strong>
                      {bankListValue ? bankListValue : "Bank"}
                    </p>
                    <p className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <strong>Account Number:</strong>
                      {accountNumber ? accountNumber : "Account Number"}
                    </p>
                    <p className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <strong>Amount:</strong>
                      {amount ? `₦${parseFloat(amount).toFixed(2)}` : "Amount"}
                    </p>
                  </div>
                  <div className="flex justify-center my-10">
                    <OtpInput
                      inputStyle="inputStyleOTP"
                      value={pinValue}
                      onChange={handleInputChange}
                      inputType="password"
                      shouldAutoFocus={true}
                      numInputs={4}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props} />}
                    />
                  </div>
                  <div className="flex justify-between">
                    <button
                      className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                      onClick={handlePreviousStep}
                    >
                      Back
                    </button>
                  </div>
                </>
              )}
            </>
          )}
          {step > 3 && (
            <div className="flex flex-col gap-4 items-center justify-center">
              <h2 className="text-xl font-bold text-center">
                Transfer Complete
              </h2>
              <p className="text-sm text-gray-500 text-center dark:text-gray-400">
                Your transfer has been successfully completed.
              </p>
              <Image src={success} alt="success" width={100} height={100} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WithdrawalModal;
