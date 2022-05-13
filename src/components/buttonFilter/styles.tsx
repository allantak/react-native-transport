import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const TabItems = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px ${AppStyles.colour.primary};
  width: 35px;
  height: 35px;
`;