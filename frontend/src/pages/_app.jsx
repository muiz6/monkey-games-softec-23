import { ChakraProvider } from '@chakra-ui/react';
import React, { useState } from 'react';

import theme from '../theme';
import { AppViewModel, AppViewModelProvider } from '../viewModels/appViewModel';

export default function MyApp({ Component, pageProps }) {
  const [appViewModel] = useState(AppViewModel());

  return (
    <ChakraProvider theme={theme}>
      <AppViewModelProvider value={appViewModel}>
        <Component {...pageProps} />
      </AppViewModelProvider>
    </ChakraProvider>
  );
}
