import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react"

export interface AuthData{
    email: string,
    token: string,
}

interface AuthContextData{ 
    authData?: AuthData,
    signIn: (email: string, password: string) => Promise<void>,
    signOut: () => Promise<void>,
    isLoading: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [authData, setAuthData] = useState<AuthData>();
    const [isLoading, setisLoading] = useState(true);
  
    useEffect(() => {
      loadStorageData();
    }, []);
  
    async function loadStorageData(): Promise<void> {
      try {
        const authDataSerialized = await AsyncStorage.getItem('@AuthData');
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
        setAuthData(authData);
    }
    async function signOut() {
      setAuthData(undefined);
    }
  
    return (
      <AuthContext.Provider value={{authData, signIn, signOut, isLoading}}>
        {children}
      </AuthContext.Provider>
    );
  };

  export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
  }
