import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Container = styled.View`
    height: 55px;
    background-color: #ffffff;
    flex-direction: row;
    border-top-right-radius:15px;
    border-top-left-radius:15px;
    border-color: ${AppStyles.colour.border};
`;
export const TabItems = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

