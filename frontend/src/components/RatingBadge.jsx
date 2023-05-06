import {
  Box, Center, Flex, Icon, Text,
} from '@chakra-ui/react';
import React from 'react';
import { BsEmojiSmile } from 'react-icons/bs';

export default function RatingBadge({ children, size }) {
  return (
    <>
      {size === 'lg' && (
        <Flex bgColor="#1c2c3b" p="1.5" borderRadius="2xl" w="100%">
          <Center bgColor="#92d33e" w="40px" h="40px" borderRadius="xl">
            <Icon as={BsEmojiSmile} color="black" fontSize="20" />
          </Center>
          <Box ml="3">
            <Text fontSize="xs">Rating</Text>
            <Text fontWeight="bold">{children}</Text>
          </Box>
        </Flex>
      )}
      {null}
    </>
  );
}
