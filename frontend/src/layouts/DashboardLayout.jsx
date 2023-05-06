import { Box, ListIcon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';

export default function DashboardLayout({ children }) {
  return (
    <Box display={{ md: 'flex' }} minH="100vh">
      <Box
        w="20%"
        bg="linear-gradient(#00000088, #00000088), url(/assets/img/login-bg.jpg)"
        bgSize="cover"
        color="white"
        display={{ base: 'none', md: 'block' }}
      >
        <Text fontSize="xl" p="7">MyApp</Text>
        <UnorderedList p="4" ml="0">
          {[
            {
              Icon: FaHome,
              link: '/business/dashboard/inventory',
              title: 'Inventory',
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
