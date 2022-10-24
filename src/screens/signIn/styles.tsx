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
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`;

export const ContentLogo = styled.View`
  flex-direction: row;
  align-items: center;
  display: flex;

  padding-left: 10px;
`;

export const ContentDescription = styled.View`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Register = styled.View`
  flex-direction: row;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

export const NameLogo = styled.Text`
  font-size: 17px;
  font-weight: 700;
  color: ${AppStyles.colour.font};
  margin-left: 5px;
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

export const ContentInput = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentButton = styled.View`
  flex-direction: column;
  justify-content: center;
  display: flex;
`;

export const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 12,
  },
  imagem: {
    height: 40,
    width: 60,
    marginRight: 5,
  },
});
