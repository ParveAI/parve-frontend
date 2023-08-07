import ActionBox from "@/shared/ActionBox";
import { Magic } from "@/components/icons";

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
      <textarea
        className="w-full h-full resize-y bg-white/[0.02] rounded-lg border-[1px] border-white/[0.2] p-5 font-sans font-normal text-[1rem] leading-relaxed text-white"
        onChange={(e) => setText(e.target.value)}
      >
        {text}
      </textarea>
    </ActionBox>
  );
};

export default ParveTextBox;
