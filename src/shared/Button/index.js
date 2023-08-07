import classNames from "classnames";

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
      <div className="title">{title}</div>
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
      <div className="title">{title}</div>
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
        <div className="title">{title}</div>
        {children && <div className="children">{children}</div>}
      </div>
    </>
  );
};
