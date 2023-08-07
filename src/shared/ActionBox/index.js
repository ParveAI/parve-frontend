import { Button } from "../Button";

const ActionBox = ({
  children,
  icon = false,
  title = "Title",
  description = "Description",
  buttonTitle = "Button",
  buttonHandler = () => {},
}) => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full min-h-[360px] rounded-xl px-8 py-5 gap-4 bg-[#1a1a1a] border-[1px] border-white/20 max-md:p-6">
      <header className="flex flex-col items-start justify-center">
        {icon && (
          <div className="h-8 w-8 min-h-8 min-w-8 flex items-center justify-center mb-2">
            {icon}
          </div>
        )}
        <h3 className="font-bold text-lg mb-[3px] flex items-center tracking-tight text-white">
          {title}
        </h3>
        <h6 className="font-normal text-base text-[#969696]">{description}</h6>
      </header>
      <div className="flex-1 w-full h-[90px]">{children}</div>
      <div className="w-full">
        <Button onClick={buttonHandler}>{buttonTitle}</Button>
      </div>
    </div>
  );
};

export default ActionBox;
