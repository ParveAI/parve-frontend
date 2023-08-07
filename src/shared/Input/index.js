import { EyeOff, EyeOn } from "@/components/icons";
import classNames from "classnames";
import { useState } from "react";

export const TextInput = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  inputClassName,
  children,
  ...props
}) => {
  return (
    <div className="relative w-full flex flex-col items-start justify-center gap-2">
      <label
        htmlFor="input"
        className="font-[Inter] text-sm font-normal text-[rgba(239,247,255,0.616)]"
      >
        {label}
      </label>
      <input
        type={type}
        id="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classNames(
          "w-full min-h-[40px] bg-[rgba(226,240,253,0.082)] border-[1px] border-[rgba(223,239,254,0.137)] shadow-sm rounded-md px-2 font-[Inter] text-sm font-normal flex items-center text-white placeholder:text-[rgba(239,247,255,0.616)] placeholder:font-[Inter] placeholder:text-sm placeholder:font-normal",
          {
            [inputClassName]: inputClassName,
          }
        )}
        {...props}
      />
      {children}
    </div>
  );
};

export const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TextInput
      type={showPassword ? "text" : "password"}
      placeholder={"•••••••••"}
      inputClassName="pr-10"
      {...props}
    >
      <div className="absolute h-10 bottom-0  right-0 flex items-center justify-end">
        <button
          type="button"
          className="h-7 flex items-center justify-center mr-2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOn fill="rgba(255,255,255,.7)" className="scale-90" />
          ) : (
            <EyeOff fill="rgba(255,255,255,.7)" className="scale-90" />
          )}
        </button>
      </div>
    </TextInput>
  );
};
