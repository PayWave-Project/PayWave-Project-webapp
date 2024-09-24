import axios from "axios";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";

import { baseUrl, getConfig } from "./index";

type LoginMerchantType = {
  email: string;
  password: string;
};

type RegisterMerchantType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  businessName: string;
  phone: string;
};

type VerifyOtpType = {
  otp: string;
};

export const useLoginMerchant = () => {
  const mutationFn = async (payload: LoginMerchantType) => {
    const config = getConfig();

    const data = payload;

    return await axios.post(`${baseUrl}/login-merchant`, data, config);
  };
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn });

  return { mutate, mutateAsync, isLoading, data };
};

export const useRegisterMerchant = () => {
  const mutationFn = async (payload: RegisterMerchantType) => {
    const config = getConfig();

    const data = payload;

    return await axios.post(`${baseUrl}/register-merchant`, data, config);
  };
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn });

  return { mutate, mutateAsync, isLoading, data };
};

export const useSendOtp = () => {
  const mutationFn = async () => {
    const config = getConfig();
    const _id = Cookies.get("merchant_id");

    return await axios.post(`${baseUrl}/resend-otp/${_id}`, config);
  };
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn });

  return { mutate, mutateAsync, isLoading, data };
};

export const useVerifyOtp = () => {
  const mutationFn = async (payload: VerifyOtpType) => {
    const config = getConfig();
    const _id = Cookies.get("merchant_id");

    const data = payload;

    return await axios.post(`${baseUrl}/verify-merchant/${_id}`, data, config);
  };
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn });

  return { mutate, mutateAsync, isLoading, data };
};

export const useSignOutMerchant = () => {
  const mutationFn = async () => {
    const config = getConfig();
    const _id = Cookies.get("merchant_id");

    return await axios.post(`${baseUrl}/signout-merchant/${_id}`, config);
  };
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn });

  return { mutate, mutateAsync, isLoading, data };
};
