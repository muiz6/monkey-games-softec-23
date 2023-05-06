import { Box } from '@chakra-ui/react';
import React from 'react';

export default function Container({ children, ...remaining }) {
  return (
    <Box mx="auto" maxW="1200px" {...remaining}>{children}</Box>
  );
}
