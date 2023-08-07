import ActionBox from "@/shared/ActionBox";
import { Magic } from "@/components/icons";


const UploadPhoto = () => {
  return (
    <ActionBox
      icon={<Magic />}
      title="Improve writing"
      description="Like a one-click photo editor, but for your words."
      buttonTitle="Parse it"
      buttonHandler={() => alert("Photo Uploaded")}
    >
      <div className="w-full h-full flex items-center justify-center bg-black/40 rounded-lg border-[1.6px] border-dashed border-[rgba(191,191,191,0.45)]">
        Upload Photo
      </div>
    </ActionBox>
  );
};

export default UploadPhoto;
