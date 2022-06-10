import { useLazyQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
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
  Test,
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
  const [inputOrigin, setInputOrigin] = useState<string>();
  const [inputDestination, setInputDestination] = useState<string>();
  const [inputProduct, setInputProduct] = useState<string>();
  const [inputBodyWork, setInputBodyWork] = useState<string>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  

  useEffect(() => {
    listFreights();
  }, [isFetching]);

  function listFreights() {
    getFreights().then((t) => {
      setData(t.data.getFreights);
    });
  }

  const onRefresh = () => {
    setIsFetching(!isFetching)
  };

  async function FilterSearch(
    origin: string | undefined,
    destination: string | undefined,
    product: string | undefined,
    nameBodyWork: string | undefined
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
      item={item}
    />
  );

  return (
    <Container style={styles.pb0}>
      <ContentHeaders>
        <ContentLogo onPress={onRefresh}>
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
                onChangeText={(t) => setInputOrigin(t !== "" ? t : undefined)}
                title="Origem"
                placeholder="Origem"
              />
              <Input
                style={styles.mb10}
                title="Destino"
                value={inputDestination}
                onChangeText={(t) =>
                  setInputDestination(t !== "" ? t : undefined)
                }
                placeholder="Destino"
              />
              <Input
                style={styles.mb10}
                title="Produto"
                value={inputProduct}
                onChangeText={(t) => setInputProduct(t !== "" ? t : undefined)}
                placeholder="Produto"
              />
              <Input
                style={styles.mb10}
                title="Carroceria"
                value={inputBodyWork}
                onChangeText={(t) => setInputBodyWork(t !== "" ? t : undefined)}
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
        onRefresh={onRefresh}
        refreshing={isFetching}
        progressViewOffset={100}
      />
    </Container>
  );
}
