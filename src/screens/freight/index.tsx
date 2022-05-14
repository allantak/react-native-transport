import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
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

export default function Freight() {
    const [getFreights] = useLazyQuery(apiService.freights);
    useEffect(() => {
        getFreights().then((t) => console.log(t.data));
      }, []);
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

      <CardFreight
        origin="Bastos"
        destination="Tupã"
        bodyWork="Vapo"
        price={30}
        product="Vapo"
      />

      <CardFreight
        origin="Bastos"
        destination="Tupã"
        bodyWork="Vapo"
        company="Vasco"
        price={undefined}
        product="Vapo"
      />
    </Container>
  );
}
