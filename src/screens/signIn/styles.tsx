import { StyleSheet } from "react-native";
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

export const ContentLogo = styled.div`
  height: 40vh;
  flex-direction: column;
  text-align: center;
  margin-top: 40px;
`;

export const NameLogo = styled.h1`
    font-size: 20px;
    color: ${AppStyles.colour.font};
    padding: 10px;
    
`;

export const Description = styled.p`
    font-size: 13px;
    color: ${AppStyles.colour.font};
    text-align: center;
    padding: 10px;
`;

export const SpanError = styled.h6`
  color: #FF3A3A;
  font-size: 12px;
  margin: 5px 10px;
`;

export const ContentInput = styled.div`
  height: 30vh;
`;

export const ContentButton = styled.div`
  height: 25vh;
`;

export const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 12,
  },
});
