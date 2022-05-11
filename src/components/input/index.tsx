import { TextInputProps } from "react-native";
import { Content, InputStyle, Title } from "./styles";

interface IInput extends TextInputProps {
  title: string;
}

export default function Input({ ...props }: IInput) {
  return (
    <Content>
      <Title>{props.title}</Title>
      <InputStyle {...props} />
    </Content>
  );
}
