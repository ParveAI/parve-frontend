import { useTyped } from "@/hooks";

import styled from "styled-components";

export default function Login() {
  const ref = useTyped(["test", "tesasdt2", "test3"], {
    backSpeed: 50,
    loop: true,
  });

  return (
    <>
      <Title ref={ref}>Login</Title>
    </>
  );
}

const Title = styled.h1`
  font-size: 45px;
  background-color: red;
`;
