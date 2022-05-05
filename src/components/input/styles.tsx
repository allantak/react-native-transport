import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Content = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.Text`
  font-weight: 620;
  font-size: 13px;
  margin-left: 10px;
  margin-bottom: 5px;
`;

export const InputStyle = styled.TextInput`
  border-radius: 10px;
  padding: 10px;
  background-color: #eeeeee;
  border: 1px ${AppStyles.colour.border};
  &::placeholder {
    padding-left: 10px;
    color: #3c3c3c;
  }
`;