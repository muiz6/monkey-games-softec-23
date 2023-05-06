import { chakra } from '@chakra-ui/react';
import React from 'react';

import Container from './Container';

export default function NavBar() {
  return (
    <chakra.nav>
      <Container py="5">
        MonkeyGames
      </Container>
    </chakra.nav>
  );
}
