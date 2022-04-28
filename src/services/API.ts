import { ApolloClient, InMemoryCache } from "@apollo/react-hooks";
import { gql } from '@apollo/client';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:3000/graphql"
});

const createUser = gql`
  mutation createUser($email: String!, $password: String!, $permission: String!) {
    createUser(data: { email: $email, password: $password, permission: $permission}) {
      id,
      email,
      permission
    }
  }
`;

export const apiService = {
    client,
    createUser
}


