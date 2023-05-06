import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

import RatingBadge from '../components/RatingBadge';
import MyButton from '../components/MyButton';

export default function ProductItem() {
  return (
    <Box bgColor="surface" p="2.5" borderRadius="2xl">
      <Image src="/assets/img/product.jpg" borderRadius="xl" />
      <Box mt="3">
        <Text fontWeight="bold">Title</Text>

        <Flex mt="5">
          <Flex w="50%" mr="1.5">
            <RatingBadge size="lg">98%</RatingBadge>
          </Flex>
          <Flex w="50%" ml="1.5">
            <MyButton size="lg">PKR 100</MyButton>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
