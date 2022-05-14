import { FontAwesome5 } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { AppStyles } from "../../styles/colors";
import { Container, TabItems, Bar, ContainerItems, styles } from "./styles";

export default function TabBar({ state }: BottomTabBarProps) {
  const navigation = useNavigation<any>();
  const goTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <Container>
      <Bar>
        <ContainerItems>
          <TabItems
            onPress={() => goTo("Freight")}
            style={state.index == 0 ? styles.styleIndex0 : styles.styleIndex1}
          >
            <FontAwesome5
              name="truck-loading"
              size={16}
              color={
                state.index == 0
                  ? `${AppStyles.colour.white}`
                  : `${AppStyles.colour.primary}`
              }
            />
          </TabItems>
          <TabItems
            onPress={() => goTo("Carrier")}
            style={state.index == 0 ? styles.styleIndex1 : styles.styleIndex0}
          >
            <FontAwesome5
              name="truck"
              size={16}
              color={
                state.index == 0
                  ? `${AppStyles.colour.primary}`
                  : `${AppStyles.colour.white}`
              }
            />
          </TabItems>
        </ContainerItems>
      </Bar>
    </Container>
  );
}
