import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Container = styled.View`
  background-color: ${AppStyles.colour.background} !important;
`;

export const Bar = styled.View`
  align-items: center;
  background-color: #ffffff;
  flex-direction: row;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 1px ${AppStyles.colour.border};
  height: 75px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
`;

export const ContainerItems = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const TabItems = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px ${AppStyles.colour.border};
  width: 35px;
  height: 35px;
`;

export const Touch = styled.TouchableOpacity``;

export const ContentModal = styled.ScrollView`
  padding: 20px;
`;

export const Scroll = styled.ScrollView``;

export const TitleCarrier = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const ContentOption = styled.View`
  flex: 1;
`;
export const Check = styled.TouchableOpacity`
  text-align: left;
  height: 50%;
  align-content: center;
  justify-content: center;
  border-collapse: separate;
`;
export const Text = styled.Text`
  font-weight: 620;
  font-size: 14px;
  margin-left: 15px;
  color: ${AppStyles.colour.font};
`;

export const SpanError = styled.Text`
  color: #FF3A3A;
  font-size: 12px;
`;


export const styles = StyleSheet.create({
  styleIndex0: {
    backgroundColor: `${AppStyles.colour.primary}`,
    borderColor: `${AppStyles.colour.primary}`,
  },
  styleIndex1: {
    backgroundColor: `${AppStyles.colour.white}`,
    borderColor: `${AppStyles.colour.primary}`,
  },
  view: {
    backgroundColor: "#fff",
    margin: 0,
    marginTop: "10vh",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: "flex-start",
    paddingTop: "2px",
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
  titleModal: {
    fontSize: 18
  },
  fs15: { fontSize: 15 },
  mb15: { marginBottom: "15px" },
  mt: { marginTop: "15px" },
  width90: { width: "90%" },
  width80: { width: "85%" },
  height: { minHeight: "100px" },
  mb1010: { marginBottom: "7px" },
});
