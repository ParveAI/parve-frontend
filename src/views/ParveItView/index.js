import ActionBox from "@/shared/ActionBox";
import { Container, Boxes } from "./styles";

import UploadPhoto from "@/components/UploadPhoto";
import ParveTextBox from "@/components/ParveTextBox";
// import { useLocalStorage } from "@/hooks";
// import { useState } from "react";

const ParveItView = () => {
  // let [value, setValue] = useLocalStorage("name", "");

  return (
    <Container>
      <Boxes>
        <UploadPhoto />
        <ParveTextBox />
      </Boxes>
    </Container>
  );
};

export default ParveItView;
