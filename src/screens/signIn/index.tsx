import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";

export default function SigIn() {
    return (
        <View style={styles.container}>
            <Text>Sigin</Text>
            <StatusBar style="auto" />
        </View>
    );
}
