import styled from "styled-components/native";
import { AppStyles } from "../../../styles/colors";

export const Container = styled.View`
  flex-direction: column;
`;

export const ContainerTitle = styled.View`
  width: 50%;
  align-items: flex-start;
`;

export const Title = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 6px;
  font-weight: bolder;
`;

export const TextTitle = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 12px;
  font-weight: bolder;
`;

export const ContainerDescription = styled.View`
    width: 25%;
    align-items: flex-start;
`;

export const TextDescription = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 8px;
`;

export const Card = styled.TouchableOpacity`
  background-color: ${AppStyles.colour.white};
  flex-direction: row;
  min-height: 73px;
  width: 100%;
  border-radius: 5px;
  border: 1px ${AppStyles.colour.border};
  padding: 10px 13px;
`;
