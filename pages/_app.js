import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import '../styles/globals.css'

export const client = new ApolloClient({
  uri: 'https://demotivation-quotes-api.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
}

export default MyApp
