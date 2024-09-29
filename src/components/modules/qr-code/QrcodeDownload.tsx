import React, { useRef } from "react";
import jsPDF from "jspdf";

type QRCodeDownloadProps = {
  qrCodeData: string; // The base64 string of the QR code
};

const QRCodeDownload: React.FC<QRCodeDownloadProps> = ({ qrCodeData }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const downloadAsImage = () => {
    if (!imageRef.current) return;

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const img = imageRef.current;

    canvas.width = img.width;
    canvas.height = img.height;

    if (context) {
      context.drawImage(img, 0, 0, img.width, img.height);

      const dataUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "paywave-qrcode.png";
      link.click();
    }
  };

  const downloadAsPDF = () => {
    if (!imageRef.current) return;

    const doc = new jsPDF();
    const img = imageRef.current;
    doc.addImage(img.src, "PNG", 15, 40, 180, 160);
    doc.save("paywave-qrcode.pdf");
  };

  return (
    <>
      {qrCodeData ? (
        <div className="flex flex-col items-center">
          <img ref={imageRef} src={qrCodeData} alt="QR Code" className="mb-4" />

          <button
            onClick={downloadAsImage}
            className="px-4 py-2 bg-green-500 text-sm text-white rounded hover:bg-green-600 mb-2"
          >
            Download as Image
          </button>

          <button
            onClick={downloadAsPDF}
            className="px-4 py-2 bg-blue-500 text-sm text-white rounded hover:bg-blue-600"
          >
            Download as PDF
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default QRCodeDownload;
