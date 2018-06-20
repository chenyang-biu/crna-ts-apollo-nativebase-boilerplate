import * as React from 'react';
import { Root } from "native-base";
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { TabsMain } from './Config/Routes';
import settings from './Config/Settings';

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink(settings.gqlHttpLink)
  ]),
  cache: new InMemoryCache()
});

export default class Main extends React.Component<any, any> {
  render() {
    return (
      <Root>
        <ApolloProvider client={client}>
          <TabsMain />
        </ApolloProvider>
      </Root>
    );
  }
}
