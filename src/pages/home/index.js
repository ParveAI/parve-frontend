import styled from "styled-components";

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Container>
      <Hero />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

