import {
  Box, Flex, Icon, Image, Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import Stars from '../Stars';

export default function ReviewItem({ review, date }) {
  return (
    <Flex>
      <Flex w="33%">
        <Image src="/assets/img/customer.jpeg" w="100px" h="100px" objectFit="cover" />
        <Box ml="5">
          <Text fontWeight="bold">John Doe</Text>
        </Box>
      </Flex>
      <Box w="66%">
        <Flex alignItems="center">
          <Stars stars={review} />
          <Text ml="5" fontSize="xs">{`${getMonth(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`}</Text>
        </Flex>
        <Text mt="5" textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Box>
    </Flex>
  );
}

function getMonth(i) {
  const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[i];
}
