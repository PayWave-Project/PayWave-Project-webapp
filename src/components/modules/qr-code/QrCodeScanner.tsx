
import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const QrCodeScanner: React.FC = () => {
    const [scannedData, setScannedData] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [cameraPermission, setCameraPermission] = useState<'granted' | 'denied' | 'prompt' | 'unavailable'>('prompt');
    const qrCodeScannerRef = useRef<Html5Qrcode | null>(null);
    const qrCodeRegionId = "qr-reader";

    useEffect(() => {
        navigator.permissions.query({ name: 'camera' as PermissionName }).then(permissionStatus => {
            setCameraPermission(permissionStatus.state as 'granted' | 'denied' | 'prompt');
            permissionStatus.onchange = () => {
                setCameraPermission(permissionStatus.state as 'granted' | 'denied' | 'prompt');
            };
        }).catch(() => {
            setCameraPermission('unavailable');
        });

     
        if (cameraPermission === 'granted') {
            const html5QrCode = new Html5Qrcode(qrCodeRegionId);
            qrCodeScannerRef.current = html5QrCode;

            html5QrCode.start(
                { facingMode: "environment" },
                { fps: 10, qrbox: 500 },
                qrCodeMessage => {
                    setScannedData(qrCodeMessage);
                },
                errorMessage => {
                    console.log("QR code scanning failed", errorMessage);
                }
            ).catch(err => {
                setErrorMessage("Unable to start scanning: " + err);
            });

            return () => {
                html5QrCode.stop().then(() => {
                    html5QrCode.clear();
                }).catch(err => {
                    console.error("Failed to clear QR code scanner", err);
                });
            };
        }
    }, [cameraPermission]);

    if (cameraPermission === 'denied') {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">QR Code Scanner</h2>
                <p className="text-red-500">Camera access has been denied. Please enable it in your browser settings.</p>
            </div>
        );
    }

    if (cameraPermission === 'unavailable') {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">QR Code Scanner</h2>
                <p className="text-red-500">Camera access is unavailable on this device.</p>
            </div>
        );
    }

    return (
        <div className="">
            <h2 className="text-2xl font-bold mb-4">QR Code Scanner</h2>
            <div id={qrCodeRegionId} className="w-full max-w-lg" />
            {scannedData ? (
                <div className="mt-4 bg-gray-100 p-4 rounded">
                    <p className="text-gray-800">Scanned Data:</p>
                    <p className="text-green-600">{scannedData}</p>
                </div>
            ) : (
                <p className="mt-4 text-gray-600">No QR code scanned yet</p>
            )}
            {errorMessage && (
                <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
        </div>
    );
};

export default QrCodeScanner;
