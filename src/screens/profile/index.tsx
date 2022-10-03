import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import ReactNativeModal from "react-native-modal";
import Icon from "../../../assets/svg/logoWithoutCircle";
import Button from "../../components/button";
import ButtonFilter from "../../components/buttonFilter";
import CardFreight from "../../components/card/freight";
import Input from "../../components/input";
import { useAuth } from "../../context/Auth";
import { apiService } from "../../services/API";
import {
  Container,
  ContentHeaders,
  TitleLogo,
  ContentFilter,
  ContentLogo,
  MainTitle,
  styles,
  ContentEmail,
  TitleEmail,
  ContentSegment,
  SegmentTitle,
  Email,
  ContentDescription,
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
  const [getFreights, { refetch }] = useLazyQuery(apiService.freights);
  const [filterFreight] = useLazyQuery(apiService.filterFreight);
  const [data, setData] = useState<any[]>();
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputOrigin, setInputOrigin] = useState<string>();
  const [inputDestination, setInputDestination] = useState<string>();
  const [inputProduct, setInputProduct] = useState<string>();
  const [inputBodyWork, setInputBodyWork] = useState<string>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const { signOut, refreash } = useAuth();

  useEffect(() => {
    if (data == undefined) {
      listFreights();
    }else{
      onRefresh()
    }
    
  }, [refreash]);

  function listFreights() {
    getFreights().then((t) => {
      setData(t.data.getFreights);
    });
  }

  const onRefresh = () => {
    refetch().then((t) => setData(t.data.getFreights));
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
        setData(params.data.searchFreight);
      })
      .catch(() => console.log("Error"));
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function handleFilter() {
    FilterSearch(inputOrigin, inputDestination, inputProduct, inputBodyWork);
    setModalVisible(!isModalVisible);
  }

  function toggleLogout() {
    signOut();
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
          <ButtonFilter onPress={toggleLogout} logout />
        </ContentFilter>
      </ContentHeaders>
      <ContentDescription>
        <MainTitle>Perfil</MainTitle>
        <ContentEmail>
          <TitleEmail>Email</TitleEmail>
          <Email>teste1@teste1.com</Email>
        </ContentEmail>

        <ContentSegment>
          <SegmentTitle>Minhas Cargas</SegmentTitle>
        </ContentSegment>
      </ContentDescription>
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
