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

export const SpanSucess = styled.span`
  color: #06C302;
  font-size: 13;
  
`;

export const SpanError = styled.h1`
  color: #FF3A3A;
  font-size: 13;
`;


export const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    marginEnd: 10,
  },
});
