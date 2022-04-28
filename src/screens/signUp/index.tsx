import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { apiService } from "../../services/API";
import { Button, Container, Content, Input } from "./styles";

export default function SignUp() {
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputPermission, setInputPermission] = useState<string>("");

  const [createUser, { data }] = useMutation(apiService.createUser);

  useEffect(() => {
    if (data) {
    }
  }, [data]);

  async function handleRegister(e: React.MouseEvent) {
    e.preventDefault();

    createUser({
      variables: {
        email: inputEmail,
        password: inputPassword,
        permission: inputPermission,
      },
    });
    setInputEmail("");
    setInputPassword("");
    setInputPermission("");
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

          <Input
            value={inputPermission}
            onChange={(e) => setInputPermission(e.target.value)}
            placeholder="Permission"
          />

          <Button onClick={handleRegister}>
            <span>Register</span>
          </Button>
        </form>
      </Content>
    </Container>
  );
}
