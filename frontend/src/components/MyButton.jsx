import { Button } from '@chakra-ui/react';
import React from 'react';

export default function MyButton({ children, disabled, size, onClick }) {
  return (
    <>
      {size === 'lg' && (
        <Button bgColor="secondary" _hover={{ bgColor: 'secondaryVariant' }} borderRadius="xl" w="100%" h="auto" p="3" disabled={disabled} onClick={onClick}>
          {children}
        </Button>
      )}
      {null}
    </>
  );
}
