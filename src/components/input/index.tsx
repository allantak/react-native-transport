import { TextInputProps } from "react-native";
import { Content, InputStyle, Title, Text } from "./styles";

interface IInput extends TextInputProps {
  title: string;
  required?: boolean;
}

export default function Input({ ...props }: IInput) {
  return (
    <Content>
      {props.required == true ? (
        <Content>
          <Title>
            {props.title} <Text>*</Text>
          </Title>
          <InputStyle {...props} />
        </Content>
      ) : (
        <Content>
          <Title>{props.title}</Title>
          <InputStyle {...props} />
        </Content>
      )}
    </Content>
  );
}
