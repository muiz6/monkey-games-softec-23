import { Box, Center, Flex, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import NextLink from 'next/link';

import RatingBadge from '../components/RatingBadge';
import MyButton from '../components/MyButton';

export default function ProductItem({ title, price, favourite, link }) {
  const Content = (
    <Box bgColor="surface" p="2.5" borderRadius="2xl">
      <Box position="relative">
        <Center
          bgColor="white"
          position="absolute"
          right="10px"
          top="10px"
          w="25px"
          h="25px"
          borderRadius="full"
          _hover={{ cursor: 'pointer' }}
        >
          <Icon as={favourite ? AiFillStar : AiOutlineStar} color="black" />
        </Center>

        <Image src="/assets/img/product.jpg" borderRadius="xl" w="100%" />
      </Box>
      <Box mt="3">
        <Text fontWeight="bold">{title}</Text>

        <Flex mt="5">
          <Flex w="50%" mr="1.5">
            <RatingBadge size="lg">98%</RatingBadge>
          </Flex>
          <Flex w="50%" ml="1.5">
            <MyButton size="lg">PKR {price}</MyButton>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );

  return link ? (
    <NextLink href={link}>
      {Content}
    </NextLink>
  ) : Content;
}
