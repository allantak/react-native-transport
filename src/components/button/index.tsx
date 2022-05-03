import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonLarg, TextButton } from "./styles";

interface ButtonData extends TouchableOpacityProps {
  text: string;
}

export default function Button({ text, ...rest }: ButtonData) {
  return (
    <ButtonLarg {...rest}>
      <TextButton>{text}</TextButton>
    </ButtonLarg>
  );
}
