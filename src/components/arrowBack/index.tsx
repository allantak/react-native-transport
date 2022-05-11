import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { Touchable } from "./styles";

export default function Back({ ...props }: TouchableOpacityProps) {
  return (
    <Touchable {...props}>
      <Ionicons name="arrow-back-outline" size={24} color="#585858" />
    </Touchable>
  );
}
