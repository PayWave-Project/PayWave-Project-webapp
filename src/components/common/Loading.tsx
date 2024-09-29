import Image from "next/image";
import { LoaderCircle } from "lucide-react";

import MainLogo from "@/assets/icons/Logo-main.png";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Image priority src={MainLogo} alt="Main logo" width={200} height={200} />
      <LoaderCircle className="animate-spin mt-4" />
    </div>
  );
}
