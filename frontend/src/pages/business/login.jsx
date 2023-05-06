import {
  Box, Button, chakra, Input, Text,
} from '@chakra-ui/react';
import React from 'react';

export default function BusinessHomePage() {
  return (
    <chakra.section display={{ md: 'flex' }} minH="100vh">
      <Box w={{ md: '50%' }}>
        <Box p="5">
          <Text as="h1" fontSize="xl">MyApp</Text>
        </Box>
        <Box p="5">
          <Text as="h2" fontSize="3xl" fontWeight="bold">Welcome back</Text>
          <Text fontSize="sm">Enter your details</Text>
          <Input placeholder="Email" mt="32" />
          <Input placeholder="Password" mt="5" />
          <Button mt="8" w="100%" type="button">Log in</Button>
        </Box>
      </Box>
      <Box
        w={{ md: '50%' }}
        backgroundImage="url(/assets/img/login-bg.jpg)"
        bgSize="cover"
        borderLeftRadius="3xl"
      />
    </chakra.section>
  );
}
