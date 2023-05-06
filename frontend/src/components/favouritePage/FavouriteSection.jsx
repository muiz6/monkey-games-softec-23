import { Box, chakra, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

import ProductItem from '../ProductItem';
import MyButton from '../MyButton';

export default function FavouriteSection() {
  return (
    <chakra.section color="white" mt="10" px="5">
      <Text fontSize="3xl" fontWeight="bold">My Favourites</Text>
      <Flex mx="-1.5" mt="10">
        {Array.from({ length: 3 }).map(() => (
          <Box w="25%" px="1.5">
            <ProductItem />
          </Box>
        ))}
      </Flex>
      <Box h="30px" />
      <NextLink href="/">
        <MyButton size="lg">Continue Shopping</MyButton>
      </NextLink>
    </chakra.section>
  );
}
