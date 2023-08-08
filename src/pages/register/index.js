import Link from "next/link";

import { RightArrow } from "@/components/icons";
import { Button } from "@/shared/Button";
import { RegisterContent } from "@/modals/components/RegisterModal";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-black">
      <div className="w-full h-[80px] flex items-center justify-start px-3 sm:px-2 md:px-3 z-50">
        <Button as={Link} href="/" title={" Home"} reverse>
          <RightArrow className="transform rotate-180" />
        </Button>
      </div>
      <div className="flex-1 min-h-0 max-w-[500px] w-full flex flex-col items-center justify-center max-md:p-6">
        <RegisterContent />
      </div>
    </div>
  );
}
