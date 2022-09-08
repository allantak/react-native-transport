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
  flex-direction: row;
  align-items: center;
  display: flex;
  width: 32.5%;
  height: 13vh ;
  padding-left: 10px ;
`;

export const ContentDescription = styled.div`
  height: 22vh;
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Register = styled.div`
  flex-direction: row;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

export const NameLogo = styled.h2`
    font-size: 15px;
    color: ${AppStyles.colour.font};
    padding: 10px;
    
`;

export const Description = styled.p`
    font-size: 18px;
    color: ${AppStyles.colour.font};
    text-align: flex-start;
    padding: 10px;
`;

export const TitleDescription = styled.h1`
    font-size: 35px;
    color: ${AppStyles.colour.font};
    text-align: center;
    padding-left: 10px;
    margin: 0;
`;

export const TextButton = styled.h6`
  font-size: 15px;
  color: ${AppStyles.colour.primary};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  padding-left: 10px;
  margin: 0;
`;
export const BeforeButton = styled.h6`
  font-size: 15px;
  color: ${AppStyles.colour.font};
  text-align: center;
  padding-left: 10px;
  margin: 0;
`;

export const SpanError = styled.h6`
  color: #FF3A3A;
  font-size: 12px;
  margin: 5px 10px;
`;

export const ContentInput = styled.div`
  height: 25vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

export const ContentButton = styled.div`
  height: 40vh;
  flex-direction: column;
  justify-content: center;
  display: flex;
`;

export const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 12,
  },
});
