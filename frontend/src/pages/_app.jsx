import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import theme from '../theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
