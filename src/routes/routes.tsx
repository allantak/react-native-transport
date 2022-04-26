import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authStack";
import AppStack from "./appStack";

export default function MainStack() {
  const Auth = true;
  return (
    <NavigationContainer>
      { Auth? <AuthStack/> : <AppStack/>}
    </NavigationContainer>
  );
}
