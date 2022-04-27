import { AuthData } from "../context/Auth";

const signIn = (email: string, password: string): Promise<AuthData> => {
    return new Promise((resolve, reject) => {
    });
  };
  
  export const authService = {
    signIn,
  };