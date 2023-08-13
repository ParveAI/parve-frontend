import { CloseButton } from "@/shared/Button";
import CropperView from "./components/CropperView";

export default function UploadModal({ closeModal, ...props }) {
  return (
    <div className="relative h-[80vh] rounded-xl bg-[#282828] px-10 py-8 max-md:w-[88vw] max-md:py-9 max-md:px-7">
      <CloseButton onClick={closeModal} />
      <div className="w-full flex flex-col items-center justify-start">
        <CropperView />
      </div>
    </div>
  );
}
