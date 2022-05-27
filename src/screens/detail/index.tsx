import { useNavigation } from "@react-navigation/native";
import Back from "../../components/arrowBack";
import {
  Container,
  ContainerColumn,
  ContainerIn,
  ContainerRow,
  ContentHeaders,
  TextTitle,
  Title,
  TitleHead,
} from "./styles";

export default function Detail() {
  const navigation = useNavigation<any>();
  function navigationBack() {
    navigation.goBack();
  }
  return (
    <Container>
      <ContentHeaders>
        <Back onPress={navigationBack} />
      </ContentHeaders>
      <ContainerColumn>
          <TitleHead>Vasco</TitleHead>
        <ContainerRow>
          <ContainerIn>
            <Title>Vasco</Title>
            <TextTitle>Vasco</TextTitle>
          </ContainerIn>
          <ContainerIn>
            <Title>Vasco</Title>
            <TextTitle>Vasco</TextTitle>
          </ContainerIn>
        </ContainerRow>
        
      </ContainerColumn>
    </Container>
  );
}
