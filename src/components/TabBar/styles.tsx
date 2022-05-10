import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Container = styled.View`
  background-color: ${AppStyles.colour.background} !important;
`;

export const Bar = styled.View`
  align-items: center;
  background-color: #ffffff;
  flex-direction: row;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 1px ${AppStyles.colour.border};
  height: 75px;
`;

export const ContainerItems = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const TabItems = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px ${AppStyles.colour.border};
  width: 35px;
  height: 35px;
`;

export const styles = StyleSheet.create({
  styleIndex0: {
    backgroundColor: `${AppStyles.colour.primary}`,
    borderColor: `${AppStyles.colour.primary}`,
  },
  styleIndex1: {
    backgroundColor: `${AppStyles.colour.white}`,
    borderColor: `${AppStyles.colour.primary}`,
  },
  pickers: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#eeeeee",
    borderColor: `${AppStyles.colour.border}`,
    color: `${AppStyles.colour.font}`,
    width: "50%",
  },
});
