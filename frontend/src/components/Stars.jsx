import { Icon } from '@chakra-ui/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

export default function Stars(stars) {
  return Array.from({ length: 5 }).map((_, i) => (
    <Icon as={AiFillStar} color={i < stars ? 'yellow.400' : 'gray'} />
  ));
}
