import { Box } from '@chakra-ui/react';
import React from 'react';

import NavBar from '../components/NavBar';
import Cart from '../components/Cart';
import { useAppViewModel } from '../viewModels/appViewModel';

export default function BasicLayout({ children }) {
  const appViewModel = useAppViewModel();
  const isCartOpen = appViewModel.useCartOpenState();

  const handleOnCartClicked = () => {
    appViewModel.setCartOpenState(true);
  };

  const handleOnCartClosed = () => {
    appViewModel.setCartOpenState(false);
  };

  return (
    <Box bgColor="background" color="white" position="relative">
      <NavBar onCartClicked={handleOnCartClicked} />
      {children}
      {isCartOpen && (
        <Box position="fixed" right="0" top="0" w="400px">
          <Cart onClose={handleOnCartClosed} />
        </Box>
      )}
    </Box>
  );
}
