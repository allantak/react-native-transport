import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${AppStyles.colour.background};
  padding: 24px;
`;

export const ContentHeaders = styled.View`
  height: 7vh;
`;

export const Title = styled.Text`
  color: #8D8D8D;
  font-size: 12px;
  font-weight: 620;
  margin-bottom: 5px;
`;
export const TextTitle = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 16px;
  font-weight: 600;
`;

export const TitleHead = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${AppStyles.colour.primary};
  margin-bottom: 10px;
`;

export const TextDescription = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 10px;
`;

export const ContainerColumn = styled.View`
  flex-direction: column;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
`;

export const ContainerIn = styled.View`
  align-items: flex-start;
  width: 60%;
`;