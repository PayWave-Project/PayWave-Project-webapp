import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

import { baseUrl, getConfig } from "./index";

type VerifyBankType = {
  beneficiaryBankCode: string;
  beneficiaryAccountNumber: string;
};

type SendMoneyType = {
  beneficiaryBankCode: string;
  beneficiaryAccountNumber: string;
  email: string;
  amount: number;
  narration: string;
  authPIN: string;
};

type WithdrawMoneyType = {
  beneficiaryBankCode: string;
  beneficiaryAccountNumber: string;
  email: string;
  amount: number;
  authPIN: string;
};

export const useVerifyBank = () => {
  const mutationFn = async (payload: VerifyBankType) => {
    const config = getConfig();

    return await axios.post(`${baseUrl}/verify-bank`, payload, config);
  };
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn });

  return { mutate, mutateAsync, isLoading, data };
};

export const useSendMoney = () => {
  const mutationFn = async (payload: SendMoneyType) => {
    const config = getConfig();

    return await axios.post(`${baseUrl}/send-money`, payload, config);
  };
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({
    mutationFn: mutationFn,
  });

  return { mutate, mutateAsync, isLoading, data };
};

export const useWithdrawMoney = () => {
  const mutationFn = async (payload: WithdrawMoneyType) => {
    const config = getConfig();

    return await axios.post(`${baseUrl}/withdraw`, payload, config);
  };
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({
    mutationFn: mutationFn,
  });

  return { mutate, mutateAsync, isLoading, data };
};

export const useGetTransactionHistory = (page: number) => {
  const queryFn = async () => {
    const config = getConfig();
    return await axios.get(
      `${baseUrl}/transaction-history?page=${page}`,
      config
    );
  };
  const { data, refetch, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["transaction-history"],
    queryFn: queryFn,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    staleTime: 600000,
  });

  return { data, refetch, isLoading, isFetching, isError, error };
};

export const useGetBankList = () => {
  const queryFn = async () => {
    const config = getConfig();

    return await axios.get(`${baseUrl}/get-banks?limit=253`, config);
  };
  const { data, refetch, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["bank-lists"],
    queryFn: queryFn,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return { data, refetch, isLoading, isFetching, isError, error };
};

export const useGetDepositAccount = () => {
  const queryFn = async () => {
    const config = getConfig();

    return await axios.get(`${baseUrl}/account-details`, config);
  };
  const { data, refetch, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["account-details"],
    queryFn: queryFn,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return { data, refetch, isLoading, isFetching, isError, error };
};

export const useGetBalance = () => {
  const queryFn = async () => {
    const config = getConfig();

    return await axios.get(`${baseUrl}/account-balance`, config);
  };
  const { data, refetch, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["balance"],
    queryFn: queryFn,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    staleTime: 600000,
  });

  return { data, refetch, isLoading, isFetching, isError, error };
};
