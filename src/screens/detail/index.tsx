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

interface IFreightDetails extends IFreight {
  email: string;
  phone: string;
  species: string;
  weight: number;
  note: string;
}

export default function Detail({ route }: any) {
  const navigation = useNavigation<any>();
  const props: IFreightDetails = route.params;
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
        <TitleHead>Carga</TitleHead>
        <ContainerRow style={styles.mb33}>
          <ContainerIn>
            <Title>Origem</Title>
            <TextTitle>{props.origin}</TextTitle>
          </ContainerIn>
          <ContainerIn>
            <Title>Destino</Title>
            <TextTitle>{props.destination}</TextTitle>
          </ContainerIn>
        </ContainerRow>

        <TitleHead>Descrição</TitleHead>
        <ContainerRow>
          <ContainerIn>
            <Title>Carroceria</Title>
            <TextDescription>{transform(props.bodyWorks)}</TextDescription>
          </ContainerIn>
          <ContainerIn>
            <Title>Produto</Title>
            <TextDescription>{props.product}</TextDescription>
          </ContainerIn>
        </ContainerRow>
        <ContainerRow>
          <ContainerIn>
            <Title>Empresa</Title>
            <TextDescription>{props.company}</TextDescription>
          </ContainerIn>
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

        <ContainerRow style={ props.note == undefined? styles.mb33 : stylesGlobal.mb}>
          <ContainerIn>
            <Title>Especie</Title>
            <TextDescription>{props.species}</TextDescription>
          </ContainerIn>
          {props.weight == undefined ? null : (
            <ContainerIn>
              <Title>Peso</Title>
              <TextDescription>{props.weight} KG</TextDescription>
            </ContainerIn>
          )}
        </ContainerRow>

        {props.note == undefined ? null : (
          <ContainerColumn style={styles.mb33}>
            <Title>Observação</Title>
            <ContainerObs>
              <TextDescription>{props.note}</TextDescription>
            </ContainerObs>
          </ContainerColumn>
        )}

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
