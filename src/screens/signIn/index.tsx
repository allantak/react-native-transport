import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import  ButtonLarg  from "../../components/button";
import { styles } from "./styles";

export default function SignIn() {

    return (
        <View style={styles.container}>
            <Text>Sigin</Text>
            <ButtonLarg Text="Test" Navigation="Home"/>
        </View>
    );
}
