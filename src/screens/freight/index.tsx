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
          
        </ContentLogo>

        <ContentFilter>
          <ButtonFilter onPress={toggleModal} />
          <ReactNativeModal style={styles.view} isVisible={isModalVisible} onDismiss={toggleModal}>
            <Input title="Origem" placeholder="Origem" />
            <TitleLogo style={styles.mb && styles.ml}>Transport</TitleLogo>
            <Button text="Pesquisar" onPress={toggleModal} />
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
