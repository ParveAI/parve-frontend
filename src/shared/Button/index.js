import { ButtonContent, HighlightedButtonContent,SubmitButtonContent } from "./styles";

export const Button = ({ title, reverseOrder, children, ...props }) => {
  return (
    <ButtonContent reverseOrder={reverseOrder} {...props}>
      <div className="title">{title}</div>
      {children && <div className="children">{children}</div>}
    </ButtonContent>
  );
};

export const HighlightedButton = ({
  title,
  reverseOrder,
  children,
  ...props
}) => {
  return (
    <HighlightedButtonContent reverseOrder={reverseOrder} {...props}>
      <div className="title">{title}</div>
      {children && <div className="children">{children}</div>}
    </HighlightedButtonContent>
  );
};

export const SubmitButton = ({
  title,
  reverseOrder,
  children,
  ...props
}) => {
  return (
    <SubmitButtonContent reverseOrder={reverseOrder} {...props}>
      <div className="title">{title}</div>
      {children && <div className="children">{children}</div>}
    </SubmitButtonContent>
  );
};
