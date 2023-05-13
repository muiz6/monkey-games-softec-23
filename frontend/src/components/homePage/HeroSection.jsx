import {
  Box, Flex, Image, Text,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

import MyButton from '../MyButton';
import RatingBadge from '../RatingBadge';

export default function HeroSection({ product }) {
  return (
    <Box p="5" color="white">
      <Text fontSize="3xl" fontWeight="bold">Good day!</Text>
      <NextLink href="/products/1">
        <Box mt="10" display={{ md: 'flex' }}>
          <Image src="/assets/img/hero.jpg" w={{ md: '70%' }} borderRadius="3xl" />
          <Box pl="5" w="30%" display={{ base: 'none', md: 'block' }}>
            <Box bgColor="surface" p="5" borderRadius="2xl">
              <Text fontSize="2xl" fontWeight="bold">{product.name}</Text>
              <Text mt="5">{product.description}</Text>
              <Flex mt="5">
                <Flex w="50%" mr="1.5">
                  <RatingBadge size="lg">5%</RatingBadge>
                </Flex>
                <Flex w="50%" ml="1.5">
                  <MyButton size="lg">PKR {product.price}</MyButton>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
      </NextLink>
    </Box>
  );
}
