import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${AppStyles.colour.background};
  padding: 20px;
`;

export const ContentHeaders = styled.View`
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const ContentLogo = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 50%;
`;
export const ContentFilter = styled.View`
  flex-direction: row-reverse;
`;

export const TitleLogo = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${AppStyles.colour.font};
`;

export const TitleCarrier = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const ContentModal = styled.View`
  padding: 20px;
`;

export const Text = styled.Text`
  font-weight: 620;
  font-size: 14px;
  margin-left: 15px;
  color: ${AppStyles.colour.font};
`;


export const styles = StyleSheet.create({
  mb: { marginBottom: "5px" },
  mb10: { marginBottom: "15px" },
  mb1010: { marginBottom: "7px" },
  mr10: { marginRight: "10px" },
  mt: { marginTop: "15px" },
  ml: { marginLeft: "10px" },
  fs15: { fontSize: 15 },
  pb0: { paddingBottom: 1 },
  titleModal: { fontSize: 18 },
  view: {
    backgroundColor: "#fff",
    margin: 0,
    marginTop: "20vh",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: "flex-start",
  },
  viewOption:{
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: "42vh",
    marginBottom: "42vh",
    marginLeft: "6vw",
    marginRight: "6vw",
  },
  mb15: { marginBottom: "15px" },
});
