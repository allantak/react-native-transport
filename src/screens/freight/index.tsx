import { useLazyQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
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

export default function Freight() {
  const [getFreights] = useLazyQuery(apiService.freights);
  const [filterFreight] = useLazyQuery(apiService.filterFreight);
  const [data, setData] = useState<any[]>();
  const [isModalVisible, setModalVisible] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [inputOrigin, setInputOrigin] = useState<string>("");
  const [inputDestination, setInputDestination] = useState<string>("");
  const [inputProduct, setInputProduct] = useState<string>("");
  const [inputBodyWork, setInputBodyWork] = useState<string>("");

  useEffect(() => {
    listFreights();
  }, []);

  function listFreights() {
    getFreights().then((t) => {
      setData(t.data.getFreights);
    });
    setRefresh(false);
  }

  function onRefresh() {
    listFreights();
    setRefresh(true);
  }
  async function FilterSearch(
    origin: string,
    destination: string,
    product: string,
    nameBodyWork: string
  ) {
    filterFreight({
      variables: {
        origin: origin,
        destination: destination,
        product: product,
        nameBodyWork: nameBodyWork,
      },
    })
      .then((params) => {
        setData(params.data.searchFreight),
          console.log(params.data.searchFreight);
      })
      .catch(() => console.log("Errado"));
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function handleFilter() {
    FilterSearch(inputOrigin, inputDestination, inputProduct, inputBodyWork);
    setInputOrigin("");
    setInputDestination("");
    setInputProduct("");
    setInputBodyWork("");
    setModalVisible(!isModalVisible);
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
    <Container style={styles.pb0}>
      <ContentHeaders>
        <ContentLogo>
          <Icon width={59} height={59} />
          <TitleLogo style={styles.mb && styles.ml}>Transport</TitleLogo>
        </ContentLogo>

        <ContentFilter>
          <ButtonFilter onPress={toggleModal} />
          <ReactNativeModal
            style={styles.view}
            isVisible={isModalVisible}
            onBackdropPress={toggleModal}
          >
            <ContentModal>
              <TitleCarrier style={styles.titleModal}>
                Filtro de pesquisa
              </TitleCarrier>
              <TitleCarrier style={styles.fs15}>Carga</TitleCarrier>
              <Input
                style={styles.mb10}
                value={inputOrigin}
                onChangeText={(t) => setInputOrigin(t)}
                title="Origem"
                placeholder="Origem"
              />
              <Input
                style={styles.mb10}
                title="Destino"
                value={inputDestination}
                onChangeText={(t) => setInputDestination(t)}
                placeholder="Destino"
              />
              <Input
                style={styles.mb10}
                title="Produto"
                value={inputProduct}
                onChangeText={(t) => setInputProduct(t)}
                placeholder="Produto"
              />
              <Input
                style={styles.mb10}
                title="Carroceria"
                value={inputBodyWork}
                onChangeText={(t) => setInputBodyWork(t)}
                placeholder="Carroceria"
              />
              <Button
                style={styles.mt}
                text="Pesquisar"
                onPress={handleFilter}
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
