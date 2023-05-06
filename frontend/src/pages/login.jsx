import {
  Box, chakra, Input, Text,
} from '@chakra-ui/react';
import React from 'react';

import Logo from '../components/Logo';
import MyButton from '../components/MyButton';

export default function BusinessHomePage() {
  return (
    <chakra.section display={{ md: 'flex' }} minH="100vh" bgColor="background" color="white">
      <Box w={{ md: '50%' }}>
        <Box p="5">
          <Logo />
        </Box>
        <Box p="5">
          <Text as="h2" fontSize="3xl" fontWeight="bold">Welcome back</Text>
          <Text fontSize="sm">Enter your details</Text>
          <Input placeholder="Email" mt="32" />
          <Input placeholder="Password" my="5" />
          <MyButton size="lg">Log In</MyButton>
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
