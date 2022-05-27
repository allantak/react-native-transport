import { Container } from "../../screens/signUp/styles";
import { TextTitle, TextDescription, Title } from "./styles";

interface IInfo {
  title: string;
  text: string;
  textTitle?: boolean;
}

export default function Info({ ...props }: IInfo) {
  return (
    <Container>
      <Title>{props.title}</Title>
      {props.textTitle == true ? <TextTitle>{props.text}</TextTitle>: <TextDescription>{props.text}</TextDescription>}
    </Container>
  );
}
