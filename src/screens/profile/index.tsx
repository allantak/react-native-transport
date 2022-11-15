import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../../../assets/Logo.png";
import ButtonFilter from "../../components/buttonFilter";
import CardFreight from "../../components/card/freight";
import { ContentRow } from "../../components/input/styles";
import { useAuth } from "../../context/Auth";
import { apiService } from "../../services/API";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  ContentHeaders,
  NameLogo,
  ContentFilter,
  ContentLogo,
  TitleCarrier,
  styles,
  Title,
  TextTitle,
  ContainerRow,
  Width,
  ContentModal,
  Delete,
} from "./styles";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { AppStyles } from "../../styles/colors";
import CardCarrier from "../../components/card/carrier";
import { useFocusEffect } from "@react-navigation/native";
import ReactNativeModal from "react-native-modal";
import Option from "../../components/optionList";
import Input from "../../components/input";
import {
  Check,
  ContentOption,
  SpanError,
  SpanWarn,
  Text,
} from "../../components/TabBar/styles";
import Upload from "../../components/buttonUpload";
import { stylesGlobal } from "../../styles/global";
import Button from "../../components/button";
import { cloudinaryApi } from "../../services/Cloudinary";
import { AntDesign } from "@expo/vector-icons";

export default function Profile() {
  const [data, setData] = useState<any[]>();
  const [dataCarrier, setDataCarrier] = useState<any[]>();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const { signOut, authData, refreshing, refreash } = useAuth();
  const [index, setIndex] = useState<number>(0);
  const [userCarrier, { refetch }] = useLazyQuery(apiService.userCarrier);
  const [userFreight, { refetch: refetch2 }] = useLazyQuery(
    apiService.userFreight
  );
  const [updateCarrier] = useMutation(apiService.updateCarrier);
  const [updateFreight] = useMutation(apiService.updateFreight);

  const [deleteFreight] = useMutation(apiService.deleteFreight);
  const [deleteCarrier] = useMutation(apiService.deleteCarrier);

  const [isModalVisibleType, setModalVisibleType] = useState(false);
  const [inputOrigin, setInputOrigin] = useState<string | undefined>(undefined);
  const [inputDestination, setInputDestination] = useState<string>();
  const [inputProduct, setInputProduct] = useState<string>();
  const [inputBodyWork, setInputBodyWork] = useState<string>();
  const [inputPrice, setInputPrice] = useState<string>();
  const [inputWeight, setInputWeight] = useState<string>();
  const [inputNote, setInputNote] = useState<string>();
  const [inputEmail, setInputEmail] = useState<string>();
  const [inputPhone, setInputPhone] = useState<string>();
  const [inputSpecies, setInputSpecies] = useState<string>();

  const [inputIdCarrier, setInputIdCarrier] = useState<number>();
  const [inputIdFreight, setInputIdFreight] = useState<number>();
  const [inputIdBodyWork, setInputIdBodyWork] = useState<number>();
  const [inputCarrier, setInputCarrier] = useState<string>();
  const [inputService, setInputService] = useState<string>("autônomo");
  const [inputCompany, setInputCompany] = useState<string | undefined>(
    undefined
  );
  const [image, setImage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorCreate, setErrorCreate] = useState<boolean>(false);
  const [errorDelete, setErrorDelete] = useState<boolean>(false);

  const handleClick = (item: any) => {
    setInputIdBodyWork(item.bodyWorks[0].id);
    setInputBodyWork(transform(item.bodyWorks));
    setInputEmail(item.email);
    setInputPhone(item.phone);
    item.price ? setInputPrice(item.price.toString()) : null;
    setInputCompany(item.company);

    setInputIdCarrier(item.id);
    setInputCarrier(item.carrier);

    setImage(item.img);

    setInputService(item.service);

    toggleModal();
  };

  const handleClickFreight = (item: any) => {
    setInputIdBodyWork(item.bodyWorks[0].id);
    setInputBodyWork(transform(item.bodyWorks));
    setInputEmail(item.email);
    setInputPhone(item.phone);
    item.price !== null
      ? setInputPrice(item.price.toString())
      : setInputPrice(undefined);
    setInputCompany(item.company);

    setInputIdFreight(item.id);
    setInputOrigin(item.origin);
    setInputDestination(item.destination);
    setInputProduct(item.product);
    item.weight !== null
      ? setInputWeight(item.weight.toString())
      : setInputWeight(undefined);
    setInputNote(item.note);
    setInputSpecies(item.species);
    toggleModal();
  };

  useFocusEffect(
    React.useCallback(() => {
      if (index === 0) {
        myFreight();
        onRefresh();
      } else {
        myCarrier();
        onRefreshCarrier();
      }
    }, [index, refreash])
  );

  async function myFreight() {
    userFreight({
      variables: {
        id: authData?.id,
      },
    })
      .then((params) => {
        setData(params.data.userFreight);
      })
      .catch(() => console.log("Error"));
  }

  async function myCarrier() {
    userCarrier({
      variables: {
        id: authData?.id,
      },
    })
      .then((params) => {
        setDataCarrier(params.data.userCarrier);
      })
      .catch(() => console.log("Error"));
  }

  const onRefresh = () => {
    refetch2().then((params) => {
      setData(params.data.userFreight);
    });
  };

  const onRefreshCarrier = () => {
    refetch().then((params) => {
      setDataCarrier(params.data.userCarrier);
    });
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModalType = () => {
    setModalVisibleType(!isModalVisibleType);
  };
  function toggleLogout() {
    signOut();
  }

  function handleOptions(name: string) {
    setInputService(name);
    toggleModalType();
  }

  function convertString(num: any) {
    if (num !== undefined) {
      return parseFloat(num);
    } else {
      return undefined;
    }
  }

  function handleRegisterFreight() {
    if (
      inputOrigin !== undefined &&
      inputOrigin !== "" &&
      inputDestination !== undefined &&
      inputDestination !== "" &&
      inputCompany !== undefined &&
      inputCompany !== "" &&
      inputProduct !== undefined &&
      inputProduct !== "" &&
      inputBodyWork !== undefined &&
      inputBodyWork !== "" &&
      inputEmail !== undefined &&
      inputEmail !== "" &&
      inputPhone !== undefined &&
      inputPhone !== "" &&
      inputSpecies !== undefined &&
      inputSpecies !== ""
    ) {
      handleUpdateFreight(
        inputIdFreight,
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
        inputIdBodyWork,
        inputNote
      );
      setError(false);
      toggleModal();
      refreshing(!refreash);
    } else {
      setError(true);
    }
  }

  function handleUpdateFreight(
    id: number | undefined,
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
    bodyWork_id: number | undefined,
    note: string | undefined
  ) {
    updateFreight({
      variables: {
        id: id,
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
        bodyWork_id: bodyWork_id,
        note: note,
      },
    })
      .then((t) => {
        setErrorCreate(false), console.log("PEGOU PORRA PEGOU", t);
      })
      .catch((t) => {
        setErrorCreate(true), console.log(t);
      });
  }

  function handleUpdateCarrier(
    id: number | undefined,
    carrier: string,
    service: string,
    bodyWork: string,
    company: string | undefined,
    price: string | undefined,
    email: string,
    phone: string,
    bodyWork_id: number | undefined,
    img: string | undefined
  ) {
    updateCarrier({
      variables: {
        id: id,
        carrier: carrier,
        service: service,
        nameBodyWork: bodyWork,
        company: company,
        price: convertString(price),
        email: email,
        phone: phone,
        bodyWork_id: bodyWork_id,
        img: img,
      },
    })
      .then(() => {
        setErrorCreate(false);
      })
      .catch((t) => {
        setErrorCreate(true), console.log(t);
      });
  }

  function handleResgisterCarrier() {
    if (
      inputCarrier !== undefined &&
      inputCarrier !== "" &&
      inputBodyWork !== undefined &&
      inputBodyWork !== "" &&
      inputEmail !== undefined &&
      inputEmail !== "" &&
      inputPhone !== undefined &&
      inputPhone !== ""
    ) {
      handleUpdateCarrier(
        inputIdCarrier,
        inputCarrier,
        inputService,
        inputBodyWork,
        inputCompany,
        inputPrice,
        inputEmail,
        inputPhone,
        inputIdBodyWork,
        image
      );
      setError(false);
      toggleModal();
      refreshing(!refreash);
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

  const UploadAlert = () => {
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
  };

  const DeleteAlert = (params?: string) => {
    Alert.alert(
      "Excluir",
      "Realmente deseja excluir publicação?",
      [
        {
          text: "Sim",
          onPress: () =>
            params == "freight" ? deleteFreights() : deleteCarriers(),
          style: "default",
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
  };

  const deleteFreights = () => {
    setErrorDelete(true);
    deleteFreight({
      variables: {
        id: inputIdFreight,
        user_id: authData?.id,
      },
    }).catch((err) => {
      setErrorDelete(false);
      toggleModal();
      refreshing(!refreash);
    });
  };

  const deleteCarriers = () => {
    setErrorDelete(true);
    deleteCarrier({
      variables: {
        id: inputIdCarrier,
        user_id: authData?.id,
      },
    }).catch((err) => {
      setErrorDelete(false);
      toggleModal();
      refreshing(!refreash);
    });
  };

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
      company={item.company}
      profile
      returnItem={handleClickFreight}
    />
  );

  const renderItemCarrier = ({ item }: any) => (
    <CardCarrier
      img={item.img}
      carrier={item.carrier}
      service={item.service}
      price={item.price}
      company={item.company}
      item={item}
      profile
      returnItem={handleClick}
    ></CardCarrier>
  );

  return (
    <Container style={styles.pb0}>
      <ContentHeaders>
        <ContentLogo onPress={index === 0 ? onRefresh : onRefreshCarrier}>
          <Image source={Logo} style={styles.imagem} resizeMode="contain" />
          <NameLogo>Transport</NameLogo>
        </ContentLogo>

        <ContentFilter>
          <ButtonFilter onPress={toggleLogout} logout />
        </ContentFilter>
      </ContentHeaders>

      <View>
        <TitleCarrier style={styles.mb20}>Perfil</TitleCarrier>

        <View style={styles.mb20}>
          <Title>Email</Title>
          <TextTitle>{authData?.email}</TextTitle>
        </View>
      </View>

      <ContainerRow style={styles.mb20}>
        <Width>
          <TitleCarrier styles={styles.mb20}> {index === 0 ? "Minhas cargas" : "Meus veículos"}</TitleCarrier>
        </Width>

        <Width>
          <SegmentedControl
            values={["Carga", "Veículo"]}
            appearance={"light"}
            fontStyle={{ color: AppStyles.colour.font }}
            onChange={(event) => {
              setIndex(event.nativeEvent.selectedSegmentIndex);
            }}
          />
        </Width>
      </ContainerRow>

      {index === 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          refreshing={isFetching}
          progressViewOffset={100}
        />
      ) : (
        <FlatList
          data={dataCarrier}
          renderItem={renderItemCarrier}
          keyExtractor={(itemCarrier) => itemCarrier.id}
        />
      )}

      {index === 0 ? (
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

            {errorDelete ? (
              <ContentRow>
                <SpanWarn>Deletando a carga, espere um momento!</SpanWarn>
                <ActivityIndicator
                  style={stylesGlobal.ml}
                  size={16}
                  color={"#FFAA3C"}
                />
              </ContentRow>
            ) : null}

            <ContainerRow>
              <View style={styles.width80}>
                <Button
                  style={styles.mt}
                  text="Cadastro"
                  onPress={handleRegisterFreight}
                />
              </View>

              <View style={styles.width20}>
                <Delete onPress={() => DeleteAlert("freight")}>
                  <MaterialIcons name="delete" size={20} color="white" />
                </Delete>
              </View>
            </ContainerRow>
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
              <SpanWarn>Espere para concluir o cadastro!</SpanWarn>
            ) : null}

            {errorCreate ? <SpanError>Ocorreu um erro</SpanError> : null}

            {errorDelete ? (
              <ContentRow>
                <SpanWarn>Deletando o veículos, espere um momento!</SpanWarn>
                <ActivityIndicator
                  style={stylesGlobal.ml}
                  size={16}
                  color={"#FFAA3C"}
                />
              </ContentRow>
            ) : null}

            <ContainerRow>
              <View style={styles.width80}>
                <Button
                  style={styles.mt}
                  text="Cadastro"
                  onPress={handleResgisterCarrier}
                  disabled={loading ? true : false}
                />
              </View>

              <View style={styles.width20}>
                <Delete onPress={() => DeleteAlert("carrier")}>
                  <MaterialIcons name="delete" size={20} color="white" />
                </Delete>
              </View>
            </ContainerRow>
          </ContentModal>
        </ReactNativeModal>
      )}
    </Container>
  );
}
