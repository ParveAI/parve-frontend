import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 9px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #f2f2f2;
  min-height: 40px;
  background: rgba(226, 240, 253, 0.082);
  border: 1px solid rgba(223, 239, 254, 0.137);
  box-shadow: 0px 0px 0px 2px rgba(224, 243, 255, 0.18);
  border-radius: 6px;

  padding: 0 9px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: white;

  &::placeholder {
    font-family: "Inter";
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;

    color: rgba(239, 247, 255, 0.616);
  }
`;

export const Label = styled.label`
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;

  display: flex;
  align-items: center;

  color: rgba(239, 247, 255, 0.616);
`;
