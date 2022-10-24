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
export const ContentModal = styled.ScrollView`
  flex: 1;
`;

export const NameLogo = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${AppStyles.colour.font};
`;

export const Title = styled.Text`
  color: #8d8d8d;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
`;
export const TextTitle = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 17px;
  font-weight: 600;
`;

export const TitleHead = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${AppStyles.colour.font};
  margin-bottom: 15px;
`;

export const TitleCarrier = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const Width = styled.View`
  width: 50%;
  justify-content: center;
`;
export const Test = styled.View``;

export const styles = StyleSheet.create({
  mb: { marginBottom: 5 },
  mb15: { marginBottom: 15 },
  mr10: { marginRight: 10 },
  mt: { marginTop: 15 },
  ml: { marginLeft: 10 },
  pb0: { paddingBottom: 1 },
  fs15: { fontSize: 15 },
  titleModal: { fontSize: 18, marginBottom: 0 },
  view: {
    backgroundColor: "#fff",
    margin: 0,
    marginTop: 10 + "%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: "flex-start",
    padding: 20,
  },
  imagem: {
    height: 39,
    width: 75,
  },
  mb20: {
    marginBottom: 20,
  },
  viewOption: {
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 85 + "%",
    marginBottom: 85 + "%",
    marginLeft: 6 + "%",
    marginRight: 6 + "%",
  },
  width90: { width: 90 + "%" },
  width80: { width: 85 + "%" },
  height: { minHeight: 100 },
  mb1010: { marginBottom: 7 },
  width150: { width: 150 },
  mb0: { marginBottom: 0 },
});
