import { useLazyQuery } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { apiService } from "../services/API";

export interface AuthData {
  id: number;
  email: string;
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
  refreshing: (value:boolean) => boolean;
  refreash: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [isLoading, setisLoading] = useState(true);
  const [signInUser] = useLazyQuery(apiService.signIn);
  const [refreash, setRefreash] = useState(false);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem("@AuthData");
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  }

  function refreshing(value:boolean){
    setRefreash(value)
    return refreash
  }

  async function signIn(email: string, password: string) {
    await signInUser({
      variables: {
        email: email,
        password: password,
      },
    })
      .then((signInData) => {
        setAuthData(signInData.data.authenticatedUser);
        AsyncStorage.setItem("@AuthData", JSON.stringify(signInData.data.authenticatedUser));
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setisLoading(false));
  }

  async function signOut() {
    AsyncStorage.removeItem("@AuthData")
    setAuthData(undefined);
  }

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut, isLoading, refreshing, refreash }}>
      {children}
    </AuthContext.Provider>
  );
};

//Hook custom
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
