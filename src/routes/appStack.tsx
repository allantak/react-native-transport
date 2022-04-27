import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/signIn";
import Carrier from "../screens/carrier";
import Freight from "../screens/freight";

const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Carrier" component={Carrier}></Stack.Screen>
            <Stack.Screen name="Freight" component={Freight}></Stack.Screen>
        </Stack.Navigator>
    );
}