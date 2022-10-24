import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import ReactNativeModal from "react-native-modal";
import Logo from "../../../assets/Logo.png";
import Button from "../../components/button";
import ButtonFilter from "../../components/buttonFilter";
import CardCarrier from "../../components/card/carrier";
import Input from "../../components/input";
import Option from "../../components/optionList";
import { Check, ContentOption } from "../../components/TabBar/styles";
import { useAuth } from "../../context/Auth";
import { apiService } from "../../services/API";
import { ContainerRow } from "../profile/styles";
import { AntDesign } from "@expo/vector-icons";
import {
  Container,
  ContentHeaders,
  ContentFilter,
  ContentLogo,
  TitleCarrier,
  ContentModal,
  styles,
  Text,
  NameLogo,
} from "./styles";
import { AppStyles } from "../../styles/colors";

export default function Carrier() {
  const [getCarriers, { refetch }] = useLazyQuery(apiService.carriers);
  const [filterCarrier] = useLazyQuery(apiService.filterCarrier);
  const [data, setData] = useState<any[]>();
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputCarrier, setInputCarrier] = useState<string | undefined>(
    undefined
  );
  const [inputService, setInputService] = useState<string | undefined>(
    undefined
  );
  const [inputEmployee, setInputEmployee] = useState<string | undefined>(
    undefined
  );
  const [inputBodyWork, setInputBodyWork] = useState<string | undefined>(
    undefined
  );
  const [isModalVisibleType, setModalVisibleType] = useState(false);
  const { refreash } = useAuth();

  useEffect(() => {
    if (data == undefined) {
      listCarriers();
    } else {
      onRefresh();
    }
  }, [refreash]);

  function listCarriers() {
    getCarriers().then((t) => {
      setData(t.data.getCarriers);
    });
  }

  const onRefresh = () => {
    refetch().then((t) => setData(t.data.getCarriers));
  };

  function handleOptions(name: string) {
    setInputService(name);
    toggleModalType();
  }

  function searchCarrier(
    carrier: string | undefined,
    service: string | undefined,
    employee: string | undefined,
    nameBodyWorks: string | undefined
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
        setData(params.data.searchCarrier);
      })
      .catch(() => console.log("Error"));
  }

  const renderItem = ({ item }: any) => (
    <CardCarrier
      img={item.img}
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

  const toggleModalType = () => {
    setModalVisibleType(!isModalVisibleType);
  };

  function handleFilter() {
    searchCarrier(inputCarrier, inputService, inputEmployee, inputBodyWork);
    setModalVisible(!isModalVisible);
  }

  return (
    <Container style={styles.pb0}>
      <ContentHeaders>
        <ContentLogo onPress={onRefresh}>
          <Image source={Logo} style={styles.imagem} resizeMode="contain" />
          <NameLogo>Transport</NameLogo>
        </ContentLogo>

        <ContentFilter>
          <ButtonFilter onPress={toggleModal} />
          <ReactNativeModal
            style={styles.view}
            isVisible={isModalVisible}
            onBackdropPress={toggleModal}
          >
            <ContentModal>
              <ContainerRow>
                <TitleCarrier style={styles.titleModal}>
                  Filtragem de carga
                </TitleCarrier>
                <AntDesign
                  onPress={toggleModal}
                  name="close"
                  size={24}
                  color={AppStyles.colour.font}
                />
              </ContainerRow>
              <TitleCarrier style={styles.fs15}>Veículo</TitleCarrier>
              <Input
                style={styles.mb10}
                value={inputCarrier}
                onChangeText={(t) => setInputCarrier(t !== "" ? t : undefined)}
                title="Nome do veículo"
                placeholder="nome"
              />

              <Option
                style={styles.mb1010}
                title="Tipo de serviço"
                placeholder={
                  inputService == undefined ? "autônomo" : inputService
                }
                onPress={toggleModalType}
                without
              />
              <ReactNativeModal
                style={styles.viewOption}
                isVisible={isModalVisibleType}
                onBackdropPress={toggleModalType}
              >
                <ContentOption>
                  <Check onPress={() => handleOptions("autônomo")}>
                    <Text>autônomo</Text>
                  </Check>
                  <Check onPress={() => handleOptions("empresaria")}>
                    <Text>empresaria</Text>
                  </Check>
                </ContentOption>
              </ReactNativeModal>
              <Input
                style={styles.mb10}
                title="Empresa"
                value={inputEmployee}
                onChangeText={(t) => setInputEmployee(t !== "" ? t : undefined)}
                placeholder="empresa"
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

      <TitleCarrier style={styles.fs15}>Veículos</TitleCarrier>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
