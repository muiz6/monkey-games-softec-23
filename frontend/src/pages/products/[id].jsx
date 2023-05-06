import { Box } from '@chakra-ui/react';
import React from 'react';

import ProductDetailSection from '../../components/productPage/ProductDetailSection';
import ReviewSection from '../../components/productPage/ReviewSection';
import BasicLayout from '../../layouts/BasicLayout';

export default function ProductDetailPage() {
  return (
    <BasicLayout>
      <ProductDetailSection />
      <ReviewSection />
    </BasicLayout>
  );
}
