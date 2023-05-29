import { Button } from "../Button";
import {
  Container,
  Head,
  IconContent,
  Title,
  Desc,
  Body,
  Foot,
} from "./styles";

const ActionBox = ({
  children,
  icon = false,
  title = "Title",
  description = "Description",
  buttonTitle = "Button",
  buttonHandler = () => {},
}) => {
  return (
    <Container>
      <Head>
        {icon && <IconContent>{icon}</IconContent>}
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </Head>
      <Body>{children}</Body>
      <Foot>
        <Button onClick={buttonHandler}>{buttonTitle}</Button>
      </Foot>
    </Container>
  );
};

export default ActionBox;
