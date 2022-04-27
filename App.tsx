import MainStack from "./src/routes/routes";
import { AuthProvider } from "./src/context/Auth";

export default function App() {
  return (
    <AuthProvider>
      <MainStack />
    </AuthProvider>
  );
}
