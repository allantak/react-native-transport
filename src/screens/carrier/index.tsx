import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";

export default function Carrier() {
    return (
        <View style={styles.container}>
            <Text>Carrier</Text>
            <StatusBar style="auto" />
        </View>
    );
}
