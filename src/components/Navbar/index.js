import Image from "next/image";
import ParveLogo from "@/assets/parve-logo.svg";
import Link from "next/link";

import { Button, HighlightedButton } from "@/shared/Button";
import { RightArrow } from "@/components/icons";
import { useModal } from "@/context/ModalContext";

export default function Navbar() {
  const openModal = useModal((state) => state.openModal);
  return (
    <div className="fixed min-h-[85px] w-full flex flex-row items-center justify-between px-16 z-[99] max-xl:px-12 max-md:px-8">
      <Link href="/" className="h-8 w-32 cursor-pointer">
        <Image src={ParveLogo} alt="Logo" height={30} width={120} />
      </Link>
      <div className="flex flex-row items-center justify-center gap-4 ">
        <Button title={"Sign in"} onClick={() => openModal("Login")}>
          <RightArrow />
        </Button>
        <HighlightedButton title={"Just Parve It"} as={Link} href="/parve-it" />
      </div>
    </div>
  );
}
