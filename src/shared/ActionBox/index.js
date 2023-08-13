import { Clipboard } from "@/components/icons";
import { HighlightedButton } from "../Button";

import copy from "copy-to-clipboard";
import { toast } from "react-hot-toast";

const ActionBox = ({
  children,
  icon = false,
  title = "Title",
  description = "Description",
  buttonText = false,
  copyText = false,
  buttonHandler = () => {},
}) => {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-start bg-[#1a1a1a]">
      <header className="h-[95px] w-full flex flex-row items-center justify-start gap-7 px-6 py-4 border-b-[1px] border-zinc-600">
        <div className="w-[60%] flex flex-row items-start justify-start gap-4">
          {icon && (
            <div className="h-9 w-9 min-h-9 min-w-9 flex items-center justify-center">
              {icon}
            </div>
          )}
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-bold text-base flex items-center tracking-tight text-white line-clamp-1 leading-normal">
              {title}
            </h3>
            <h6 className="w-[80%] font-normal text-sm text-zinc-400 line-clamp-2">
              {description}
            </h6>
          </div>
        </div>
        {buttonText !== false && (
          <div className="flex-1 flex flex-row items-center justify-end">
            <HighlightedButton
              title={buttonText}
              onClick={buttonHandler}
              className="px-8 max-h-[40px] min-w-[120px]"
            />
          </div>
        )}
      </header>
      <div className="flex-1 w-full h-full relative">
        {copyText && (
          <button
            onClick={() => {
              copy(copyText);
              toast.success("Copied to clipboard!");
            }}
            className="absolute bottom-4 right-5 pl-2 pr-3 py-1 gap-1 rounded-md flex items-center justify-center cursor-pointer shadow-lg bg-zinc-600 text-white z-20 hover:bg-zinc-700 transition-colors"
          >
            <Clipboard fill="white" className="scale-90" />
            <span className="font-medium">Copy</span>
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default ActionBox;
