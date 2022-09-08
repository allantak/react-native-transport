import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Content = styled.View`
  flex-direction: column;
`;

export const ContentRow = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-weight: 620;
  font-size: 13px;
  margin-left: 10px;
  margin-bottom: 5px;
  color: ${AppStyles.colour.font};
`;

export const Text = styled.Text`
font-weight: 620;
  font-size: 13px;
  color: red;
`;

export const InputStyle = styled.TextInput`
  border-radius: 10px;
  padding: 10px;
  border: 1px ${AppStyles.colour.border};
  color: #3C3C3C;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;
