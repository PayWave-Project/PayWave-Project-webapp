"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import Loading from "../common/Loading";

interface SessionContextType {
  token: string | null;
}

const SessionContext = createContext<SessionContextType>({ token: null });

export const useSession = () => useContext(SessionContext);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const token = Cookies.get("token");
      if (token) {
        setToken(token);
      } else {
        router.push("/login");
      }
      setLoading(false);
    };

    checkSession();
  }, [router]);

  if (loading) {
    return <Loading />;
  }

  if (!token) {
    return null;
  }

  return (
    <SessionContext.Provider value={{ token }}>
      {children}
    </SessionContext.Provider>
  );
};
