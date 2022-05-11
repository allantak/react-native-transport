import { TouchableOpacityProps } from "react-native";
import {
  Card,
  Container,
  ContainerDescription,
  ContainerTitle,
  TextDescription,
  TextTitle,
  Title,
} from "./styles";

interface ICardCarrier extends TouchableOpacityProps {
  origin: string;
  destination: string;
  product: string;
  company: string;
  bodyWork: string;
  price: number;
  hidden: boolean;
}

export default function CardCarrier({ ...props }: ICardCarrier) {
  return (
    <Card>
      <Container>
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
        <ContainerDescription>
          <Title>Carroceria</Title>
          <TextDescription>{props.bodyWork}</TextDescription>
        </ContainerDescription>

        <ContainerDescription>
          <Title>Produto</Title>
          <TextDescription>{props.product}</TextDescription>
        </ContainerDescription>

        <ContainerDescription>
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
