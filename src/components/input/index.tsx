import { TextInputProps } from "react-native";
import { Content, InputStyle, Title } from "./styles";

interface InputData extends TextInputProps {
  title: string;
}

export default function Input({ title, ...rest }: InputData) {
  return (
    <Content>
      <Title>{title}</Title>
      <InputStyle {...rest} />
    </Content>
  );
}
