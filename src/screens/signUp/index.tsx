import { useMutation } from "@apollo/client";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import { apiService } from "../../services/API";
import { Container, Content, styles, SpanError } from "./styles";

export default function SignUp() {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputRePassword, setInputRePassword] = useState<string>("");
  const [undefinedField, setUndefinedField] = useState<boolean>(false);
  const [validationEmail, setValidationEmail] = useState<boolean>(false);
  const [validationPassword, setValidationPassword] = useState<boolean>(false);
  const [validationlength, setValidationlength] = useState<boolean>(false);
  const [validationLogin, setValidationLogin] = useState<boolean>(false);
  const [createUser] = useMutation(apiService.createUser);

  async function validateEmail(email: string) {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(email)) {
      setValidationEmail(false);
      return false;
    } else {
      setValidationEmail(true);
      return true;
    }
  }

  async function validateLogin(email: string, password: string) {
    createUser({
      variables: {
        email: email,
        password: password,
      },
    })
      .then(() => {
        setValidationLogin(false);
        console.log("Deu certo login");
      })
      .catch(() => {
        setValidationLogin(true);
        console.log("Deu errado login");
      });
  }

  async function confirmPassword() {
    if (inputPassword == inputRePassword) {
      setValidationPassword(false);
      return false;
    } else {
      setValidationPassword(true);
      return true;
    }
  }

  async function confirmLength() {
    if (inputPassword.length >= 6) {
      setValidationlength(false);
      return false;
    } else {
      setValidationlength(true);
      return true;
    }
  }

  async function handleRegister() {
    if (inputEmail && inputPassword && inputRePassword) {
      setUndefinedField(false);
      const emailVerified = await validateEmail(inputEmail);
      const passwordVerified = await confirmPassword();
      const lengthVerified = await confirmLength();
     console.log("email",emailVerified)
     console.log("password",passwordVerified)
     console.log("len",lengthVerified)
      if (emailVerified==false && passwordVerified==false && lengthVerified==false) {
        console.log("entrou")
        validateLogin(inputEmail, inputPassword);
      }
    } else {
      setUndefinedField(true);
    }

    setInputPassword("");
    setInputRePassword("");
  }

  return (
    <Container>
      <Content>
        <Input
          title="Email"
          value={inputEmail}
          onChangeText={(t) => setInputEmail(t)}
          placeholder="E-mail"
          style={styles.marginBottom}
        />

        {validationEmail ? (
          <SpanError>Verifique se o email está corretamente</SpanError>
        ) : null}

        <Input
          title="Senha"
          value={inputPassword}
          onChangeText={(t) => setInputPassword(t)}
          placeholder="Senha"
          style={styles.marginBottom}
        />

        {validationlength ? <SpanError>No minimo 6 caracters</SpanError> : null}

        <Input
          title="Confirmar"
          value={inputRePassword}
          onChangeText={(t) => setInputRePassword(t)}
          placeholder="Confirmar sua senha"
          style={styles.marginBottom}
        />
        {validationPassword ? (
          <SpanError>Confirmar está diferente da senha</SpanError>
        ) : null}

        {undefinedField ? <SpanError>Preencha os campos</SpanError> : null}

        {validationLogin ? <SpanError>Email já existe</SpanError> : null}

        <Button onPress={handleRegister} text="Registrar" />
      </Content>
    </Container>
  );
}
