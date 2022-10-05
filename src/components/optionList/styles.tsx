import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Content = styled.TouchableOpacity`
  flex-direction: column;
`;
export const Title = styled.Text`
  font-weight: 600;
  font-size: 13px;
  margin-left: 10px;
  margin-bottom: 5px;
  color: ${AppStyles.colour.font};
`;

export const InputStyle = styled.Text`
  border-radius: 10px;
  padding: 10px;
  background-color: #eeeeee;
  border: 1px ${AppStyles.colour.border};
  color: #6f6f6f;
`;

export const Text = styled.Text`
  font-weight: 600;
  font-size: 13px;
  color: red;
`;
