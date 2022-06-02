import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacityProps, View } from "react-native";
import { AppStyles } from "../../styles/colors";
import { TabItems } from "./styles";

export default function ButtonFilter({ ...props }: TouchableOpacityProps) {
  return (
    <TabItems {...props}>
      <Ionicons name="filter" size={16} color={`${AppStyles.colour.primary}`} />
    </TabItems>
  );
}
