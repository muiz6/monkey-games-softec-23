import { Box, chakra, Text } from '@chakra-ui/react';
import React from 'react';
import ProductItem from '../ProductItem';

export default function PopularSection() {
  return (
    <chakra.section color="white" px="5">
      <Box>
        <Text fontSize="2xl" fontWeight="bold">Popular Games</Text>
        <Box display={{ md: 'flex' }} mx="-2.5" mt="5">
          {Array.from({ length: 4 }).map(() => (
            <Box p="2.5">
              <ProductItem />
            </Box>
          ))}
        </Box>
      </Box>
    </chakra.section>
  );
}
