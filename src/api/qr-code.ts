import axios from "axios";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";

import { baseUrl, getConfig } from "./index";

type QrCodeType = {
  email: string;
  amount?: number;
  type: string;
  duration?: number;
};


export const useGenerateQrCode = () => {
  const mutationFn = async (payload: QrCodeType) => {
    const config = getConfig();

    const data = payload;

    return await axios.post(`${baseUrl}/pay/qrcode`, data, config);
  };
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn });

  return { mutate, mutateAsync, isLoading, data };
};

export const useScanDynamicQrCode = () => {
  const mutationFn = async (reference: string) => {
    const config = getConfig();

    const response = await axios.get(
      `${baseUrl}/scan/dynamic/${reference}`,
      config
    );
    return response.data;
  };
  const {
    mutate,
    mutateAsync,
    isPending: isLoading,
    data,
  } = useMutation({ mutationFn: mutationFn });

  return { mutate, mutateAsync, isLoading, data };
};
