import { chakra, Icon } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import NextLink from 'next/link';

import Container from './Container';
import Logo from './Logo';

export default function NavBar({ onCartClicked }) {
  return (
    <chakra.nav px="5">
      <Container display="flex" py="5" justifyContent="space-between">
        <NextLink href="/">
          <Logo />
        </NextLink>
        <Icon as={AiOutlineShoppingCart} onClick={onCartClicked} _hover={{ cursor: 'pointer' }} />
      </Container>
    </chakra.nav>
  );
}
