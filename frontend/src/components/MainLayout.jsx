import { Box, chakra, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';

export default function MainLayout({ children }) {
  return (
    <Box display={{ md: 'flex' }} minH="100vh" bgColor="background">
      <Box
        w="20%"
        color="white"
        display={{ base: 'none', md: 'block' }}
      >
        <Text fontSize="xl" p="7" fontWeight="bold">
          <chakra.span color="primary">Monkey</chakra.span>
          Games
        </Text>
        <UnorderedList p="4" ml="0">
          {[
            {
              Icon: FaHome,
              link: '/business/dashboard/inventory',
              title: 'Store',
            },
            {
              Icon: FaHome,
              link: '/business/dashboard/orders',
              title: 'Orders',
            },
            {
              Icon: FaHome,
              link: '/business/dashboard/customers',
              title: 'Customers',
            },
            {
              Icon: FaHome,
              link: '/business/dashboard/queries',
              title: 'Queries',
            },
          ].map((e) => (
            <NextLink href={e.link}>
              <ListItem _hover={{ bgColor: '#ffffff20' }} listStyleType="none" p="3" borderRadius="xl">
                <ListIcon as={e.Icon} />
                {e.title}
              </ListItem>
            </NextLink>
          ))}
        </UnorderedList>
      </Box>
      <Box w={{ md: '80%' }}>{children}</Box>
    </Box>
  );
}
