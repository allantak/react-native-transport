import { useNavigation } from "@react-navigation/native";
import { TouchableOpacityProps } from "react-native";
import { stylesGlobal } from "../../../styles/global";
import {
  Card,
  Container,
  ContainerDescription,
  ContainerTitle,
  TextDescription,
  TextTitle,
  Title,
  styles,
} from "./styles";

interface IFreights extends TouchableOpacityProps {
  id?: number,
  origin: string;
  destination: string;
  product: string;
  company?: string;
  bodyWork?: any;
  price?: number;
  item: object;
}

export default function CardFreight({ ...props }: IFreights) {
  const navigation = useNavigation<any>();
  return (
    <Card onPress={() => navigation.navigate("Detail", props.item)} style={stylesGlobal.mb}>
      <Container style={styles.padding}>
        <ContainerTitle>
          <Title>Origem</Title>
          <TextTitle>{props.origin}</TextTitle>
        </ContainerTitle>

        <ContainerTitle>
          <Title>Destino</Title>
          <TextTitle>{props.destination}</TextTitle>
        </ContainerTitle>
      </Container>

      <Container>
        <ContainerDescription
          style={(props.company == undefined ? styles.width50 : null)}
        >
          <Title>Carroceria</Title>
          <TextDescription>{props.bodyWork}</TextDescription>
        </ContainerDescription>

        <ContainerDescription
          style={props.company == undefined ? styles.width25 : null}
        >
          <Title>Produto</Title>
          <TextDescription>{props.product}</TextDescription>
        </ContainerDescription>

        {props.company !== undefined ? (
          <ContainerDescription>
            <Title>Empresa</Title>
            <TextDescription>{props.company}</TextDescription>
          </ContainerDescription>
        ) : null}

        <ContainerDescription
          style={props.company == undefined ? styles.width25 : null}
        >
          <Title>Preço</Title>
          {props.price == undefined ? (
            <TextDescription>
              R$<TextDescription style={styles.yellow}>*****</TextDescription>
            </TextDescription>
          ) : (
            <TextDescription>R$ {props.price}</TextDescription>
          )}
        </ContainerDescription>
      </Container>
    </Card>
  );
}
