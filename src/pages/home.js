import React from 'react';
import CitiesSection from '../components/cities-section/cities-section';
import CommunitySection from '../components/community-section/community-section';
import HeroSection from '../components/hero-section/hero-section';
import Subscribe from '../components/suscribe/suscribe'

const Home = () => (
  <div className="home-section-container">
    <HeroSection
      title="Ecuador.js"
      subtitle="Comunidad Javascript del Ecuador"
    />
    <CommunitySection />
    <CitiesSection />
    <Subscribe />
  </div>
);

export default Home;
