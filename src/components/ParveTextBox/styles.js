import styled from "styled-components";

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: vertical;
  background-color: transparent;
  padding: 20px;

  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  /* or 144% */

  letter-spacing: 0.008px;

  color: #ffffff;

  background: rgba(255, 255, 255, 0.002);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 7px;
`;
