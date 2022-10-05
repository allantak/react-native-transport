import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authStack";
import AppStack from "./appStack";
import { useAuth } from "../context/Auth";

export default function MainStack() {
  const { authData } = useAuth();

  return (
    <NavigationContainer>
      {authData ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
}
