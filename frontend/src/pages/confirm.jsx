import {
  Box, Flex, Input, Text,
} from '@chakra-ui/react';
import React from 'react';

import BasicLayout from '../layouts/BasicLayout';
import Container from '../components/Container';
import ProductItem from '../components/ProductItem';
import MyButton from '../components/MyButton';

export default function ConfirmPage() {
  return (
    <BasicLayout>
      <Box>
        <Container py="20">
          <Text as="h1" fontSize="3xl" fontWeight="bold">Confirm your order</Text>
          <Box display="flex" mt="5">
            <Box w="50%">
              <Text fontSize="2xl" mb="5">Your Order</Text>
              {Array.from({ length: 5 }).map(() => (
                <Box mb="5">
                  <ProductItem />
                </Box>
              ))}
            </Box>
            <Box w="50%" ml={{ md: '5' }}>
              <Text fontSize="2xl">Add Payment Details</Text>
              <Input placeholder="Card number" mt="5" />
              <Input placeholder="Cardholder name" mt="5" />
              <Flex my="5">
                <Input placeholder="Card expiration" />
                <Input placeholder="CVV" ml="5" />
              </Flex>
              <MyButton size="lg">CONFIRM</MyButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </BasicLayout>
  );
}
