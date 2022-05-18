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
`;

export const ContentHeaders = styled.div`
  height: 10vh;
`;
export const ContentInput = styled.div`
  height: 70vh;
`;
export const ContentButton = styled.div`
  height: 10vh;
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
