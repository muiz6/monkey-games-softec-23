import {
  Box, chakra, Input, Text, useToast,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import Logo from '../../components/Logo';
import MyButton from '../../components/MyButton';
import * as repository from '../../services/repository';

export default function BusinessHomePage() {
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const router = useRouter();

  const toast = useToast();
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const handleLogin = async () => {
    setSubmitDisabled(true);

    const email = refEmail.current.value;
    const password = refPassword.current.value;

    try {
      if (email && password) {
        await repository.logAdminIn({
          email, password,
        });
        router.replace('/business/dashboard/inventory');
      } else {
        toast({
          status: 'error',
          title: 'Error',
          description: 'Please fill all fields',
          position: 'bottom-left',
        });
      }
    } catch (e) {
      toast({
        status: 'error',
        title: 'Error',
        description: e.message,
        position: 'bottom-left',
      });
    }
  };

  return (
    <chakra.section display={{ md: 'flex' }} minH="100vh">
      <Box w={{ md: '50%' }}>
        <Box p="5">
          <Logo />
        </Box>
        <Box p="5">
          <Text as="h2" fontSize="3xl" fontWeight="bold">Welcome back</Text>
          <Text fontSize="sm">Enter your details</Text>
          <Input placeholder="Email*" mt="32" ref={refEmail} />
          <Input placeholder="Password*" mt="5" mb="8" ref={refPassword} type="password" />
          <MyButton size="lg" onClick={handleLogin} disabled={submitDisabled}>Log In</MyButton>
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
