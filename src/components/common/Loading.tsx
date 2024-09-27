import Image from "next/image";
import { LoaderCircle } from "lucide-react";

import MainLogo from "@/assets/icons/Logo-main.png";

export default function Loading() {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full tw-h-screen">
      <Image priority src={MainLogo} alt="Main logo" width={200} height={200} />
      <LoaderCircle className="tw-animate-spin tw-mt-4" />
    </div>
  );
}
