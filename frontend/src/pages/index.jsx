import { Box } from '@chakra-ui/react';
import React from 'react';

import MainLayout from '../layouts/MainLayout';
import HeroSection from '../components/homePage/HeroSection';
import PopularSection from '../components/homePage/PopularSection';

export default function Home() {
  return (
    <MainLayout selection="/">
      <HeroSection />
      <PopularSection />
      <Box h="100px" />
    </MainLayout>
  );
}
