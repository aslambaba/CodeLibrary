import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:1201/graphql',
  cache: new InMemoryCache()
});
