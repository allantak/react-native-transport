import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";

export default function Freight() {
    return (
        <View style={styles.container}>
            <Text>Freight</Text>
            <StatusBar style="auto" />
        </View>
    );
}
