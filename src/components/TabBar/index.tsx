import { FontAwesome5  } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import {Container, TabItems} from "./styles";

export default function TabBar({state}:BottomTabBarProps){
    const navigation = useNavigation<any>()
    const goTo = (screenName:string) =>{
        navigation.navigate(screenName);
    }
    return(
        <Container>
            <TabItems onPress={()=>goTo('Home')}>
                <FontAwesome5 name="truck-loading" size={24} color={ state.index == 0? "black" : "black"} />
            </TabItems>
            <TabItems onPress={()=>goTo('Perfil')}>
                <FontAwesome5 name="truck" size={24} color={ state.index == 0? "black" : "black"}  />
            </TabItems>
        </Container>
    );
}
