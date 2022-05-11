import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonLarg, TextButton } from "./styles";

interface IButton extends TouchableOpacityProps {
  text: string;
}

export default function Button({ text, ...rest }: IButton) {
  return (
    <ButtonLarg {...rest}>
      <TextButton>{text}</TextButton>
    </ButtonLarg>
  );
}
