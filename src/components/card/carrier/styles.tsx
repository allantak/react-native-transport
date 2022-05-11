import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { AppStyles } from "../../../styles/colors";

export const Container = styled.View`
  flex-direction: row;
`;

export const ContainerTitle = styled.View`
  width: 50%;
  align-items: flex-start;
`;

export const Title = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 8px;
  font-weight: 620;
`;

export const TextTitle = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 12px;
  font-weight: 700;
`;

export const ContainerDescription = styled.View`
    width: 25%;
    align-items: flex-start;
`;

export const TextDescription = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 10px;
`;

export const Card = styled.TouchableOpacity`
  background-color: ${AppStyles.colour.white};
  flex-direction: column;
  min-height: 73px;
  width: 100%;
  border-radius: 5px;
  border: 1px ${AppStyles.colour.border};
  padding: 10px 13px;
`;

export const styles = StyleSheet.create({
  padding: {
    paddingBottom: "10px",
  }
});
