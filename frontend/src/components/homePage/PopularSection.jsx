import { Box, chakra, Text } from '@chakra-ui/react';
import React from 'react';
import ProductItem from '../ProductItem';

export default function PopularSection({ products }) {
  return (
    <chakra.section color="white" px="5" pb="20">
      <Box>
        <Text fontSize="2xl" fontWeight="bold">Popular Games</Text>
        <Box display={{ md: 'flex' }} mx="-2.5" mt="5" flexWrap="wrap">
          {products.map((p) => (
            <Box p="2.5" w={{ md: '25%' }}>
              <ProductItem
                title={p.title}
                price={p.price}
                link={`/products/${p.id}`}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </chakra.section>
  );
}
