import {
  Box, Center, Flex, Icon, Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import ProductItem from './ProductItem';
import MyButton from './MyButton';
// import {useAppViewModel} from '@';

export default function Cart({ onClose }) {
  return (
    <Flex bgColor="background" p="5" pt="0" height="100vh" flexDir="column" color="white">
      <Box overflow="auto" flexGrow="1">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="5xl" mt="5">Cart</Text>
          <Center bgColor="surface" borderRadius="full" onClick={onClose} h="40px" w="40px" _hover={{ cursor: 'pointer', bgColor: 'surfaceVariant' }}>
            <Icon as={AiOutlineClose} />
          </Center>
        </Flex>
        {Array.from({ length: 5 }).map(() => (
          <ProductItem />
        ))}
      </Box>
      <Box py="5">
        <Flex justifyContent="space-between">
          <Text mb="5">Grand Total</Text>
          <Text fontWeight="bold">PKR 6000</Text>
        </Flex>
        <MyButton size="lg">CONFIRM ORDER</MyButton>
      </Box>
    </Flex>
  );
}
