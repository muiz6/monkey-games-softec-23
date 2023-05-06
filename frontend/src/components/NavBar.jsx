import { chakra, Icon } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import Container from './Container';
import Logo from './Logo';

export default function NavBar({ onCartClicked }) {
  return (
    <chakra.nav px="5">
      <Container display="flex" py="5" justifyContent="space-between">
        <Logo />
        <Icon as={AiOutlineShoppingCart} onClick={onCartClicked} _hover={{ cursor: 'pointer' }} />
      </Container>
    </chakra.nav>
  );
}
