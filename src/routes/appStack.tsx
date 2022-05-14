import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/signIn";
import Carrier from "../screens/carrier";
import Freight from "../screens/freight";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/TabBar";

const Stack = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Stack.Screen name="Freight" component={Freight}></Stack.Screen>
      <Stack.Screen name="Carrier" component={Carrier}></Stack.Screen>
    </Stack.Navigator>
  );
}
