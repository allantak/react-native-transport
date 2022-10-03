import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${AppStyles.colour.background};
  padding: 20px;
`;

export const Content = styled.View`
  flex-direction: column;
`;

export const SpanError = styled.Text`
  color: #ff3a3a;
  font-size: 12px;
  margin: 5px 10px;
`;

export const SpanErrorMB20 = styled.Text`
  color: #ff3a3a;
  font-size: 12px;
  margin: 5px 10px;
`;

export const ContentHeaders = styled.View`
  height: 10vh;
`;
export const ContentInput = styled.View`
  height: 38vh;
`;
export const ContentButton = styled.View`
  height: 20vh;
`;
export const Description = styled.Text`
    font-size: 15px;
    color: ${AppStyles.colour.font};
    text-align: flex-start;
    padding-left: 10px;
    margin-top: 7px;
`;

export const TitleDescription = styled.Text`
    font-size: 26px;
    color: ${AppStyles.colour.font};
    text-align: center;
    padding-left: 10px;
    margin: 0;
`;
export const ContentDescription = styled.View`
  height: 20vh;
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 10,
  },
  pickers: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#eeeeee",
    borderColor: `${AppStyles.colour.border}`,
    color: `${AppStyles.colour.font}`,
    width: "50%",
  },
});
