import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Content = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-weight: 620;
  font-size: 13px;
  margin-left: 10px;
  margin-bottom: 5px;
  color: ${AppStyles.colour.font};
`;

export const InputStyle = styled.TextInput`
  border-radius: 10px;
  padding: 10px;
  background-color: #eeeeee;
  border: 1px ${AppStyles.colour.border};
  color: #3C3C3C;
  &::placeholder {
    padding-left: 10px;
    color: #3c3c3c;
  }
`;
