import ParveLogo from "@/assets/parve-logo.svg";
import Link from "next/link";
import Image from "next/image";

import { Button, HighlightedButton } from "@/shared/Button";
import { RightArrow } from "@/components/icons";
import { useModal } from "@/context/ModalContext";
import { toast } from "react-hot-toast";

export default function Navbar({ auth, logout }) {
  const openModal = useModal((state) => state.openModal);

  return (
    <div className="fixed min-h-[85px] w-full flex flex-row items-center justify-between px-16 z-[99] max-xl:px-12 max-md:px-7 before:absolute before:top-0 before:left-0 before:right-0 before:w-full before:h-[120px] before:bg-gradient-to-b before:from-black/80  before:to-transparent before:z-[-1]">
      <Link href="/" className="h-8 w-32 cursor-pointer">
        <Image src={ParveLogo} alt="Logo" height={30} width={120} />
      </Link>
      <div className="flex flex-row items-center justify-center gap-4 ">
        {auth?.isLoggedIn ? (
          <button
            onClick={() =>
              openModal("UserInfo", { user: auth?.user, logout: logout })
            }
            className="h-10 px-3 flex flex-row items-center justify-center bg-white/10 rounded-md gap-2 max-md:bg-white/25"
          >
            <img
              src={
                auth?.user?.avatar ||
                "https://avatars.dicebear.com/api/jdenticon/sdfas.svg?background=%23ffffff"
              }
              alt="Avatar"
              height={30}
              width={30}
              className="rounded-full"
            />
            <p className="text-white text-sm font-semibold max-md:hidden">
              {auth?.user?.email}
            </p>
          </button>
        ) : (
          <Button title={"Sign in"} onClick={() => openModal("Login")}>
            <RightArrow />
          </Button>
        )}

        {/* <HighlightedButton title={"Just Parve It"} as={Link} href="/parve-it" /> */}
      </div>
    </div>
  );
}
