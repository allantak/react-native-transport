import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { AppStyles } from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${AppStyles.colour.background};
  padding: 20px;
`;

export const ContentHeaders = styled.View`
  height: 12vh;
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
export const ContentSegment = styled.View`
  flex-direction: row;
  padding-top: 10px;
`;
export const ContentEmail = styled.Text`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
export const ContentDescription = styled.View`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 24vh;
`;


export const SegmentTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${AppStyles.colour.font};
`;
export const TitleLogo = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${AppStyles.colour.font};
`;
export const TitleEmail = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: ${AppStyles.colour.font};
`;
export const MainTitle = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
`;
export const Email = styled.Text`
  color: ${AppStyles.colour.font};
  font-size: 18px;
  font-weight: 450;
  margin-bottom: 12px;
`;

export const Test = styled.View``;

export const styles = StyleSheet.create({
  mb: { marginBottom: "5px" },
  mb15: { marginBottom: "15px" },
  mr10: { marginRight: "10px" },
  mt: { marginTop: "15px" },
  ml: { marginLeft: "10px" },
  pb0:{ paddingBottom: 1},
  fs15: { fontSize: 15 },
  titleModal: { fontSize: 18 },
  view: {
    backgroundColor: "#fff",
    margin: 0,
    marginTop: "20vh",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: "flex-start",
  },
});
