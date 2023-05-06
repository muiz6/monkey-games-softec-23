import React from 'react';

import MainLayout from '../components/MainLayout';
import HeroSection from '../components/homePage/HeroSection';
import PopularSection from '../components/homePage/PopularSection';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <PopularSection />
      <Box h="100px" />
    </MainLayout>
  );
}
