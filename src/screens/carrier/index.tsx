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
  const [inputBodyWork, setInputBodyWork] = useState<string>("");

  useEffect(() => {
    getCarriers().then((t) => {
      setData(t.data.getCarriers);
    });
  }, []);

  function searchCarrier(
    carrier: string,
    service: string,
    employee: string,
    nameBodyWorks: string
  ) {
    filterCarrier({
      variables: {
        carrier: carrier,
        service: service,
        company: employee,
        nameBodyWorks: nameBodyWorks,
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
    ></CardCarrier>
  );

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function handleFilter() {
    searchCarrier(inputCarrier, inputService, inputEmployee, inputBodyWork)
    setInputBodyWork("")
    setInputCarrier("")
    setInputEmployee("")
    setInputService("")
    setModalVisible(!isModalVisible);
  }
  return (
    <Container>
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
