import {
  Box, chakra, Flex, Input, Radio, RadioGroup, Text, useToast,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import Logo from '../components/Logo';
import MyButton from '../components/MyButton';
import * as repository from '../services/repository';

export default function BusinessHomePage() {
  const router = useRouter();
  const toast = useToast();

  const [disableSubmit, setDisableSubmit] = useState(false);

  const refName = useRef(null);
  const refEmail = useRef(null);
  const refDate = useRef(null);
  const refPassword = useRef(null);
  const refConfirmPassword = useRef(null);
  const [gender, setGender] = useState();

  const handleSignUp = async () => {
    setDisableSubmit(true);

    const name = refName.current.value;
    const email = refEmail.current.value;
    const date = refDate.current.value ? new Date(refDate.current.value) : null;
    const password = refPassword.current.value;
    const confirmPassword = refConfirmPassword.current.value;

    if (name && email && date && password && confirmPassword && gender) {
      if (password === confirmPassword) {
        try {
          await repository.signUserUp({
            email,
            password,
            dob: date.toISOString(),
            gender,
          });
          router.replace('/login');
        } catch (e) {
          toast({
            status: 'error',
            position: 'bottom-left',
            title: 'Error',
            description: e.message,
          });
        }
      } else {
        toast({
          status: 'error',
          position: 'bottom-left',
          title: 'Error',
          description: 'Password and confirm password do not match',
        });
      }
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
    <chakra.section display={{ md: 'flex' }} minH="100vh" background="background" color="white">
      <Box w={{ md: '50%' }}>
        <Box p="5">
          <Logo />
        </Box>
        <Box p="5">
          <Text as="h2" fontSize="3xl" fontWeight="bold">Create your account</Text>
          <Text fontSize="sm">Enter your details</Text>
          <Input placeholder="Name*" mt="32" ref={refName} />
          <Input placeholder="Email*" mt="5" ref={refEmail} />
          <Input placeholder="DOB*" type="date" mt="5" ref={refDate} />

          <Flex mt="5">
            <Text>Gender:</Text>
            <RadioGroup name="formName" flexGrow="1" ml="5" onChange={(value) => setGender(value)}>
              <Radio value="male" w="50%">Male</Radio>
              <Radio value="female" w="50%">Female</Radio>
              {/* <Radio value="other" w="50%">Other</Radio> */}
            </RadioGroup>
          </Flex>

          <Input placeholder="Password*" mt="5" ref={refPassword} type="password" />
          <Input placeholder="Confirm Password*" mt="5" mb="8" ref={refConfirmPassword} type="password" />
          <MyButton size="lg" disabled={disableSubmit} onClick={handleSignUp}>Sign up</MyButton>
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
