import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacityProps } from "react-native";
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
import carrierImg from "../../../../assets/defalt-carrier.jpg";

interface ICarriers extends TouchableOpacityProps {
  id?: number;
  carrier: string;
  service: string;
  company?: string;
  price?: number;
  item: object;
  img?: string;
  profile?: boolean;
  returnItem?: (value:object) => object
}

export default function CardCarrier({ ...props }: ICarriers) {
  const navigation = useNavigation<any>();
  
  return (
    <Card
      onPress={() => !props.profile ? navigation.navigate("DetailCarrier", props.item): props.returnItem(props.item) }
      style={stylesGlobal.mb}
    >
      <ContainerImg>
        <Image
          source={props.img ? { uri: props.img } : carrierImg}
          style={styles.imagem}
          resizeMode="contain"
        ></Image>
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
