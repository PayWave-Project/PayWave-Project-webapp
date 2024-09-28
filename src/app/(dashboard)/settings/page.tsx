"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Profile } from "@/components/modules/settings/Profile";
import { KYC } from "@/components/modules/settings/Kyc";
import { Security } from "@/components/modules/settings/Security";

const SettingsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["profile", "kyc", "security"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    router.push(`/settings?tab=${tab}`);
  };

  return (
    <div className="container bg-white mx-auto p-6">
      <div className="flex space-x-4 border-b mb-6">
        <button
          className={`py-2 px-4 ${
            activeTab === "profile" ? "border-b-2 border-primary font-bold" : ""
          }`}
          onClick={() => handleTabChange("profile")}
        >
          Profile
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "kyc" ? "border-b-2 border-primary font-bold" : ""
          }`}
          onClick={() => handleTabChange("kyc")}
        >
          KYC
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "security"
              ? "border-b-2 border-primary font-bold"
              : ""
          }`}
          onClick={() => handleTabChange("security")}
        >
          Security
        </button>
      </div>

      {activeTab === "profile" && <Profile />}
      {activeTab === "kyc" && <KYC />}
      {activeTab === "security" && <Security />}
    </div>
  );
};

export default SettingsPage;
