import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  min-height: 360px;
  padding: 20px 30px;
  gap: 16px;

  background: #1a1a1a;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const IconContent = styled.div`
  height: 30px;
  width: 30px;
  min-height: 30px;
  min-width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 3px;

  display: flex;
  align-items: center;
  letter-spacing: -0.1296px;

  color: #ffffff;
`;

export const Desc = styled.h6`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: 0.008px;

  color: #969696;
`;

export const Body = styled.div`
  flex: 1;
  width: 100%;
  height: 90px;
  background-color: red;
`;

export const Foot = styled.div`
  width: 100%;
`;
