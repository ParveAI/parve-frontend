import { InputWrapper, Input, Label } from "./styles";

export const TextInput = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <InputWrapper>
      <Label htmlFor="input">{label}</Label>
      <Input
        type={type}
        id="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </InputWrapper>
  );
};
