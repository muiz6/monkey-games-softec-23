import {
  Box, Table, Thead, Td, Th, Tr, Tbody,
} from '@chakra-ui/react';
import React from 'react';
import DashboardLayout from '../../../../layouts/DashboardLayout';

export default function DashboardOrderPage() {
  return (
    <DashboardLayout>
      <Box p="10">
        <Table boxShadow="0 5px 10px #88888888" borderRadius="xl">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>ITEM</Th>
              <Th>CUSTOMER</Th>
              <Th>CUSTOMER EMAIL</Th>
              <Th>DATE</Th>
              <Th>STATUS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.from({ length: 10 }).map((e, i) => (
              <Tr bgColor={i % 2 === 0 ? 'gray.100' : null}>
                <Td>{i}</Td>
                <Td>Title</Td>
                <Td>Customer</Td>
                <Td>example@example.com</Td>
                <Td>date</Td>
                <Td>false</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </DashboardLayout>
  );
}
