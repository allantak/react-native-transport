import * as React from "react";
import Carrier from "../screens/carrier";
import Freight from "../screens/freight";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBar from "../components/TabBar";
import Detail from "../screens/detail";
import DetailCarrier from "../screens/detailCarrier";
import Profile from "../screens/profile";

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
      <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
      <Stack.Screen name="DetailCarrier" component={DetailCarrier}></Stack.Screen>
      <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
    </Stack.Navigator>
  );
}
