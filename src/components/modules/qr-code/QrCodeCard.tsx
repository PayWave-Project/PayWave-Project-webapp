

import React from 'react';
import Link from 'next/link';

interface QrCodeCardProps {
    title: string;
    description: string;
    link: string; 
}

const QrCodeCard: React.FC<QrCodeCardProps> = ({ title, description, link }) => {
    return (
        <Link href={link}>
            <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-800">{title}</h2>
                    <p className="mt-2 text-gray-600">{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default QrCodeCard;
