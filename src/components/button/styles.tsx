import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";


export const ButtonLarg = styled.TouchableOpacity`
    background-color: ${AppStyles.colour.primary};
    justify-content: center;
    align-items: center;
    min-height: 50px;
    width: 100%;
    border-radius: 10px;
    border: 1px ${AppStyles.colour.border};
`

export const TextButton = styled.Text`
    font-size: 15px;
    font-weight:bold;
    color: #ffffff;
`