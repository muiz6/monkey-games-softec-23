import React from 'react';

import MainLayout from '../components/MainLayout';
import FavouriteSection from '../components/favouritePage/FavouriteSection';

export default function FavouritePage() {
  return (
    <MainLayout selection="/favourites">
      <FavouriteSection />
    </MainLayout>
  );
}
