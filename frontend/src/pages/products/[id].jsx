import { Box } from '@chakra-ui/react';
import React from 'react';

import ProductDetailSection from '../../components/productPage/ProductDetailSection';
import ReviewSection from '../../components/productPage/ReviewSection';
import NavBar from '../../components/NavBar';

export default function Products() {
  return (
    <Box bgColor="background" color="white">
      <NavBar />
      <ProductDetailSection />
      <ReviewSection />
    </Box>
  );
}
