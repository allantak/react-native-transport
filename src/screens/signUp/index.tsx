import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <StatusBar style="auto" />
    </View>
  );
}
