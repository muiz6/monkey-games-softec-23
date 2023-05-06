import {
  Box, Table, Thead, Td, Th, Tr, Tbody,
} from '@chakra-ui/react';
import React from 'react';

import DashboardLayout from '../../../../components/DashboardLayout';

export default function DashboardCustomerPage() {
  return (
    <DashboardLayout>
      <Box p="10">
        <Table boxShadow="0 5px 10px #88888888" borderRadius="xl">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>NAME</Th>
              <Th>EMAIL</Th>
              <Th>STATUS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.from({ length: 10 }).map((e, i) => (
              <Tr bgColor={i % 2 === 0 ? 'gray.100' : null}>
                <Td>{i}</Td>
                <Td>John Doe</Td>
                <Td>john@example.com</Td>
                <Td>ACTIVE</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </DashboardLayout>
  );
}
