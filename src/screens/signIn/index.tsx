import { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import { useAuth } from "../../context/Auth";
import { Container, Content, styles } from "./styles";

export default function SignIn() {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const { signIn } = useAuth();

  async function validateEmail(email: string) {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  async function handleButton() {
    if (inputEmail !== undefined && inputPassword.length !== 2) {
      const valided = await validateEmail(inputEmail);
      valided ? signIn(inputEmail, inputPassword) : Error;
    }
  }

  return (
    <Container>
      <Content>
        <Input
          title="Email"
          value={inputEmail}
          onChangeText={(t) => setInputEmail(t)}
          placeholder="E-mail"
          style={styles.input}
        />

        <Input
          title="Senha"
          value={inputPassword}
          onChangeText={(t) => setInputPassword(t)}
          placeholder="Password"
          style={styles.input}
        />

        <Button text="Entrar" onPress={handleButton} />
      </Content>
    </Container>
  );
}
