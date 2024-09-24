import { create } from "zustand";

interface AuthState {
  businessName: string | null;
  firstName: string | null;
  phoneNumber: string | null;
  setAuthInfo: (
    businessName: string,
    firstName: string,
    phoneNumber: string
  ) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  merchantId: null,
  businessName: null,
  firstName: null,
  phoneNumber: null,
  setAuthInfo: (businessName, firstName, phoneNumber) =>
    set({ businessName, firstName, phoneNumber }),
}));
