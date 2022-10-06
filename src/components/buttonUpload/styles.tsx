import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Content = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 13px;
  margin-left: 10px;
  margin-bottom: 5px;
  color: ${AppStyles.colour.font};
`;

export const ButtonLarg = styled.TouchableOpacity`
    background-color: ${AppStyles.colour.primary};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    border: 1px ${AppStyles.colour.border};
    flex-direction: row;
`

export const TextButton = styled.Text`
    font-size: 15px;
    font-weight:bold;
    color: #ffffff;
    padding-left: 5px;
`


