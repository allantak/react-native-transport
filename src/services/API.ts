import { ApolloClient, InMemoryCache } from "@apollo/react-hooks";
import { gql } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:3000/graphql"
});

const createUser = gql`
  mutation createUser($email: String!, $password: String!, $permission: String) {
    createUser(data: { email: $email, password: $password, permission: $permission}) {
      id,
      email,
      permission
    }
  }
`;

const signIn = gql`
  query authenticatedUser($email: String!, $password: String!){
    authenticatedUser(data: { email: $email, password: $password }){
      id,
      email
    }
  }

`;

const freights = gql`
  query getFreights{
    getFreights{
    id,
    origin,
    destination,
    product,
    company,
    bodyWorks{
      name
    },
    price,
    weight,
    species,
    email,
    phone
  }
  }

`;
const filterFreight = gql`
query searchFreight($origin: String!, $destination:String!, $product:String!, $nameBodyWork:String!){	
  searchFreight(data: { origin: $origin, destination: $destination, product:$product, nameBodyWork:$nameBodyWork }){
    id,
    origin,
    destination,
    product,
    bodyWorks{
      name
    },
  }
}`;

const carriers = gql`
query getCarriers{
  getCarriers{
    id,
    carrier,
    service,
    company,
    price,
    bodyWorks{
      name
    }
  }
}
`;


const filterCarrier = gql`
query searchCarrier($carrier: String, $service: String, $company: String, $nameBodyWorks: String){	
  searchCarrier(data: {carrier: $carrier, service: $service, company: $company, nameBodyWorks:$nameBodyWorks}){
    id,
    carrier,
    service,
    company,
    bodyWorks{
      name
    }
  }
}
`;



export const apiService = {
  client,
  createUser,
  signIn,
  freights,
  filterFreight,
  filterCarrier,
  carriers
}


