
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const httpLink = createHttpLink({
  uri: "https://polar-wildwood-69899.herokuapp.com/graphql", //http link uri
});

const authLink = setContext((operation, context) => {
  const role = operation?.operationName;
  const token = "";
  if (token === null) {
    return {};
  } else {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        // 'x-hasura-role': role //uncomment this 
      },
    };
  }
});

// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:4000/graphql`, //ws link uri
//   options: {
//     reconnect: true,
//     connectionParams: {
//       authToken: "", //pass the token hera
//     },
//   },
// });

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, extensions }) => {
      switch (extensions?.code) {
        case "access-denied":
        case "not-found":
        case "validation-failed": {
          // show notification
          break;
        }
        case "invalid-jwt": {
          // logout and remove jwt token
          break;
        }
      }
    });
  }
  if (networkError) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(`[Network error]: ${networkError}`);
  }
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent


// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const { kind, operation }: Definintion = getMainDefinition(query);
//     return kind === "OperationDefinition" && operation === "subscription";
//   },
//   wsLink,
//   httpLink
// );

export const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});
