import ActionBox from "@/shared/ActionBox";
import { Container, Title, Boxes } from "./styles";

import UploadPhoto from "@/components/UploadPhoto";
import { useLocalStorage } from "@/hooks";
import { useState } from "react";

const ParveItView = () => {
  let [value, setValue] = useLocalStorage("name", "");

  const [date, setDate] = useState(value);

  // When user submits the form, save the favorite number to the local storage

  return (
    <Container>
      <Boxes>
        <UploadPhoto />
        <ActionBox />
      </Boxes>
    </Container>
  );
};

export default ParveItView;
