import { StyleSheet } from "react-native";
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

export const ContentLogo = styled.View`
  flex-direction: row;
  align-items: center;
  display: flex;
  height: 13vh;
  padding-left: 10px;
`;

export const ContentDescription = styled.View`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 20vh;
`;

export const Register = styled.View`
  flex-direction: row;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

export const NameLogo = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${AppStyles.colour.font};
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
  font-weight: 600;
  margin: 0;
`;

export const TextButton = styled.TouchableOpacity`
  font-size: 15px;
  color: ${AppStyles.colour.primary};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  padding-left: 10px;
  margin: 0;
`;
export const BeforeButton = styled.Text`
  font-size: 15px;
  color: ${AppStyles.colour.font};
  text-align: center;
  padding-left: 10px;
  margin: 0;
`;

export const SpanError = styled.Text`
  color: #ff3a3a;
  font-size: 12px;
  margin: 5px 10px;
`;

export const ContentInput = styled.Text`
  height: 25vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

export const ContentButton = styled.Text`
  height: 30vh;
  flex-direction: column;
  justify-content: center;
  display: flex;
`;

export const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 12,
  },
});
