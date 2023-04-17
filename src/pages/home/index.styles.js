import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const BackgroundContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: fit-content;
  overflow: hidden;
 

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    background: linear-gradient(
      360deg,
      #000000 11.07%,
      rgba(0, 0, 0, 0) 73.95%
    );
    z-index: 99;
  }
`;

export const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.42;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;
