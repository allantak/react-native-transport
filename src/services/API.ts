import { ApolloClient, InMemoryCache } from "@apollo/react-hooks";
import { gql } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `http://10.0.0.72:3000/graphql`
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
      id,
      name
    },
    price,
    weight,
    species,
    email,
    phone,
    note
  }
  }

`;

const filterFreight = gql`
query searchFreight($origin: String, $destination:String, $product:String, $nameBodyWork:String){	
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

const userFreight = gql`
  query userFreight($id: Float!) {
    userFreight(id: $id) {
      id,
      origin,
      destination,
      product,
      company,
      bodyWorks{
        id,
        name
      },
      price,
      weight,
      species,
      email,
      phone,
      note
    }
  }
`

const userCarrier = gql`
  query userCarrier($id: Float!) {
    userCarrier(id: $id) {
      id,
      carrier,
      service,
      company,
      price,
      bodyWorks{
        id,
        name
      },
      email,
      phone,
      img
    }
  }
  `

const createFreight = gql`
  mutation createFreight($user_id: Float!, $origin: String! $destination: String!, $company:String!, $nameBodyWork: String!, $species:String!,$product:String!,$weight: Float, $email:String!, $phone:String!, $note:String, $price:Float){
  createFreight(data:{user_id: $user_id, origin: $origin, destination: $destination, company:$company,nameBodyWork: $nameBodyWork, species: $species,product: $product,weight: $weight, email: $email, phone:$phone, note:$note, price:$price}){
    id,
    origin,
    destination,
    company,
    bodyWorks{
      id,
      name
    },
    product,
    weight,
    species,
    email,
    price,
    phone,
    note  
  }
  }
`;

const updateFreight = gql`
  mutation updateFreight($id: Float!, $origin: String!
   $destination: String!, $company:String!, 
  $nameBodyWork: String!, $species:String!,
  $product:String!,$weight: Float, $email:String!, 
  $phone:String!,
   $note:String, $bodyWork_id: Float!, $price:Float){
    updateFreight(data:{id: $id, origin: $origin, destination: $destination, company:$company,
    nameBodyWork: $nameBodyWork, species: $species,product: $product,weight: $weight, 
    email: $email, phone:$phone, note:$note, bodyWork_id: $bodyWork_id, price:$price}){
    id,
  }
  }
`;

const carriers = gql`
query getCarriers{
  getCarriers{
    id,
    carrier,
    service,
    company,
    price,
    bodyWorks{
      id,
      name
    },
    email,
    phone,
    img
  }
}
`;

const createCarrier = gql`
mutation createCarrier($user_id:Float!, $carrier: String!, $service: String!, $email:String!, $phone: String!, $company: String, $price:Float, $nameBodyWork: String, $img: String){
  createCarrier(data:{user_id: $user_id, carrier: $carrier, service: $service, email: $email, phone: $phone, company: $company, price: $price, nameBodyWork: $nameBodyWork, img: $img}){
    id
  }
}
`;

const updateCarrier = gql`
mutation updateCarrier($id: Float!, $carrier: String!, $service: String!, $email:String!, $phone: String!, $company: String, $price:Float, $nameBodyWork: String, $bodyWork_id: Float!, $img: String){
  updateCarrier(data:{ id: $id, carrier: $carrier, service: $service, email: $email, phone: $phone, company: $company, price: $price, nameBodyWork: $nameBodyWork, bodyWork_id: $bodyWork_id, img: $img}){
    id
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
  carriers,
  createFreight,
  createCarrier,
  userFreight,
  userCarrier,
  updateCarrier,
  updateFreight
}


