import { Button, CloseButton, HighlightedButton } from "@/shared/Button";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

export default function UserInfoModal({ user, logout, closeModal, ...props }) {
  const router = useRouter();
  return (
    <div className="relative w-[450px] rounded-xl bg-[#282828] px-10 py-8 max-md:w-[88vw] max-md:py-9 max-md:px-7">
      <CloseButton onClick={closeModal} />
      <div className="w-full flex flex-col items-center justify-start gap-5">
        <button
          onClick={() => {
            router.push(`/profile/${user?.username}`);
            closeModal();
          }}
          className="w-full flex flex-col items-center justify-start py-4 gap-4 rounded-md bg-white/5"
        >
          <img
            src={
              user?.avatar ||
              "https://avatars.dicebear.com/api/jdenticon/sdfas.svg?background=%23ffffff"
            }
            alt="avatar"
            className="w-32 h-32 rounded-full"
          />
          <h1 className="text-white text-xl font-semibold max-md:text-base">
            {user?.email}
          </h1>
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
