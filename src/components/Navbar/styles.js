import styled from "styled-components";

export const NavbarContent = styled.div`
  position: fixed;
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 4.5rem;
  z-index: 999;

  @media (max-width: 1200px) {
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const LogoLink = styled.a`
  height: 30px;
  width: 120px;
  text-decoration: none;
  cursor: pointer;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    & a:nth-child(2) {
      background-color: red;
      display: none;
    }
  }
`;
