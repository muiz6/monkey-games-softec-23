import { Center, Icon } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export default function CloseButton({ onClose, bgColor, hoverColor }) {
  return (
    <Center bgColor={bgColor ? bgColor : 'surface'} borderRadius="full" onClick={onClose} h="40px" w="40px" _hover={{ cursor: 'pointer', bgColor: hoverColor ? hoverColor : 'surfaceVariant' }}>
      <Icon as={AiOutlineClose} />
    </Center>
  );
}
