import styled from "styled-components";
import Image from "next/image";

import HeroTexture from "@/assets/hero-texture.png";

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
  z-index: 1;

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

export const HeroSection = styled.div`
  position: relative;
  z-index: 33;
  padding-bottom: 5rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    height: 85vh;
    padding-bottom: 3rem;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  max-width: 70%;
  font-family: "CabinetGrotesk-ExtraBold";
  font-style: normal;
  font-size: 5.5rem;
  line-height: 95%;

  text-align: center;
  letter-spacing: -0.01em;
  text-transform: capitalize;
  color: white;
  opacity: 0.92;

  @media (max-width: 768px) {
    font-size: 4rem;
    width: 70%;
  }
`;

export const HeroDesc = styled.h4`
  margin: 10px 0 0 0;
  max-width: 481px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 150%;
  text-align: center;
  z-index: 2;

  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 60%;
  }
`;

export const BottomContent = styled.div`
  position: relative;
  width: 80%;
  height: 30%;
  margin-top: -1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 3rem;
  z-index: 1;
  background-image: url("../assets/hero-texture.png");
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 0;
    margin-top: 20px;
    height: 13rem;
    overflow: hidden;
  }
`;

export const Texture = styled(Image)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  opacity: 0.3;
  z-index: -1;
  @media (max-width: 768px) {
    margin-top: 4px;
    width: 250%;
  }
`;
