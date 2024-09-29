import { create } from "zustand";

interface AuthState {
  businessName: string | null;
  firstName: string | null;
  phoneNumber: string | null;
  email: string | null;
  setAuthInfo: (
    businessName: string,
    firstName: string,
    email:string,
    phoneNumber: string,

  ) => void;
}


export const useAuthStore = create<AuthState>((set) => ({
  merchantId: null,
  businessName: null,
  firstName: null,
  phoneNumber: null,
  email: null,
  setAuthInfo: (businessName, firstName, phoneNumber, email) =>
    set({ businessName, firstName, phoneNumber, email }),
}));
