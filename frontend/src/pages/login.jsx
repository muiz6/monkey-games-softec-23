import {
  Box, chakra, Input, Text, useToast,
} from '@chakra-ui/react';
import React, { useRef } from 'react';

import Logo from '../components/Logo';
import MyButton from '../components/MyButton';
import * as repository from '../services/repository';

export default function BusinessHomePage() {
  const toast = useToast();

  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const handleLogin = async () => {
    const email = refEmail.current.value;
    const password = refPassword.current.value;

    if (email && password) {
      await repository.logUserIn({
        email, password,
      });
    } else {
      toast({
        status: 'error',
        position: 'bottom-left',
        title: 'Error',
        description: 'Please fill all fields',
      });
    }
  };

  return (
    <chakra.section display={{ md: 'flex' }} minH="100vh" bgColor="background" color="white">
      <Box w={{ md: '50%' }}>
        <Box p="5">
          <Logo />
        </Box>
        <Box p="5">
          <Text as="h2" fontSize="3xl" fontWeight="bold">Welcome back</Text>
          <Text fontSize="sm">Enter your details</Text>
          <Input placeholder="Email" mt="32" ref={refEmail} />
          <Input placeholder="Password" my="5" ref={refPassword} />
          <MyButton size="lg">Log In</MyButton>
        </Box>
      </Box>
      <Box
        w={{ md: '50%' }}
        backgroundImage="url(/assets/img/login-bg.jpg)"
        bgSize="cover"
        borderLeftRadius="3xl"
        onClick={handleLogin}
      />
    </chakra.section>
  );
}
