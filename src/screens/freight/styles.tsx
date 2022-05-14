import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${AppStyles.colour.background};
  padding: 20px;
`;

export const ContentHeaders = styled.View`
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const ContentLogo = styled.View`
  flex-direction: row;
  align-items: center;
  width: 50%;
`;
export const ContentFilter = styled.View``;

export const TitleLogo = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${AppStyles.colour.font};
`;

export const TitleCarrier = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const styles = StyleSheet.create({
  mb: { marginBottom: "5px" },
});
