import {
  Box, chakra, Flex, Image, Text,
} from '@chakra-ui/react';
import React from 'react';

import Container from '../Container';
import MyButton from '../MyButton';
import Stars from '../Stars';

export default function ProductDetailSection({ product, onAddToCart }) {
  return (
    <chakra.section px="5">
      <Container display="flex">
        <Box w="50%">
          <Image src="/assets/img/hero.jpg" w="100%" borderRadius="3xl" />
          <Flex mt="5" mx="-1.5">
            {Array.from({ length: 3 }).map(() => (
              <Box px="1.5">
                <Image src="/assets/img/hero.jpg" borderRadius="xl" />
              </Box>
            ))}
          </Flex>
        </Box>
        <Box ml="5" w="50%">
          <Text fontSize="3xl" fontWeight="bold" mb="3">{product.name}</Text>
          <Stars stars="5" />
          <Text fontSize="3xl" fontWeight="bold" mt="5">PKR {product.price}</Text>
          <Text textAlign="justify" my="5">
            {product.description}
          </Text>
          <MyButton size="lg" onClick={onAddToCart}>ADD TO CART</MyButton>
        </Box>
      </Container>
    </chakra.section>
  );
}
