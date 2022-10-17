import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { AppStyles } from "../../styles/colors";
import {
  Container,
  TabItems,
  Bar,
  ContainerItems,
  styles,
  Touch,
  TitleCarrier,
  ContentModal,
  ContainerRow,
  Check,
  ContentOption,
  Text,
  SpanError,
  SpanWarn,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import ReactNativeModal from "react-native-modal";
import Input from "../input";
import Button from "../button";
import Option from "../optionList";
import { useMutation } from "@apollo/client";
import { apiService } from "../../services/API";
import { useAuth } from "../../context/Auth";
import Upload from "../buttonUpload";
import { ContentRow } from "../input/styles";
import * as ImagePicker from "expo-image-picker";
import { ActivityIndicator, Alert, View } from "react-native";
import { cloudinaryApi } from "../../services/Cloudinary";
import { stylesGlobal } from "../../styles/global";

export default function TabBar({ state }: BottomTabBarProps) {
  const navigation = useNavigation<any>();
  const [createFreight] = useMutation(apiService.createFreight);
  const [createCarrier] = useMutation(apiService.createCarrier);
  const { authData, refreash, refreshing } = useAuth();

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleType, setModalVisibleType] = useState(false);
  const [inputOrigin, setInputOrigin] = useState<string>();
  const [inputDestination, setInputDestination] = useState<string>();
  const [inputProduct, setInputProduct] = useState<string>();
  const [inputBodyWork, setInputBodyWork] = useState<string>();
  const [inputPrice, setInputPrice] = useState<string>();
  const [inputWeight, setInputWeight] = useState<string>();
  const [inputNote, setInputNote] = useState<string>();
  const [inputEmail, setInputEmail] = useState<string>();
  const [inputPhone, setInputPhone] = useState<string>();
  const [inputSpecies, setInputSpecies] = useState<string>();

  const [inputCarrier, setInputCarrier] = useState<string>();
  const [inputService, setInputService] = useState<string>("autônomo");
  const [inputCompany, setInputCompany] = useState<string>();

  const [error, setError] = useState<boolean>(false);
  const [errorCreate, setErrorCreate] = useState<boolean>(false);
  const [image, setImage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const goTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  const toggleModal = () => {
    setInputOrigin(undefined);
    setInputDestination(undefined);
    setInputProduct(undefined);
    setInputBodyWork(undefined);
    setInputPrice(undefined);
    setInputWeight(undefined);
    setInputNote(undefined);
    setInputEmail(undefined);
    setInputPhone(undefined);
    setInputCarrier(undefined);
    setInputCompany(undefined);
    setInputCarrier(undefined);
    setInputSpecies(undefined);
    setError(false);
    setModalVisible(!isModalVisible);
    setLoading(false);
    setImage(undefined);
  };

  const toggleModalType = () => {
    setModalVisibleType(!isModalVisibleType);
  };

  function handleOptions(name: string) {
    setInputService(name);
    toggleModalType();
  }

  function handleRegisterFreight() {
    if (
      inputOrigin !== undefined &&
      inputDestination !== undefined &&
      inputCompany !== undefined &&
      inputProduct !== undefined &&
      inputBodyWork !== undefined &&
      inputEmail !== undefined &&
      inputPhone !== undefined &&
      inputSpecies !== undefined
    ) {
      handleCreateFreight(
        authData?.id,
        inputOrigin,
        inputDestination,
        inputCompany,
        inputProduct,
        inputBodyWork,
        inputEmail,
        inputPhone,
        inputSpecies,
        inputPrice,
        inputWeight,
        inputNote
      );
      setError(false);
      toggleModal();
      refreshing(!refreash);
    } else {
      setError(true);
    }
  }

  function convertString(num: any) {
    if (num !== undefined) {
      return parseFloat(num);
    } else {
      return undefined;
    }
  }

  function handleCreateFreight(
    user_id: number | undefined,
    origin: string,
    destination: string,
    company: string,
    product: string,
    bodyWork: string,
    email: string,
    phone: string,
    species: string,
    price: string | undefined,
    weight: string | undefined,
    note: string | undefined
  ) {
    createFreight({
      variables: {
        user_id: user_id,
        origin: origin,
        destination: destination,
        company: company,
        product: product,
        nameBodyWork: bodyWork,
        email: email,
        phone: phone,
        species: species,
        price: convertString(price),
        weight: convertString(weight),
        note: note,
      },
    })
      .then(() => setErrorCreate(false))
      .catch(() => setErrorCreate(true));
  }

  function handleCreateCarrier(
    user_id: number | undefined,
    carrier: string,
    service: string,
    bodyWork: string,
    company: string | undefined,
    price: string | undefined,
    email: string,
    phone: string,
    img: string | undefined
  ) {
    createCarrier({
      variables: {
        user_id: user_id,
        carrier: carrier,
        service: service,
        nameBodyWork: bodyWork,
        company: company,
        price: convertString(price),
        email: email,
        phone: phone,
        img: img,
      },
    })
      .then(() => setErrorCreate(false))
      .catch(() => setErrorCreate(true));
  }

  function handleResgisterCarrier() {
    if (
      inputCarrier !== undefined &&
      inputBodyWork !== undefined &&
      inputEmail !== undefined &&
      inputPhone !== undefined
    ) {
      handleCreateCarrier(
        authData?.id,
        inputCarrier,
        inputService,
        inputBodyWork,
        inputCompany,
        inputPrice,
        inputEmail,
        inputPhone,
        image
      );
      setError(false);
      toggleModal();
      refreshing(!refreash);
      setImage("");
    } else {
      setError(true);
    }
  }

  async function camera() {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      aspect: [4, 4],
    });

    if (!result.cancelled) {
      const uri = result.uri;
      const type = "image/jpg";
      const name = "img";
      const source = { uri, type, name };
      await storeUpload(source);
    }
  }

  async function galery() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      aspect: [4, 4],
    });
    if (!result.cancelled) {
      const uri = result.uri;
      const type = "image/jpg";
      const name = "img";
      const source = { uri, type, name };
      await storeUpload(source);
    }
  }

  const UploadAlert = () =>
    Alert.alert(
      "Upload",
      "Escolha a forma para obter imagem",
      [
        {
          text: "Camera",
          onPress: () => camera(),
          style: "default",
        },
        {
          text: "Galeria",
          onPress: () => galery(),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    );

  async function storeUpload(photo: any) {
    setLoading(true);
    const objImg = await cloudinaryApi.storeImg(photo);
    if (objImg) {
      setImage(objImg.secure_url);
      setLoading(false);
    } else {
      Alert.alert("Error de conexão");
    }
  }

  return (
    <Container>
      <Bar>
        <ContainerItems>
          <TabItems
            onPress={() => goTo("Location")}
            style={state.index == 5 ? styles.styleIndex0 : styles.styleIndex1}
          >
            <Ionicons
              name="location-sharp"
              size={16}
              color={
                state.index == 5
                  ? `${AppStyles.colour.white}`
                  : `${AppStyles.colour.primary}`
              }
            />
          </TabItems>
          <TabItems
            onPress={() => goTo("Freight")}
            style={state.index == 0 ? styles.styleIndex0 : styles.styleIndex1}
          >
            <FontAwesome5
              name="truck-loading"
              size={16}
              color={
                state.index == 0
                  ? `${AppStyles.colour.white}`
                  : `${AppStyles.colour.primary}`
              }
            />
          </TabItems>
          {state.index >= 2 ? null : (
            <Touch onPress={toggleModal}>
              <AntDesign
                name="pluscircleo"
                size={35}
                color={AppStyles.colour.primary}
              />
            </Touch>
          )}

          {state.index == 0 ? (
            <ReactNativeModal
              style={styles.view}
              isVisible={isModalVisible}
              onBackdropPress={toggleModal}
            >
              <ContentModal showsVerticalScrollIndicator={false}>
                <ContainerRow>
                  <TitleCarrier style={styles.titleModal}>
                    Cadastro de carga
                  </TitleCarrier>
                  <AntDesign
                    onPress={toggleModal}
                    name="close"
                    size={24}
                    color={AppStyles.colour.font}
                  />
                </ContainerRow>

                <TitleCarrier style={styles.fs15}>
                  Informações da carga
                </TitleCarrier>
                <Input
                  style={styles.mb15}
                  value={inputOrigin}
                  onChangeText={(t) => setInputOrigin(t)}
                  title="Origem"
                  placeholder="Ex: Londrina"
                  required
                />

                <Input
                  style={styles.mb15}
                  title="Destino"
                  value={inputDestination}
                  onChangeText={(t) => setInputDestination(t)}
                  placeholder="Ex: Dourados"
                  required
                />

                <Input
                  style={styles.mb15}
                  title="Empresa"
                  value={inputCompany}
                  onChangeText={(t) => setInputCompany(t)}
                  placeholder="Nome da empresa"
                  required
                />

                <Input
                  style={styles.mb15}
                  title="Produto"
                  value={inputProduct}
                  onChangeText={(t) => setInputProduct(t)}
                  placeholder="Produto"
                  required
                />
                <Input
                  style={styles.mb15}
                  title="Carroceria"
                  value={inputBodyWork}
                  onChangeText={(t) => setInputBodyWork(t)}
                  placeholder="Tipo de carroceria"
                  required
                />

                <Input
                  style={styles.mb15}
                  title="Espécie"
                  value={inputSpecies}
                  onChangeText={(t) => setInputSpecies(t)}
                  placeholder="Ex: Caixas"
                  required
                />

                <ContainerRow style={styles.mb15}>
                  <Input
                    style={styles.width150}
                    title="Preço"
                    value={inputPrice}
                    onChangeText={(t) => setInputPrice(t)}
                    placeholder="Ex: 1000.00"
                    keyboardType="numeric"
                  />

                  <Input
                    style={styles.width150}
                    title="Peso"
                    value={inputWeight}
                    onChangeText={(t) => setInputWeight(t)}
                    placeholder="Peso da carga"
                    keyboardType="numeric"
                  />
                </ContainerRow>

                <Input
                  style={styles.mb15}
                  title="Observação"
                  value={inputNote}
                  onChangeText={(t) => setInputNote(t)}
                  placeholder="Observação..."
                />

                <TitleCarrier style={styles.fs15}>Contato</TitleCarrier>

                <Input
                  style={styles.mb15}
                  value={inputEmail}
                  onChangeText={(t) => setInputEmail(t)}
                  title="Email"
                  placeholder="Ex: transport@gmail.com"
                  required
                />
                <Input
                  style={styles.mb15}
                  title="Telefone"
                  value={inputPhone}
                  onChangeText={(t) => setInputPhone(t)}
                  placeholder="Ex: +99999999999"
                  required
                />

                {error ? (
                  <SpanError>Preencha os campos obrigatórios!</SpanError>
                ) : null}

                {errorCreate ? <SpanError>Ocorreu um erro</SpanError> : null}

                <Button
                  style={styles.mt}
                  text="Cadastro"
                  onPress={handleRegisterFreight}
                />
              </ContentModal>
            </ReactNativeModal>
          ) : (
            <ReactNativeModal
              style={styles.view}
              isVisible={isModalVisible}
              onBackdropPress={toggleModal}
            >
              <ContentModal showsVerticalScrollIndicator={false}>
                <ContainerRow>
                  <TitleCarrier style={styles.titleModal}>
                    Cadastro de veiculo
                  </TitleCarrier>
                  <AntDesign
                    onPress={toggleModal}
                    name="close"
                    size={24}
                    color={AppStyles.colour.font}
                  />
                </ContainerRow>

                <TitleCarrier style={styles.fs15}>
                  Informações do veiculo
                </TitleCarrier>

                <Input
                  style={styles.mb15}
                  value={inputCarrier}
                  onChangeText={(t) => setInputCarrier(t)}
                  title="Veículo"
                  placeholder="Nome do veículo"
                  required
                />

                <Option
                  style={styles.mb1010}
                  title="Tipo de serviço"
                  placeholder={inputService}
                  onPress={toggleModalType}
                />

                <ReactNativeModal
                  style={styles.viewOption}
                  isVisible={isModalVisibleType}
                  onBackdropPress={toggleModalType}
                >
                  <ContentOption>
                    <Check onPress={() => handleOptions("autônomo")}>
                      <Text>Autônomo</Text>
                    </Check>
                    <Check onPress={() => handleOptions("empresaria")}>
                      <Text>Empresaria</Text>
                    </Check>
                  </ContentOption>
                </ReactNativeModal>

                <Input
                  style={styles.mb15}
                  value={inputBodyWork}
                  onChangeText={(t) => setInputBodyWork(t)}
                  title="Carroceria"
                  placeholder="Ex: Rodotrem"
                  required
                />
                {inputService == "autônomo" ? null : (
                  <Input
                    style={styles.mb15}
                    title="Empresa"
                    value={inputCompany}
                    onChangeText={(t) => setInputCompany(t)}
                    placeholder="nome da empresa"
                  />
                )}

                <Input
                  style={styles.mb15}
                  title="Preço"
                  value={inputPrice}
                  onChangeText={(t) => setInputPrice(t)}
                  placeholder="Ex: 1000.00"
                  keyboardType="numeric"
                />
                <ContentRow>
                  <Upload
                    onPress={UploadAlert}
                    style={styles.mb15}
                    title="Imagem"
                  ></Upload>
                  {loading ? (
                    <ActivityIndicator
                      style={stylesGlobal.ml}
                      size={16}
                      color={"#FFAA3C"}
                    />
                  ) : null}
                </ContentRow>

                <TitleCarrier style={styles.fs15}>Contato</TitleCarrier>

                <Input
                  style={styles.mb15}
                  value={inputEmail}
                  onChangeText={(t) => setInputEmail(t)}
                  title="Email"
                  placeholder="Ex: transport@gmail.com"
                  required
                />
                <Input
                  style={styles.mb15}
                  title="Telefone"
                  value={inputPhone}
                  onChangeText={(t) => setInputPhone(t)}
                  placeholder="Ex: +99999999999"
                  required
                />

                {error ? (
                  <SpanError>Preencha os campos obrigatórios!</SpanError>
                ) : null}

                {loading ? (
                  <SpanWarn>
                    Espere o carregamento da imagem para concluir o cadastro!
                  </SpanWarn>
                ) : null}

                {errorCreate ? <SpanError>Ocorreu um erro</SpanError> : null}

                <Button
                  style={styles.mt}
                  text="Cadastro"
                  onPress={handleResgisterCarrier}
                  disabled={loading ? true : false}
                />
              </ContentModal>
            </ReactNativeModal>
          )}

          <TabItems
            onPress={() => goTo("Carrier")}
            style={state.index == 1 ? styles.styleIndex0 : styles.styleIndex1}
          >
            <FontAwesome5
              name="truck"
              size={16}
              color={
                state.index == 1
                  ? `${AppStyles.colour.white}`
                  : `${AppStyles.colour.primary}`
              }
            />
          </TabItems>

          <TabItems
            onPress={() => goTo("Profile")}
            style={state.index == 4 ? styles.styleIndex0 : styles.styleIndex1}
          >
            <FontAwesome5
              name="user-alt"
              size={16}
              color={
                state.index == 4
                  ? `${AppStyles.colour.white}`
                  : `${AppStyles.colour.primary}`
              }
            />
          </TabItems>
        </ContainerItems>
      </Bar>
    </Container>
  );
}
