import {
  Box, chakra, Flex, Icon, Image, Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import Container from '../Container';
import ReviewItem from './ReviewItem';

export default function ReviewSection() {
  return (
    <chakra.section px="5">
      <Container py="20">
        <Text fontSize="3xl">Reviews</Text>
        {Array.from({ length: 5 }).map((e, i) => (
          <Box mt="5">
            <ReviewItem review={i + 1} date={new Date()} />
          </Box>
        ))}
      </Container>
    </chakra.section>
  );
}
