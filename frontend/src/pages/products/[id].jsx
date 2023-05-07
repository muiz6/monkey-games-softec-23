import { Center, CircularProgress, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ProductDetailSection from '../../components/productPage/ProductDetailSection';
import ReviewSection from '../../components/productPage/ReviewSection';
import BasicLayout from '../../layouts/BasicLayout';
import * as repository from '../../services/repository';
import { useAppViewModel } from '../../viewModels/appViewModel';

export default function ProductDetailPage() {
  const [product, setProductDetail] = useState();
  const router = useRouter();
  const toast = useToast();
  const appViewModel = useAppViewModel();

  useEffect(() => {
    (async () => {
      try {
        const data = await repository.getProductDetails(router.query.id);
        setProductDetail(data);
      } catch (e) { }
    })();
  }, [router]);

  const handleAddToCart = async () => {
    try {
      await repository.toggleCart(product.id);
      appViewModel.setCartOpenState(true);
    } catch (e) {
      toast({
        status: 'error',
        title: 'Error',
        description: e.message,
        position: 'bottom-left',
      });
    }
  };

  return (
    <BasicLayout>
      {product ? (
        <>
          <ProductDetailSection product={product} onAddToCart={handleAddToCart} />
          <ReviewSection />
        </>
      ) : (
        <Center minH="100vh">
          <CircularProgress isIndeterminate />
        </Center>
      )}
    </BasicLayout>
  );
}
