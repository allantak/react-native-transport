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
} from "./styles";
import Logo from "../../../assets/svg/logo";
import { useNavigation } from "@react-navigation/native";

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
          <Logo width={192} height={125}/>
          <NameLogo>Transport</NameLogo>
          <Description>
            Anuncie e procure cargas e veiculos para <br /> transporte
          </Description>
        </ContentLogo>

        <ContentInput>
          <Input
            title="Email"
            value={inputEmail}
            onChangeText={(t) => setInputEmail(t)}
            placeholder="E-mail"
            style={styles.marginBottom}
          />

          {validationEmail ? (
            <SpanError>Verifique se o email est?? corretamente</SpanError>
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
            <SpanError>E-mail/Senha est?? incorreto. Tente novamente</SpanError>
          ) : null}
        </ContentInput>

        <ContentButton>
          <Button
            text="Entrar"
            onPress={handleButton}
            style={styles.marginBottom}
          />
          <Button
            text="Cadastrar"
            onPress={() => navigation.navigate("SignOut")}
          />
        </ContentButton>
      </Content>
    </Container>
  );
}
