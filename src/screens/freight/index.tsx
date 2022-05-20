import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Alert, FlatList, Modal, View } from "react-native";
import ReactNativeModal from "react-native-modal";
import Icon from "../../../assets/svg/logoWithoutCircle";
import Button from "../../components/button";
import ButtonFilter from "../../components/buttonFilter";
import CardFreight from "../../components/card/freight";
import Input from "../../components/input";
import { apiService } from "../../services/API";
import {
  Container,
  ContentHeaders,
  TitleLogo,
  ContentFilter,
  ContentLogo,
  TitleCarrier,
  styles,
  ContentModal,
} from "./styles";

export interface IFreight {
  id: number;
  origin: string;
  destination: string;
  product: string;
  company: string;
  bodyWorks: object;
  price: number;
}

interface IFreightDescription {
  weight: number;
  species: number;
  email: string;
  phone: string;
}

interface IBodyWork {
  name: string;
}

export default function Freight() {
  const [getFreights] = useLazyQuery(apiService.freights);
  const [data, setData] = useState<any[]>();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    getFreights().then((t) => {
      setData(t.data.getFreights);
    });
  }, []);

  function transform(data: any) {
    let Vasco: any = [];
    for (const index in data) {
      Array(data).map((value) => {
        let array = value[index].name;
        Vasco = array + ", " + Vasco;
      }).toString;
    }
    return Vasco;
  }

  const renderItem = ({ item }: any) => (
    <CardFreight
      origin={item.origin}
      destination={item.destination}
      price={item.price}
      bodyWork={transform(item.bodyWorks)}
      product={item.product}
    />
  );

  return (
    <Container>
      <ContentHeaders>
        <ContentLogo>
          <Icon width={59} height={59} />
          <TitleLogo style={styles.mb && styles.ml}>Transport</TitleLogo>
        </ContentLogo>

        <ContentFilter>
          <ButtonFilter onPress={toggleModal} />
          <ReactNativeModal style={styles.view} isVisible={isModalVisible} onBackdropPress={toggleModal}>
            <ContentModal>
              <TitleCarrier style={styles.titleModal}>
                Filtro de pesquisa
              </TitleCarrier>
              <TitleCarrier style={styles.fs15}>Carga</TitleCarrier>
              <Input style={styles.mb10} title="Origem" placeholder="Origem" />
              <Input
                style={styles.mb10}
                title="Destino"
                placeholder="Destino"
              />
              <Input
                style={styles.mb10}
                title="Produto"
                placeholder="Produto"
              />
              <Input
                style={styles.mb10}
                title="Carroceria"
                placeholder="Carroceria"
              />
              <Button
                style={styles.mt}
                text="Pesquisar"
                onPress={toggleModal}
              />
            </ContentModal>
          </ReactNativeModal>
        </ContentFilter>
      </ContentHeaders>

      <TitleCarrier>Cargas</TitleCarrier>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
