import ActionBox from "@/shared/ActionBox";
import { Magic } from "@/components/icons";

import { TextArea } from "./styles";

import { useState } from "react";

const ParveTextBox = ({ initialText }) => {
  const [text, setText] = useState(initialText);
  return (
    <ActionBox
      icon={<Magic />}
      title="Transcript of your image"
      description="Edit the text as you wish and click the button to solve it."
      buttonTitle="Solve it"
      buttonHandler={() => alert("Photo Uploaded")}
    >
      <TextArea onChange={(e) => setText(e.target.value)}>{text}</TextArea>
    </ActionBox>
  );
};

export default ParveTextBox;
