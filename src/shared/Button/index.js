import classNames from "classnames";
import { Close } from "@/components/icons";

export const Button = ({
  as = "button",
  href,
  title,
  reverse,
  children,
  className,
  ...props
}) => {
  const As = as;
  return (
    <As
      href={href}
      className={classNames("btn-primary", { reverse: reverse }, className)}
      {...props}
    >
      {title && <div className="title">{title}</div>}
      {children && <div className="children">{children}</div>}
    </As>
  );
};

export const HighlightedButton = ({
  as = "button",
  href,
  title,
  reverse,
  className,
  children,
  ...props
}) => {
  const As = as;
  return (
    <As
      href={href}
      className={classNames("btn-highlighted", { reverse: reverse }, className)}
      {...props}
    >
      {title && <div className="title">{title}</div>}
      {children && <div className="children">{children}</div>}
    </As>
  );
};

export const SubmitButton = ({
  title,
  reverse,
  className,
  children,
  ...props
}) => {
  return (
    <>
      <div
        className={classNames("btn-submit", { reverse: reverse }, className)}
        {...props}
      >
        {title && <div className="title">{title}</div>}
        {children && <div className="children">{children}</div>}
      </div>
    </>
  );
};

export const LoaderWrapper = ({
  as = "button",
  isLoading,
  children,
  ...props
}) => {
  const As = as;
  return (
    <As {...props} title={!isLoading && props?.title} disabled={isLoading}>
      {isLoading ? (
        <div
          className="inline-block h-[21px] w-[21px] animate-spin rounded-full border-2 border-solid border-main border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        children
      )}
    </As>
  );
};

export const ButtonWithLoader = (props) => {
  return <LoaderWrapper as={Button} {...props} />;
};

export const HighlightedButtonWithLoader = (props) => {
  return <LoaderWrapper as={HighlightedButton} {...props} />;
};

export const CloseButton = (props) => {
  return (
    <div
      {...props}
      className="absolute top-4 right-4 w-8 h-8 cursor-pointer bg-black rounded-full flex items-center justify-center transition-colors hover:bg-[#181818]"
    >
      <Close className="scale-90" fill="white" />
    </div>
  );
};
