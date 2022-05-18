import Icon from "../../../assets/svg/logoWithoutCircle";
import ButtonFilter from "../../components/buttonFilter";
import CardCarrier from "../../components/card/carrier";
import {
  Container,
  ContentHeaders,
  TitleLogo,
  ContentFilter,
  ContentLogo,
  TitleCarrier,
  styles,
} from "./styles";

export default function Carrier() {
  return (
    <Container>
      <ContentHeaders>
        <ContentLogo>
          <Icon width={59} height={59} />
          <TitleLogo style={styles.mb && styles.ml}>Transport</TitleLogo>
        </ContentLogo>

        <ContentFilter>
          <ButtonFilter />
        </ContentFilter>
      </ContentHeaders>

      <TitleCarrier>Cargas</TitleCarrier>

      <CardCarrier
        carrier="Vasco"
        service="Empresarial"
        price={200.0}
        company="Vasco"
      ></CardCarrier>
    </Container>
  );
}
