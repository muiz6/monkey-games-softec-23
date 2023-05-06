import {
  Box, Flex, Image, Text,
} from '@chakra-ui/react';
import React from 'react';

import MyButton from '../MyButton';
import RatingBadge from '../RatingBadge';

export default function HeroSection() {
  return (
    <Box p="5" color="white">
      <Text fontSize="3xl" fontWeight="bold">Good day!</Text>
      <Box mt="10" display={{ md: 'flex' }}>
        <Image src="/assets/img/hero.jpg" w="70%" borderRadius="3xl" />
        <Box pl="5" w="30%">
          <Box bgColor="surface" p="5" borderRadius="2xl">
            <Text fontSize="2xl" fontWeight="bold">Skyrim</Text>
            <Flex mt="5">
              <Flex w="50%" mr="1.5">
                <RatingBadge size="lg">5%</RatingBadge>
              </Flex>
              <Flex w="50%" ml="1.5">
                <MyButton size="lg">PKR 6000</MyButton>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
