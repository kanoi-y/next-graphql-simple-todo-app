import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import apolloClient from '../lib/apollo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
    )
}

export default MyApp
