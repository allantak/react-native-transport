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

export const ContentLogo = styled.div`
  height: 35vh;
  flex-direction: column;
  text-align: center;
`;

export const NameLogo = styled.h1`
    font-size: 20px;
    color: #585858;
`;

export const Description = styled.p`
    font-size: 13px;
    color: #585858;
    text-align: center;
`;

export const SpanError = styled.h6`
  color: #FF3A3A;
  font-size: 12px;
`;

export const ContentInput = styled.div`
  height: 40vh;
`;

export const ContentButton = styled.div`
  height: 25vh;
`;

export const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 10,
  },
});
