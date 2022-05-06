import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Back from "../../components/arrowBack";
import Button from "../../components/button";
import Input from "../../components/input";
import { apiService } from "../../services/API";
import {
  Container,
  Content,
  styles,
  SpanError,
  ContentButton,
  ContentHeaders,
  ContentInput,
} from "./styles";

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
  const navigation = useNavigation<any>();

 

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
        navigation.navigate("SignOut");
      })
      .catch(() => {
        setValidationLogin(true);
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
      console.log("email", emailVerified);
      console.log("password", passwordVerified);
      console.log("len", lengthVerified);
      if (
        emailVerified == false &&
        passwordVerified == false &&
        lengthVerified == false
      ) {
        console.log("entrou");
        validateLogin(inputEmail, inputPassword);
      }
    } else {
      setUndefinedField(true);
    }

    setInputPassword("");
    setInputRePassword("");
  }

  function navigationBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Content>
        <ContentHeaders>
          <Back onPress={navigationBack} />
        </ContentHeaders>

        <ContentInput>
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

          {validationlength ? (
            <SpanError>No minimo 6 caracters</SpanError>
          ) : null}

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
        </ContentInput>

        <ContentButton>
          {undefinedField ? <SpanError>Preencha os campos</SpanError> : null}

          {validationLogin ? <SpanError>Email já existe</SpanError> : null}

          <Button onPress={handleRegister} text="Registrar" />
        </ContentButton>
      </Content>
    </Container>
  );
}
