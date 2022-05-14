import Icon from "../../../assets/svg/logoWithoutCircle";
import ButtonFilter from "../../components/buttonFilter";
import CardCarrier from "../../components/card/freight";
import {
  Container,
  ContentHeaders,
  TitleLogo,
  ContentFilter,
  ContentLogo,
  TitleCarrier,
  styles
} from "./styles";

export default function Carrier() {
  return (
    <Container>
      <ContentHeaders>
        <ContentLogo>
          <Icon width={59} height={59}/>
          <TitleLogo style={styles.mb}>Transport</TitleLogo>
        </ContentLogo>

        <ContentFilter>
          <ButtonFilter />
        </ContentFilter>
      </ContentHeaders>

      <TitleCarrier>Cargas</TitleCarrier>

      <CardCarrier
        origin="Bastos"
        destination="Tupã"
        bodyWork="Vapo"
        company="Ronaldo"
        price={30}
        product="Vapo"
      />
    </Container>
  );
}
