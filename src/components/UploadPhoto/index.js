import ActionBox from "@/shared/ActionBox";
import { Magic } from "@/components/icons";

import { UploadContent } from "./styles";

const UploadPhoto = () => {
  return (
    <ActionBox
      icon={<Magic />}
      title="Improve writing"
      description="Like a one-click photo editor, but for your words."
      buttonTitle="Parse it"
      buttonHandler={() => alert("Photo Uploaded")}
    >
      <UploadContent>Upload Photo</UploadContent>
    </ActionBox>
  );
};

export default UploadPhoto;
