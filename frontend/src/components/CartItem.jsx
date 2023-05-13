import { Box, Image } from '@chakra-ui/react';
import React from 'react';

export default function CartItem() {
  return (
    <Box p="2" bgColor="surface">
      <Image src="/assets/img/product.jpeg" />
    </Box>
  );
}
