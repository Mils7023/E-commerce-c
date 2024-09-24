import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

export const getClient = () => {
  const uri: string | URL = process.browser
    ? new URL("/graphql", location.href)
    : new URL("/graphql", process.env.GRAPHQL_URL).href;

  // const uri = " http://localhost:8080";

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: uri as string,
    }),
    ssrMode: true,
  });
};
