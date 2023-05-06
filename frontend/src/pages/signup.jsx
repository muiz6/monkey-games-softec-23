import {
  Box, Button, chakra, Flex, Input, Radio, RadioGroup, Text,
} from '@chakra-ui/react';
import React from 'react';

import Logo from '../components/Logo';
import MyButton from '../components/MyButton';

export default function BusinessHomePage() {
  return (
    <chakra.section display={{ md: 'flex' }} minH="100vh" background="background" color="white">
      <Box w={{ md: '50%' }}>
        <Box p="5">
          <Logo />
        </Box>
        <Box p="5">
          <Text as="h2" fontSize="3xl" fontWeight="bold">Create your account</Text>
          <Text fontSize="sm">Enter your details</Text>
          <Input placeholder="Name*" mt="32" />
          <Input placeholder="Email*" mt="5" />
          <Input placeholder="DOB*" mt="5" />
          <Flex mt="5">
            <Text>Gender:</Text>
            <RadioGroup name="formName" flexGrow="1" ml="5">
              <Radio value="male" w="33%">Male</Radio>
              <Radio value="female" w="33%">Female</Radio>
              <Radio value="other" w="33%">Other</Radio>
            </RadioGroup>
          </Flex>

          <Input placeholder="Password*" mt="5" />
          <Input placeholder="Confirm Password*" mt="5" mb="8" />
          <MyButton size="lg">Sign up</MyButton>
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