import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
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
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [isLoading, setisLoading] = useState(true);
  const [signInUser] = useLazyQuery(apiService.signIn);

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

  async function signIn(email: string, password: string) {
    try {
      signInUser({
        variables: {
          email: email,
          password: password,
        },
      });

      setAuthData(authData);
      console.log("Sigin api");
      AsyncStorage.setItem("@AuthData", JSON.stringify(authData));
    } catch (errors) {
    } finally {
      setisLoading(false);
    }
  }

  async function signOut() {
    setAuthData(undefined);
  }

  return (
    <AuthContext.Provider value={{ authData, signIn, signOut, isLoading }}>
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
