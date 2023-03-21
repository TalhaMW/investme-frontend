import React from 'react';
import HeroSection from './components/HeroSection';

import { HomePageContainer } from './styled';
function homeIndex() {
  return (
    <HomePageContainer>
      <HeroSection />
    </HomePageContainer>
  );
}

export default homeIndex;
