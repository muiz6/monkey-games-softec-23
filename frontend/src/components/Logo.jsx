import { chakra, Text } from '@chakra-ui/react';
import React from 'react';

export default function Logo() {
  return (
    <Text fontSize="xl" fontWeight="bold">
      <chakra.span color="primary">Monkey</chakra.span>
      Games
    </Text>
  );
}
