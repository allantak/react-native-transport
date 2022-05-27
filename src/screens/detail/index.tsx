import { useNavigation } from "@react-navigation/native";
import Back from "../../components/arrowBack";
import Info from "../../components/info";
import { Container, ContentHeaders } from "./styles";

export default function Detail(){
    const navigation = useNavigation<any>();
    function navigationBack() {
        navigation.goBack();
      }
    return(
        <Container>
            <ContentHeaders>
            <Back onPress={navigationBack} />
            </ContentHeaders>
            <Info title="Vasco" text="Ronaldo" textTitle/>
        </Container>
    )
} 