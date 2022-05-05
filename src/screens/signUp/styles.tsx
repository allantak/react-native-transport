import { StyleSheet } from "react-native";
import styled from "styled-components";
import { AppStyles } from "../../styles/colors";

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  background-color: ${AppStyles.colour.background};
`;

export const Content = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const SpanError = styled.h6`
  color: #FF3A3A;
  font-size: 12px;
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
