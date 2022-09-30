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
  SpanErrorMB20,
  ContentDescription,
  TitleDescription,
  Description,
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
        navigation.navigate("SignIn");
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
      if (
        emailVerified == false &&
        passwordVerified == false &&
        lengthVerified == false
      ) {
        validateLogin(inputEmail, inputPassword);
      }
    } else {
      setUndefinedField(true);
    }
    setInputEmail("");
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
        <ContentDescription>
          <TitleDescription>Cadastre-se!</TitleDescription>
          <Description>Coloque suas informações de forma correta <br/> para concluir seu cadastro</Description>
        </ContentDescription>

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
            secureTextEntry
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
            secureTextEntry
          />
          {validationPassword ? (
            <SpanError>Confirmar está diferente da senha</SpanError>
          ) : null}
        </ContentInput>

        <ContentButton>
          {undefinedField ? <SpanErrorMB20>Preencha os campos</SpanErrorMB20> : null}

          {validationLogin ? <SpanErrorMB20>Email já existe</SpanErrorMB20> : null}

          <Button onPress={handleRegister} text="Registrar" />
        </ContentButton>
      </Content>
    </Container>
  );
}
