import MainStack from "./src/routes/routes";
import { AuthProvider } from "./src/context/Auth";
import { ApolloProvider } from "@apollo/react-hooks";
import { apiService } from "./src/services/API";

export default function App() {
  return (
    <ApolloProvider client={apiService.client}>
      <AuthProvider>
        <MainStack />
      </AuthProvider>
    </ApolloProvider>
  );
}
