import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import ReactNativeModal from "react-native-modal";
import Icon from "../../../assets/svg/logoWithoutCircle";
import Button from "../../components/button";
import ButtonFilter from "../../components/buttonFilter";
import CardCarrier from "../../components/card/carrier";
import Input from "../../components/input";
import { apiService } from "../../services/API";
import {
  Container,
  ContentHeaders,
  TitleLogo,
  ContentFilter,
  ContentLogo,
  TitleCarrier,
  ContentModal,
  styles,
} from "./styles";

export default function Carrier() {
  const [getCarriers] = useLazyQuery(apiService.carriers);
  const [filterCarrier] = useLazyQuery(apiService.filterCarrier);
  const [data, setData] = useState<any[]>();
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputCarrier, setInputCarrier] = useState<string>("");
  const [inputService, setInputService] = useState<string>("");
  const [inputEmployee, setInputEmployee] = useState<string>("");

  useEffect(() => {
    listCarriers()
  }, []);

  function listCarriers(){
    getCarriers().then((t) => {
      setData(t.data.getCarriers);
    });
  }

  function searchCarrier(
    carrier: string,
    service: string,
    employee: string
  ) {
    filterCarrier({
      variables: {
        carrier: carrier,
        service: service,
        company: employee
      },
    })
      .then((params) => {
        setData(params.data.searchCarrier)
      })
      .catch(() => console.log("Errado"));
  }

  const renderItem = ({ item }: any) => (
    <CardCarrier
      carrier={item.carrier}
      service={item.service}
      price={item.price}
      company={item.company}
      item={item}
    ></CardCarrier>
  );

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function handleFilter() {
    searchCarrier(inputCarrier, inputService, inputEmployee)
    setInputCarrier("")
    setInputEmployee("")
    setInputService("")
    setModalVisible(!isModalVisible);
  }

  
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
              <TitleCarrier style={styles.fs15}>Veículo</TitleCarrier>
              <Input
                style={styles.mb10}
                value={inputCarrier}
                onChangeText={(t) => setInputCarrier(t)}
                title="Origem"
                placeholder="Origem"
              />
              <Input
                style={styles.mb10}
                title="Destino"
                value={inputService}
                onChangeText={(t) => setInputService(t)}
                placeholder="Destino"
              />
              <Input
                style={styles.mb10}
                title="Produto"
                value={inputEmployee}
                onChangeText={(t) => setInputEmployee(t)}
                placeholder="Produto"
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
