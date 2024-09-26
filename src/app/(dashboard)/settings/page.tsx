"use client";
import { useState } from 'react';
import {Profile} from "@/components/modules/settings/Profile";
import {KYC} from "@/components/modules/settings/Kyc";
import {Security} from "@/components/modules/settings/Security";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile'); // Set default active tab

  return (
    <div className="container bg-white mx-auto p-6">
      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-6">
        <button
          className={`py-2 px-4 ${activeTab === 'profile' ? 'border-b-2 border-primary font-bold' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'kyc' ? 'border-b-2 border-primary font-bold' : ''}`}
          onClick={() => setActiveTab('kyc')}
        >
          KYC
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'security' ? 'border-b-2 border-primary font-bold' : ''}`}
          onClick={() => setActiveTab('security')}
        >
          Security
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'profile' && <Profile />}
      {activeTab === 'kyc' && <KYC />}
      {activeTab === 'security' && <Security />}
    </div>
  );
};

export default SettingsPage;
