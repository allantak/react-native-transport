import { useNavigation } from "@react-navigation/native";
import { TouchableOpacityProps } from "react-native";
import { stylesGlobal } from "../../../styles/global";
import {
  Card,
  Container,
  ContainerDescription,
  TextDescription,
  Title,
  styles,
  ContainerImg,
} from "./styles";

interface ICarriers extends TouchableOpacityProps {
  id?: number;
  carrier: string;
  service: string;
  company?: string;
  price?: number;
  img?: string;
  item: object;
}

export default function CardCarrier({ ...props }: ICarriers) {
  const navigation = useNavigation<any>();
  return (
    <Card onPress={() => navigation.navigate("DetailCarrier", props.item)}  style={stylesGlobal.mb}>
      <ContainerImg>
      </ContainerImg>
      <Container>
        <ContainerDescription style={stylesGlobal.mb}>
          <Title>Veículos</Title>
          <TextDescription>{props.carrier}</TextDescription>
        </ContainerDescription>
        {props.company == undefined ? (
          <ContainerDescription>
            <Title>Preço</Title>
            {props.price == undefined ? (
              <TextDescription>
                R$<TextDescription style={styles.yellow}>*****</TextDescription>
              </TextDescription>
            ) : (
              <TextDescription>{props.price}</TextDescription>
            )}
          </ContainerDescription>
        ) : (
          <ContainerDescription>
            <Title>Serviço</Title>
            <TextDescription>{props.service}</TextDescription>
          </ContainerDescription>
        )}
      </Container>
      <Container>
        {props.company == undefined ? (
          <ContainerDescription>
            <Title>Serviço</Title>
            <TextDescription>{props.service}</TextDescription>
          </ContainerDescription>
        ) : (
          <ContainerDescription style={stylesGlobal.mb}>
            <Title>Empresa</Title>
            <TextDescription>{props.company}</TextDescription>
          </ContainerDescription>
        )}

        {props.company == undefined ? null : (
          <ContainerDescription>
            <Title>Preço</Title>
            {props.price == undefined ? (
              <TextDescription>
                R$<TextDescription style={styles.yellow}>*****</TextDescription>
              </TextDescription>
            ) : (
              <TextDescription>{props.price}</TextDescription>
            )}
          </ContainerDescription>
        )}
      </Container>
    </Card>
  );
}
