import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Container } from "./styles";

export default function Carrier() {
    return (
        <Container>
            <Text>Carrier</Text>
            <StatusBar style="auto" />
        </Container>
    );
}
