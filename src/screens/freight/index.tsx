import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Icon from "../../../assets/svg/logoWithoutCircle";
import ButtonFilter from "../../components/buttonFilter";
import CardFreight from "../../components/card/freight";
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
  const [dataBodyWork, setDataBodyWork] = useState<any[]>();

  useEffect(() => {
    getFreights().then((t) => {
      setData(t.data.getFreights);
    });
  }, []);

  function transform(data: any) {
    let Vasco: any = [];
    for (const index in data) {
      Array(data)
        .map((value) => {
          let array = value[index].name;
          Vasco = array + " " + Vasco;
        })
        .toString;
    }
    return Vasco
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
          <TitleLogo style={styles.mb}>Transport</TitleLogo>
        </ContentLogo>

        <ContentFilter>
          <ButtonFilter />
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
