import { useEffect, useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import { useAuth } from "../../context/Auth";
import { Container, Content, SpanError, SpanSucess, styles } from "./styles";

export default function SignIn() {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [validationEmail, setValidationEmail] = useState<boolean>(false);
  const [validationLogin, setValidationLogin] = useState<boolean>(false);
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
    if (inputEmail !== undefined) {
      setValidationLogin(false);
      const valided = await validateEmail(inputEmail);
      if (valided) {
        signIn(inputEmail, inputPassword);
        setValidationEmail(false);
      } else {
        setValidationEmail(true);
      }
    } else {
      setValidationLogin(true);
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

        {validationEmail ? (
          <SpanError>Verifique se o email está corretamente</SpanError>
        ) : null}

        {validationLogin ? (
          <SpanError>E-mail/Senha está incorreto. Tente novamente</SpanError>
        ) : null}

        <Button text="Entrar" onPress={handleButton} />
      </Content>
    </Container>
  );
}
