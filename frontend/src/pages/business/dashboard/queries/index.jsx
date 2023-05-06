import {
  Box, Table, Thead, Td, Th, Tr, Tbody,
} from '@chakra-ui/react';
import React from 'react';

import DashboardLayout from '../../../../components/DashboardLayout';

export default function DashboardQueryPage() {
  return (
    <DashboardLayout>
      <Box p="10">
        <Table boxShadow="0 5px 10px #88888888" borderRadius="xl">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>MESSAGE</Th>
              <Th>CUSTOMER</Th>
              <Th>TYPE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.from({ length: 10 }).map((e, i) => (
              <Tr bgColor={i % 2 === 0 ? 'gray.100' : null}>
                <Td>{i}</Td>
                <Td>John Doe</Td>
                <Td>john@example.com</Td>
                <Td>QUERY</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </DashboardLayout>
  );
}
