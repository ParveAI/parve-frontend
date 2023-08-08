import { CloseButton, SubmitButton } from "@/shared/Button";
import { toast } from "react-hot-toast";
export default function UserInfoModal({ user, logout, closeModal, ...props }) {
  return (
    <div className="relative w-[450px] rounded-xl bg-[#282828] px-10 py-8 max-md:w-[88vw] max-md:py-9 max-md:px-7">
      <CloseButton onClick={closeModal} />
      <div className="w-full flex flex-col items-center justify-start gap-5">
        <div className="w-full flex flex-col items-center justify-start py-4 gap-4 rounded-md bg-white/5">
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
        </div>
        <SubmitButton
          title={"Sign out!"}
          onClick={() => {
            logout();
            closeModal();
            toast.success("Logged out successfully!");
          }}
        />
      </div>
    </div>
  );
}
