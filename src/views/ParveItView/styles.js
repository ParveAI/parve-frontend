import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  margin-top: 85px;
`;

export const Title = styled.h1`
  font-size: 45px;
  background-color: red;
`;

export const Boxes = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  max-width: 80%;
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 16px;

    flex-direction: column;
    max-width: 100%;
  }
`;
