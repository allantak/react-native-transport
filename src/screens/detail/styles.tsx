import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${AppStyles.colour.white};
  padding: 24px;
  margin-bottom: 1px;
`;

export const ContentHeaders = styled.View`
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  color: #8d8d8d;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
`;
export const TextTitle = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 17px;
  font-weight: 600;
`;

export const TitleHead = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${AppStyles.colour.primary};
  margin-bottom: 15px;
`;

export const TextDescription = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 14px;
`;

export const ContainerColumn = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ContainerObs = styled.View`
  padding: 10px;
  width: 100%;
  background-color: #eeeeee;
  min-height: 10%;
  border-radius: 10px;
`;

export const ContainerIn = styled.View`
  align-items: flex-start;
  width: 60%;
`;

export const styles = StyleSheet.create({
  mb33: { marginBottom: 33 },
  yellow: { color: "#CFC900" },
});
