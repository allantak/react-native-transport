import MainStack from "./src/routes/routes";
import { AuthProvider } from "./src/context/Auth";
import { ApolloProvider } from "@apollo/react-hooks";
import { apiService } from "./src/services/API";
import GlobalStyles from "./src/styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

export default function App() {
  return (
    <ApolloProvider client={apiService.client}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <MainStack />
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}
