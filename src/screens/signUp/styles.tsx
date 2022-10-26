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
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
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
margin-top: 30px;
margin-bottom: 40px;
`;
export const ContentInput = styled.View`
 
`;
export const ContentButton = styled.View`
`;
export const Description = styled.Text`
  font-size: 15px;
  color: #6c6c6c;
  text-align: left;
  padding-left: 10px;
  margin-top: 7px;
`;

export const TitleDescription = styled.Text`
  font-size: 23px;
  color: ${AppStyles.colour.font};
  text-align: center;
  padding-left: 10px;
  margin: 0;
  font-weight: 700;
`;
export const ContentDescription = styled.View`
  margin-bottom: 40px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 10,
  },
});
