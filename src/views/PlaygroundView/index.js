import ActionBox from "@/shared/ActionBox";
import { Magic, Upload } from "@/components/icons";

import { useState } from "react";
import UploadImage from "./components/UploadImage";

const PlaygroundView = () => {
  const [text, setText] = useState("");
  return (
    <div className="w-screen h-screen mt-[85px] bg-[#1A1A1A]  border-t-[1px] border-zinc-600  overflow-hidden max-md:overflow-auto max-md:h-full">
      <div className="max-w-screen h-full flex flex-row items-center justify-center max-md:flex-col ">
        <div className="h-full max-w-[320px] w-full border-r-[1px] border-zinc-600 max-md:border-b-[1px] max-md:border-r-0 max-md:max-w-full max-md:w-full ">
          <div className="w-full border-b-[1px] border-zinc-600">
            <ActionBox icon={<Magic />} title="Upload image">
              <div className="h-fit w-full flex flex-col items-center justify-center p-5">
                <UploadImage />
              </div>
            </ActionBox>
          </div>
        </div>
        <div className="flex-1 w-full h-full flex flex-row items-center justify-center bg-zinc-600 max-xl:flex-col">
          <div className="flex-1 h-full w-full  max-md:h-fit max-md:min-h-[500px]">
            <div className="h-full w-full border-r-[1px] border-zinc-600 max-xl:border-b-[1px] max-xl:border-r-0">
              <ActionBox
                copyText={text}
                icon={<Magic />}
                title="Transcript of your image"
                description="Edit the text as you wish and click the button to solve it."
                buttonText="Solve it"
                buttonHandler={() => alert("Photo Uploaded")}
              >
                <textarea
                  defaultValue={text}
                  className="absolute inset-0 w-full h-full resize-none bg-white/[0.05] p-5 font-sans font-normal text-[1rem] leading-relaxed text-white"
                  onChange={(e) => setText(e.target.value)}
                />
              </ActionBox>
            </div>
          </div>
          <div className="flex-1 h-full w-full max-md:h-fit max-md:min-h-[500px]">
            <div className="h-full w-full">
              <ActionBox
                copyText={text}
                icon={<Magic />}
                title="Solution of your transcript"
                description="Your solution will be here. You can edit the text."
                buttonText="Generate new"
                buttonHandler={() => alert("Photo Uploaded")}
              >
                <textarea
                  defaultValue={text}
                  className="absolute inset-0 w-full h-full resize-none bg-white/[0.05] p-5 font-sans font-normal text-[1rem] leading-relaxed text-white"
                  onChange={(e) => setText(e.target.value)}
                />
              </ActionBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundView;
