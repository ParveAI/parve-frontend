import { LinkExternal } from "@/components/icons";
import { Button, CloseButton, HighlightedButton } from "@/shared/Button";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

export default function UserInfoModal({ user, logout, closeModal, ...props }) {
  const router = useRouter();
  return (
    <div className="glow relative w-[450px] rounded-xl bg-[#282828] px-10 py-8 max-md:w-[88vw] max-md:py-9 max-md:px-7">
      <CloseButton onClick={closeModal} />
      <div className="w-full flex flex-col items-center justify-start gap-5">
        <button
          onClick={() => {
            router.push(`/profile/${user?.username}`);
            closeModal();
          }}
          className="w-full flex flex-col items-center justify-start py-4 gap-4 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
        >
          <img
            src={
              user?.avatar ||
              "https://avatars.dicebear.com/api/jdenticon/sdfas.svg?background=%23ffffff"
            }
            alt="avatar"
            className="w-32 h-32 rounded-full"
          />
          <div className="flex flex-col items-center justify-center ">
            <h1 className="font-[CabinetGrotesk-ExtraBold] text-white text-2xl font-semibold max-md:text-xl">
              {user?.fullname}
            </h1>
            <div className="flex flex-row items-center justify-center gap-1">
              <h4 className="font-[CabinetGrotesk-Bold] text-zinc-400 text-xl font-semibold max-md:text-base">
                @{user?.username}
              </h4>
              <LinkExternal fill="white" className="scale-90 translate-y-[-1.5px]" />
            </div>
          </div>
        </button>
        <HighlightedButton
          title={"Playground"}
          className="w-full"
          onClick={() => {
            router.push("/playground");
            closeModal();
          }}
        />
        <Button
          title={"Sign out!"}
          className="w-full bg-zinc-900 text-white border-none"
          onClick={() => {
            logout();
            closeModal();
            router.push("/");
            toast.success("Logged out successfully!");
          }}
        />
      </div>
    </div>
  );
}
