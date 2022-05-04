import { StyleSheet } from "react-native";
import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
`;

export const Content = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const ContentLogo = styled.div`
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 20;
    color: #585858;
  }
  span {
    font-size: 13;
    text-align: center;
  }
`;

export const SpanError = styled.h6`
  color: #FF3A3A;
  font-size: 12px;
`;


export const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    marginEnd: 10,
  },
});
