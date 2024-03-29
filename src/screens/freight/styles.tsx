import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${AppStyles.colour.background};
  padding: 20px;
`;

export const ContentHeaders = styled.View`
  height: 10%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 12px;
  margin-top: 12px;
`;

export const ContentLogo = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 50%;
`;
export const ContentFilter = styled.View`
  flex-direction: row-reverse;
`;
export const ContentModal = styled.View`
  padding: 20px;
`;

export const NameLogo = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${AppStyles.colour.font};
`;


export const TitleCarrier = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 15px;
  font-weight: 700;
`;

export const Test = styled.View``;

export const styles = StyleSheet.create({
  mb: { marginBottom:5 },
  mb15: { marginBottom:15 },
  mr10: { marginRight:10 },
  mt: { marginTop:15 },
  ml: { marginLeft:10 },
  pb0:{ paddingBottom: 1},
  fs15: { fontSize: 15, marginBottom: 12},
  titleModal: { fontSize: 18 },
  view: {
    backgroundColor: "#fff",
    margin: 0,
    marginTop: 20 + '%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: "flex-start",
  },
  imagem:{
    height: 39,
    width: 75,
  }
});
