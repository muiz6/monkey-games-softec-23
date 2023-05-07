import {
  Box, Center, Flex, Icon, Input, Table, Thead, Td, Th, Tr, Tbody, Text, Select, useToast,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';

import DashboardLayout from '../../../../layouts/DashboardLayout';
import MyButton from '../../../../components/MyButton';
import CloseButton from '../../../../components/CloseButton';
import * as repository from '../../../../services/repository';

export default function DashboardInventoryPage() {
  const [showCreate, setShowCreate] = useState(false);
  const [type, setType] = useState('gear');
  const toast = useToast();

  const refCreateName = useRef(null);
  const refCreateDescription = useRef(null);
  const refCreatePrice = useRef(null);
  const refCreateCount = useRef(null);
  const refCreateImages = useRef(null);
  const refCreatePlatform = useRef(null);
  const refCreateCategory = useRef(null);

  const handleCreateProduct = async () => {
    try {
      const name = refCreateName.current.value;
      const description = refCreateDescription.current.value;
      const price = refCreatePrice.current.value;
      const inventoryCount = refCreateCount.current.value;
      const images = refCreateImages.current.value;
      const platform = refCreatePlatform.current.value;
      const category = refCreateCategory.current.value;

      if (name && description && price && inventoryCount && type && images && platform && category) {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('inventoryCount', inventoryCount);
        formData.append('type', type);
        formData.append('images', images);
        formData.append('platform', platform);
        formData.append('category', category);

        await repository.createProduct(formData);

        toast({
          status: 'success',
          position: 'bottom-left',
          title: 'Success',
          description: 'Product created successfully',
        });
      } else {
        toast({
          status: 'error',
          position: 'bottom-left',
          title: 'Error',
          description: 'Please fill all fields',
        });
      }
    } catch (e) {
      toast({
        status: 'error',
        position: 'bottom-left',
        title: 'Error',
        description: e.message,
      });
    }
  };

  return (
    <DashboardLayout>
      <Box p="10" position="relative">
        <Flex justifyContent="space-between">
          <Text fontSize="3xl" fontWeight="bold">Manage Products</Text>
          <Box w="200px">
            <MyButton size="lg" onClick={() => setShowCreate(true)}>Create</MyButton>
          </Box>
        </Flex>
        <Table boxShadow="0 5px 10px #88888888" borderRadius="xl" mt="5">
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

        <Box position="absolute" right="0" top="0" w="300px" bgColor="white" boxShadow="-1px 0px 10px #88888888" display={showCreate ? null : 'none'}>
          <Flex flexDir="column" padding="5" h="100vh">
            <Box flexGrow="1">
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="2xl" fontWeight="bold">Create Product</Text>
                <CloseButton
                  bgColor="gray.100"
                  hoverColor="gray.200"
                  onClose={() => setShowCreate(false)}
                />
              </Flex>
              <Input placeholder="Name*" mt="10" ref={refCreateName} />
              <Input placeholder="Description*" mt="5" ref={refCreateDescription} />
              <Input placeholder="Price*" type="number" mt="5" ref={refCreatePrice} />
              <Input placeholder="Count*" type="number" mt="5" ref={refCreateCount} />
              <Select mt="5" onChange={(e) => setType(e.target.value.toLowerCase())}>
                <option>Game</option>
                <option>Gear</option>
              </Select>
              <Input placeholder="Image" mt="5" type="file" pt="1.5" ref={refCreateImages} />
              <Input placeholder="Platform*" mt="5" ref={refCreatePlatform} />
              <Input placeholder="Category*" mt="5" ref={refCreateCategory} />
            </Box>
            <Box>
              <MyButton size="lg" onClick={handleCreateProduct}>Create</MyButton>
            </Box>
          </Flex>
        </Box>
      </Box>
    </DashboardLayout>
  );
}
