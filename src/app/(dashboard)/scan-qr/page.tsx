"use client";
import React from 'react';
import QrCodeScanner from '@/components/modules/qr-code/QrCodeScanner';

const ScanPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 bg-white">
            <QrCodeScanner />
        </div>
    );
};

export default ScanPage;
