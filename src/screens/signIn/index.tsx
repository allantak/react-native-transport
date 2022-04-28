import { useState } from "react";
import { useAuth } from "../../context/Auth";
import { Button, Container, Content, Input } from "./styles";

export default function SignIn() {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const { signIn } = useAuth();

  async function handleButton(e: React.MouseEvent ) {
    e.preventDefault();
    signIn(inputEmail, inputPassword)
    console.log('test handle')
  }

  return (
    <Container>
      <Content>
        <form>
          <Input
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder="E-mail"
          />

          <Input
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="Password"
          />

          <Button onClick={handleButton}>
            <span>Entrar</span>
          </Button>
        </form>
      </Content>
    </Container>
  );
}
