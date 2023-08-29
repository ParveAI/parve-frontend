import { useState, useEffect } from "react";
import { CloseButton } from "@/shared/Button";
import { Collapse } from "@/components/icons";

export default function TextAreaModal({
  title,
  value,
  setValue,
  closeModal,
  ...props
}) {
  const [text, setText] = useState(value);

  useEffect(() => {
    setValue(text);
  }, [text]);

  return (
    <div className="glow w-[75vw] h-[75vh] rounded-xl bg-[#282828] px-10 py-8 max-md:py-0 max-md:px-0 max-md:border-none max-md:w-[90vw]">
      <div className="relative aspect-square w-full h-full flex flex-col items-start justify-start overflow-hidden rounded-xl bg-white/10">
        <div className="z-20 absolute top-0 left-0 right-0 w-full h-14 flex flex-row items-center justify-between px-4 ">
          <h4 className="text-zinc-300 font-bold text-2xl font-[CabinetGrotesk-ExtraBold]">
            {title}
          </h4>
          <button onClick={closeModal} className="h-full">
            <div className="h-[70%] rounded-full aspect-square flex items-center justify-center transition-colors bg-black hover:bg-zinc-900">
              <Collapse fill="white" />
            </div>
          </button>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="z-10 absolute inset-0 w-full h-full resize-none bg-transparent mt-14 px-5 pb-24 font-sans font-normal text-[1rem] leading-relaxed text-white"
        />
      </div>
    </div>
  );
}
