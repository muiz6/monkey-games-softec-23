import {
  Box, Table, Thead, Td, Th, Tr, Tbody,
} from '@chakra-ui/react';
import React from 'react';
import DashboardLayout from '../../../../layouts/DashboardLayout';

export default function DashboardInventoryPage() {
  return (
    <DashboardLayout>
      <Box p="10">
        <Table boxShadow="0 5px 10px #88888888" borderRadius="xl">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>TITLE</Th>
              <Th>QUANTITY</Th>
              <Th>MARKET PRICE</Th>
              <Th>COST PRICE</Th>
              <Th>MARGIN</Th>
              <Th>INVENTORY TYPE</Th>
              <Th>MINIMUM AGE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.from({ length: 10 }).map((e, i) => (
              <Tr bgColor={i % 2 === 0 ? 'gray.100' : null}>
                <Td>{i}</Td>
                <Td>Title</Td>
                <Td>1000</Td>
                <Td>1000</Td>
                <Td>1000</Td>
                <Td>1000</Td>
                <Td>Type</Td>
                <Td>18</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </DashboardLayout>
  );
}
