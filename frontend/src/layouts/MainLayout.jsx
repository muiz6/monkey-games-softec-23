import { Box, chakra, Flex, ListItem, Text, UnorderedList, Icon, } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaStar, FaStore } from 'react-icons/fa';

import Logo from '../components/Logo';
import * as repository from '../services/repository';
import MyButton from '../components/MyButton';

export default function MainLayout({ children, selection }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();

  useEffect(() => {
    setIsUserLoggedIn(Boolean(repository.getUser()) || false);
  }, []);

  return (
    <Box display={{ md: 'flex' }} minH="100vh" bgColor="background">
      <Box
        w="20%"
        color="white"
        display={{ base: 'none', md: 'block' }}
      >
        <Box pl="3" py="7">
          <NextLink href="/">
            <Logo />
          </NextLink>
        </Box>

        <UnorderedList ml="0">
          {[
            {
              Icon: FaStore,
              link: '/',
              title: 'Store',
            },
            {
              Icon: FaStar,
              link: '/favourites',
              title: 'Favourites',
            },
          ].map((e) => (
            <NextLink href={e.link}>
              <ListItem
                _hover={{ bgColor: 'primaryVariant' }}
                bgColor={e.link === selection ? 'primary' : null}
                listStyleType="none"
                p="3"
                borderRightRadius="full"
              >
                <Flex justifyContent="space-between" alignItems="center">
                  {e.title}
                  <Icon as={e.Icon} />
                </Flex>
              </ListItem>
            </NextLink>
          ))}
        </UnorderedList>
        {isUserLoggedIn === false && (
          <Box mt="10" pl="5">
            <NextLink href="/login">
              <MyButton size="lg">SIGN IN</MyButton>
            </NextLink>
          </Box>
        )}
      </Box>
      <Box w={{ md: '80%' }}>{children}</Box>
    </Box>
  );
}
