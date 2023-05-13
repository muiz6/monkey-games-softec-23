import { Box, Center, CircularProgress } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/homePage/HeroSection';
import PopularSection from '../components/homePage/PopularSection';

import * as repository from '../services/repository';

export default function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    (async () => {
      setProducts(await repository.getProducts(1));
    })();
  }, []);

  return (
    <MainLayout selection="/">
      {products?.length ? (
        <>
          <HeroSection product={products[0]} />
          <PopularSection products={products} />
        </>
      ) : (
        <Center minH="100vh">
          <CircularProgress isIndeterminate />
        </Center>
      )}

    </MainLayout>
  );
}
