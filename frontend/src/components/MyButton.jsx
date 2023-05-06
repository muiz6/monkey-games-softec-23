import { Button } from '@chakra-ui/react';
import React from 'react';

export default function MyButton({ children, size }) {
  return (
    <>
      {size === 'lg' && (
        <Button bgColor="secondary" _hover={{ bgColor: 'secondaryVariant' }} borderRadius="xl" w="100%" h="auto">
          {children}
        </Button>
      )}
      {null}
    </>
  );
}
