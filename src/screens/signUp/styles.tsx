import { Dimensions, StyleSheet } from "react-native";
import styled from "styled-components";
import { AppStyles } from "../../styles/colors";

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  background-color: ${AppStyles.colour.background};
  padding: 20px;
`;

export const Content = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const SpanError = styled.h6`
  color: #ff3a3a;
  font-size: 12px;
  margin: 5px 10px;
`;

export const SpanErrorMB20 = styled.h6`
  color: #ff3a3a;
  font-size: 12px;
  margin: 5px 10px;
`;

export const ContentHeaders = styled.div`
  height: 10vh;
`;
export const ContentInput = styled.div`
  height: 38vh;
`;
export const ContentButton = styled.div`
  height: 20vh;
`;
export const Description = styled.p`
    font-size: 15px;
    color: ${AppStyles.colour.font};
    text-align: flex-start;
    padding-left: 10px;
    margin-top: 7px;
`;

export const TitleDescription = styled.h1`
    font-size: 26px;
    color: ${AppStyles.colour.font};
    text-align: center;
    padding-left: 10px;
    margin: 0;
`;
export const ContentDescription = styled.div`
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
