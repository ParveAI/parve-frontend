import Image from "next/image";
import ParveLogo from "@/assets/parve-logo.svg";
import classNames from "classnames";

export default function FormLayout({ title, className, children, ...props }) {
  return (
    <div
      className={classNames(
        "w-full h-full flex flex-col items-start justify-center gap-4",
        className
      )}
      {...props}
    >
      <Image src={ParveLogo} alt="Logo" height={30} width={120} className="mb-6" />
      {title && (
        <h1 className="my-5 text-xl font-bold tracking-tight text-[rgba(253,254,255,0.925)]">
          {title}
        </h1>
      )}
      {children}
    </div>
  );
}
