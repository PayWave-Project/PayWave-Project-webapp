"use client";

import QrCodeCard from "@/components/modules/qr-code/QrCodeCard";
import React from "react";

interface QrCodeData {
  title: string;
  description: string;
  link: string; 
}

const qrCodesData: QrCodeData[] = [
  {
      title: 'Dynamic QR Code',
      description:
          'These are one-time QR codes that are auto-generated at the point of payment. The amount to pay is captured in the dynamic QR code. A dynamic QR code expires after 25 minutes.',
      link: '/create-qr/dynamic', 
  },
  {
      title: 'Custom Amount QR Code',
      description:
          'These QR codes do not have a specified amount attached to them as the transaction amount. The transaction amount has to be inputted manually by the payer at the point of payment collection.',
      link: '/create-qr/custom', 
  },
  {
      title: 'Defined Amount QR Code',
      description:
          'These QR codes have a specified amount attached to them. Once these QR codes are scanned at the point of payment, the amount attached to them is displayed and cannot be changed.',
      link: '/create-qr/defined',
  },
];


const CreateQR = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
    <h1 className="text-2xl font-bold mb-6">QR Code Types</h1>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {qrCodesData.map((qrCode, index) => (
            <QrCodeCard
                key={index}
                title={qrCode.title}
                description={qrCode.description}
                link={qrCode.link} 
            />
        ))}
    </div>
</div>
  );
};

export default CreateQR;
