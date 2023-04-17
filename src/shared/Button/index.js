import { ButtonContent, HighlightedButtonContent } from "./styles";

export const Button = ({ title, children, ...props }) => {
  return (
    <ButtonContent {...props}>
      <div className="title">{title}</div>
      {children && <div className="children">{children}</div>}
    </ButtonContent>
  );
};

export const HighlightedButton = ({ title, children, ...props }) => {
  return (
    <HighlightedButtonContent {...props}>
      <div className="title">{title}</div>
      {children && <div className="children">{children}</div>}
    </HighlightedButtonContent>
  );
};
