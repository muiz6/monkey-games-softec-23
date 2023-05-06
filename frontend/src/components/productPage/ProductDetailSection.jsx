import {
  Box, chakra, Flex, Image, Text,
} from '@chakra-ui/react';
import React from 'react';

import Container from '../Container';
import MyButton from '../MyButton';
import Stars from '../Stars';

export default function ProductDetailSection() {
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
          <Text fontSize="3xl" fontWeight="bold" mb="3">Title</Text>
          <Stars stars="5" />
          <Text fontSize="3xl" fontWeight="bold" mt="5">PKR 6000</Text>
          <Text textAlign="justify" my="5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <MyButton size="lg">ADD TO CART</MyButton>
        </Box>
      </Container>
    </chakra.section>
  );
}
