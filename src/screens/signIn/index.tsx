import { useEffect, useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import { useAuth } from "../../context/Auth";
import { Container, Content, SpanError, styles } from "./styles";

export default function SignIn() {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [validationEmail, setValidationEmail] = useState<boolean>(false);
  const [validationLogin, setValidationLogin] = useState<boolean>(false);
  const [undefinedField, setUndefinedField] = useState<boolean>(false);
  const { signIn, authData } = useAuth();

  async function validateEmail(email: string) {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  async function handleLogin(email: string, password: string) {
    signIn(email, password).then(() => {
      authData !== undefined
        ? setValidationLogin(false)
        : setValidationLogin(true);
    });
  }

  async function handleButton() {
    if (inputEmail && inputPassword) {
      setUndefinedField(false);
      const valided = await validateEmail(inputEmail);
      if (valided) {
        handleLogin(inputEmail, inputPassword);
        setValidationEmail(false);
      } else {
        setValidationEmail(true);
      }
    } else {
      setUndefinedField(true);
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

        {validationEmail ? (
          <SpanError>Verifique se o email está corretamente</SpanError>
        ) : null}

        <Input
          title="Senha"
          value={inputPassword}
          onChangeText={(t) => setInputPassword(t)}
          placeholder="Password"
          style={styles.input}
        />

        {undefinedField ? <SpanError>Preencha os campos</SpanError> : null}

        {validationLogin ? (
          <SpanError>E-mail/Senha está incorreto. Tente novamente</SpanError>
        ) : null}

        <Button text="Entrar" onPress={handleButton} />
      </Content>
    </Container>
  );
}
