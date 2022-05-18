import { TouchableOpacityProps } from "react-native";
import { stylesGlobal } from "../../../styles/global";
import {
  Card,
  Container,
  ContainerDescription,
  TextDescription,
  Title,
  styles,
  ContainerImg
} from "./styles";

interface ICarriers extends TouchableOpacityProps {
  id?: number;
  carrier: string;
  service: string;
  company?: string;
  price?: number;
}

export default function CardCarrier({ ...props }: ICarriers) {
  return (
    <Card>
      <ContainerImg>
        <iframe width={70} height={70}></iframe>
      </ContainerImg>
      <Container>
        <ContainerDescription style={stylesGlobal.mb}>
          <Title>Veículos</Title>
          <TextDescription>{props.carrier}</TextDescription>
        </ContainerDescription>
        <ContainerDescription>
          <Title>Serviço</Title>
          <TextDescription>{props.service}</TextDescription>
        </ContainerDescription>
      </Container>
      <Container>
        <ContainerDescription style={stylesGlobal.mb}>
          <Title>Empresa</Title>
          <TextDescription>{props.company}</TextDescription>
        </ContainerDescription>
        <ContainerDescription>
          <Title>Preço</Title>
          <TextDescription>{props.price}</TextDescription>
        </ContainerDescription>
      </Container>
    </Card>
  );
}
