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

type SendOtpType = {
  email: string;
};

type VerifyOtpType = {
  email: string;
  otp: string;
};

type ResetPasswordType = {
  email: string;
  password: string;
  confirmPassword: string;
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

export const useVerifyMerchantOTP = () => {
  const mutationFn = async (payload: VerifyOtpType) => {
    const config = getConfig();

    const data = payload;

    return await axios.post(`${baseUrl}/verify-merchant`, data, config);
  };

  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn });

  return { mutate, mutateAsync, isLoading, data };
};

export const useResendOtp = () => {
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

export const useSendOtp = () => {
  const mutationFn = async (payload: SendOtpType) => {
    const config = getConfig();

    return await axios.post(`${baseUrl}/forgot-password`, payload, config);
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

    const data = payload;

    return await axios.post(`${baseUrl}/verify-otp`, data, config);
  };
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn });

  return { mutate, mutateAsync, isLoading, data };
};

export const useResetPassword = () => {
  const mutationFn = async (payload: ResetPasswordType) => {
    const config = getConfig();

    return await axios.put(`${baseUrl}/reset-password`, payload, config);
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
    const id = Cookies.get("id");
    const data = {
      id,
    };

    return await axios.post(`${baseUrl}/signout-merchant/${id}`, data, config);
  };
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn });

  return { mutate, mutateAsync, isLoading, data };
};
