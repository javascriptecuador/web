import React from 'react';
import CommunitySection from '../components/community-section/community-section';
import HeroSection from '../components/hero-section/hero-section';

const Home = () => (
  <div className='ec-container home-section-container'>
    <HeroSection
      title='Ecuador.js'
      subtitle='Comunidad Javascript del Ecuador'
    />
    <CommunitySection />
  </div>
);

export default Home;
