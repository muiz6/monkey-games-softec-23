import React from 'react';

import MainLayout from '../layouts/MainLayout';
import FavouriteSection from '../components/favouritePage/FavouriteSection';

export default function FavouritePage() {
  return (
    <MainLayout selection="/favourites">
      <FavouriteSection />
    </MainLayout>
  );
}
