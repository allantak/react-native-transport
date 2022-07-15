import { TouchableOpacityProps } from "react-native";
import { Content, InputStyle, Title, Text } from "./styles";

interface ITouch extends TouchableOpacityProps {
  title: string;
  placeholder: string;
  without?: boolean;
}

export default function Option({ ...props }: ITouch) {
  return (
    <Content {...props}>
      {props.without ? (
        <Content {...props}>
          <Title>
            {props.title}
          </Title>
          <InputStyle>{props.placeholder}</InputStyle>
        </Content>
      ) : (
        <Content {...props}>
          <Title>
            {props.title} <Text>*</Text>
          </Title>
          <InputStyle>{props.placeholder}</InputStyle>
        </Content>
      )}
    </Content>
  );
}
