import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacityProps, View } from "react-native";
import { AppStyles } from "../../styles/colors";
import { TabItems } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface IFilter extends TouchableOpacityProps {
  logout?: boolean;
}

export default function ButtonFilter({ ...props }: IFilter) {
  return (
    <TabItems {...props}>
      {props.logout ? (
        <MaterialIcons
          name="logout"
          size={16}
          color={`${AppStyles.colour.primary}`}
        />
      ) : (
        <Ionicons
          name="filter"
          size={16}
          color={`${AppStyles.colour.primary}`}
        />
      )}
    </TabItems>
  );
}
