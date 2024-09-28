import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  merchantId: string | null;
  merchantEmail: string | null;
  businessName: string | null;
  lastName: string | null;
  firstName: string | null;
  phoneNumber: string | null;
  profileImage: string | null;
  setAuthInfo: (
    merchantId: string,
    merchantEmail: string,
    businessName: string,
    lastName: string,
    firstName: string,
    phoneNumber: string,
    profileImage: string
  ) => void;
  removeAuthStore: () => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      merchantId: null,
      businessName: null,
      firstName: null,
      phoneNumber: null,
      merchantEmail: null,
      lastName: null,
      profileImage: null,
      setAuthInfo: (
        merchantId,
        merchantEmail,
        businessName,
        lastName,
        firstName,
        phoneNumber,
        profileImage
      ) =>
        set({
          merchantId,
          merchantEmail,
          businessName,
          lastName,
          firstName,
          phoneNumber,
          profileImage,
        }),
      removeAuthStore: () => {
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
