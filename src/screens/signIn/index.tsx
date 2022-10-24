import { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import { useAuth } from "../../context/Auth";
import {
  Container,
  Content,
  SpanError,
  styles,
  ContentLogo,
  Description,
  NameLogo,
  ContentInput,
  ContentButton,
  ContentDescription,
  TitleDescription,
  TextButton,
  BeforeButton,
  Register,
} from "./styles";
import Logo from "../../../assets/Logo.png";
import { useNavigation } from "@react-navigation/native";
import { Image, Text } from "react-native";
import { AppStyles } from "../../styles/colors";

export default function SignIn() {
  const [inputEmail, setInputEmail] = useState<string>();
  const [inputPassword, setInputPassword] = useState<string>();
  const [validationEmail, setValidationEmail] = useState<boolean>(false);
  const [validationLogin, setValidationLogin] = useState<boolean>(false);
  const [undefinedField, setUndefinedField] = useState<boolean>(false);
  const { signIn, authData } = useAuth();
  const navigation = useNavigation<any>();

  async function validateEmail(email: string) {
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  async function handleLogin(email: string, password: string) {
    await signIn(email, password).then(() => {
      authData == undefined
        ? setValidationLogin(true)
        : setValidationLogin(false);
    });
  }

  async function handleButton() {
    if (inputEmail && inputPassword) {
      setUndefinedField(false);
      const valided = await validateEmail(inputEmail);
      if (valided) {
        handleLogin(inputEmail, inputPassword);
        setValidationEmail(false);
        setInputEmail(undefined);
        setInputPassword(undefined);
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
        <ContentLogo>
          <Image source={Logo} style={styles.imagem} resizeMode="contain" />
          <NameLogo>Transport</NameLogo>
        </ContentLogo>
        <ContentDescription>
          <TitleDescription>Olá, Bem vindo!</TitleDescription>
          <Description>
            Anuncie e procure serviços para o transporte de cargas
          </Description>
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
            placeholder="Password"
            style={styles.marginBottom}
            secureTextEntry
          />

          {undefinedField ? <SpanError>Preencha os campos</SpanError> : null}

          {validationLogin ? (
            <SpanError>E-mail/Senha está incorreto. Tente novamente</SpanError>
          ) : null}
        </ContentInput>

        <ContentButton>
          <Button
            text="Entrar"
            onPress={handleButton}
            style={styles.marginBottom}
          />
        </ContentButton>
        <Register>
          <BeforeButton>Não possui Cadastro?</BeforeButton>
          <TextButton onPress={() => navigation.navigate("SignOut")}>
            <Text style={{ color: AppStyles.colour.primary }}>Cadastre-se</Text>
          </TextButton>
        </Register>
      </Content>
    </Container>
  );
}
