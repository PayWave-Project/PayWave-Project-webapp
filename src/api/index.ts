"use client";

import Cookies from "js-cookie";
import { AxiosRequestConfig } from "axios";

export const getConfig = (): AxiosRequestConfig => {
  const token = Cookies.get("token");
  const authToken = `Bearer ${token}`;

  const headers: AxiosRequestConfig["headers"] = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    ...(token && { Authorization: authToken }),
  };

  return { headers };
};

if (!process.env.NEXT_PUBLIC_BASE_URL) {
  throw new Error("BASE_URL environment variable is not defined");
}

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
