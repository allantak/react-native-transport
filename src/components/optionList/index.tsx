import {TouchableOpacityProps } from "react-native";
import { Content, InputStyle, Title, Text} from "./styles";

interface ITouch extends TouchableOpacityProps {
  title: string;
  placeholder: string;
}

export default function Option({ ...props }: ITouch) {
  return (
    <Content {...props}>
      <Title>{props.title} <Text>*</Text></Title>
      <InputStyle>{props.placeholder}</InputStyle>
    </Content>
  );
}