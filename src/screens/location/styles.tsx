import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${AppStyles.colour.white};
  padding: 24px;
  margin-bottom: 1px;
`;

export const Content = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 13px;
  margin-left: 10px;
  margin-bottom: 5px;
  color: ${AppStyles.colour.font};
`;

export const TabItems = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px ${AppStyles.colour.primary};
  background-color: ${AppStyles.colour.white};
  width: 35px;
  height: 35px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomCard: {
    backgroundColor: "white",
    width: "100%",
    height: 220,
    padding: 30,
  },
  inputStyle: {
    borderRadius: 10,
    padding: 2,
    backgroundColor: `${AppStyles.colour.border}`,
    color: `${AppStyles.colour.white}`,
  },
  input: {
    color: AppStyles.colour.font,
  },
  viewMin: {
    zIndex: 2,
    position: "absolute",
    top: 40,
    left: 20,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: AppStyles.colour.white,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
