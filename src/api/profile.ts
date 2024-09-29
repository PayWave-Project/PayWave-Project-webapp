import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

import { baseUrl, getConfig } from "./index";

type MerchantKycType = {
  BVN: string;
  CAC: string;
};

type AddPinType = {
  authPIN: string;
};

export const useUpdateMerchantKyc = () => {
  const mutationFn = async (payload: MerchantKycType) => {
    const config = getConfig();

    return await axios.post(`${baseUrl}/merchant-kyc`, payload, config);
  };
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn });

  return { mutate, mutateAsync, isLoading, data };
};

export const useAddPin = () => {
  const mutationFn = async (payload: AddPinType) => {
    const config = getConfig();

    return await axios.post(`${baseUrl}/add-pin`, payload, config);
  };
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn });

  return { mutate, mutateAsync, isLoading, data };
};

export const useGetMerchantProfile = () => {
  const queryFn = async () => {
    const config = getConfig();

    return await axios.get(`${baseUrl}/get-merchant`, config);
  };
  const { data, refetch, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["merchant-profile"],
    queryFn: queryFn,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    staleTime: 600000,
  });

  return { data, refetch, isLoading, isFetching, isError, error };
};

export const useGetNotification = () => {
  const queryFn = async () => {
    const config = getConfig();

    return await axios.get(`${baseUrl}/notifications`, config);
  };
  const { data, refetch, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["notifications"],
    queryFn: queryFn,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    staleTime: 600000,
  });

  return { data, refetch, isLoading, isFetching, isError, error };
};
