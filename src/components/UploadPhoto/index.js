import ActionBox from "@/shared/ActionBox";
import { Magic } from "@/components/icons";

const UploadPhoto = () => {
  
  return (
    <ActionBox
      icon={<Magic />}
      title="Improve writing"
      description="Like a one-click photo editor, but for your words."
      buttonTitle="Upload Photo"
      buttonHandler={() => alert("Photo Uploaded")}
    >
      <h1>Upload Photo</h1>
    </ActionBox>
  );
};

export default UploadPhoto;
