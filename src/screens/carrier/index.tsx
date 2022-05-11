import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import CardCarrier from "../../components/card/carrier";
import { Container } from "./styles";

export default function Carrier() {
  return (
    <Container>
      <CardCarrier
        origin="Bastos"
        destination="Tupã"
        bodyWork="Vapo"
        company="Ronaldo"
        hidden={true}
        price={30}
        product="Vapo"
      />
    </Container>
  );
}
