import { useNavigation } from "@react-navigation/native";
import Back from "../../components/arrowBack";
import { stylesGlobal } from "../../styles/global";
import { IFreight } from "../freight";
import {
  Container,
  ContainerColumn,
  ContainerIn,
  ContainerRow,
  ContentHeaders,
  TextTitle,
  Title,
  TitleHead,
  TextDescription,
  ContainerObs,
  styles,
} from "./styles";

interface ICarrierDetail {
  id: number;
  carrier: string;
  service: string;
  company: string;
  price: number;
  email: string;
  phone: string;
  bodyWorks: object;
}

export default function DetailCarrier({ route }: any) {
  const navigation = useNavigation<any>();
  const props: ICarrierDetail = route.params;
  function navigationBack() {
    navigation.goBack();
  }

  function transform(data: any) {
    let ArrayValue: any = [];
    for (const index in data) {
      Array(data).map((value) => {
        let array = value[index].name;
        ArrayValue = array + ", " + ArrayValue;
      }).toString;
    }
    return ArrayValue;
  }
  return (
    <Container>
      <ContentHeaders>
        <Back onPress={navigationBack} />
      </ContentHeaders>

      <ContainerColumn>
        <TitleHead>Veículo</TitleHead>
        <ContainerRow>
          <ContainerIn>
            <Title>Nome do veículo</Title>
            <TextDescription>{props.carrier}</TextDescription>
          </ContainerIn>
          <ContainerIn>
            <Title>Serviço</Title>
            <TextDescription>{props.service}</TextDescription>
          </ContainerIn>
        </ContainerRow>
        <ContainerRow>
          {props.company == undefined ? (
            <ContainerIn>
              <Title>Carroceria</Title>
              <TextDescription>{transform(props.bodyWorks)}</TextDescription>
            </ContainerIn>
          ) : (
            <ContainerIn>
              <Title>Empresa</Title>
              <TextDescription>{props.company}</TextDescription>
            </ContainerIn>
          )}
          <ContainerIn>
            <Title>Preço</Title>
            {props.price == undefined ? (
              <TextDescription>
                R$ <TextDescription style={styles.yellow}>****</TextDescription>{" "}
              </TextDescription>
            ) : (
              <TextDescription>R$ {props.price}</TextDescription>
            )}
          </ContainerIn>
        </ContainerRow>

        <ContainerRow style={styles.mb33}>
          {props.company == undefined ? null : (
            <ContainerIn>
              <Title>Carroceria</Title>
              <TextDescription>{transform(props.bodyWorks)}</TextDescription>
            </ContainerIn>
          )}
        </ContainerRow>

        <TitleHead>Contato</TitleHead>
        <ContainerColumn>
          <ContainerIn style={stylesGlobal.mb}>
            <Title>Email</Title>
            <TextDescription>{props.email}</TextDescription>
          </ContainerIn>
          <ContainerIn>
            <Title>Telefone</Title>
            <TextDescription>{props.phone}</TextDescription>
          </ContainerIn>
        </ContainerColumn>
      </ContainerColumn>
    </Container>
  );
}
