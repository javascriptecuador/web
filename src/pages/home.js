import React from "react";
import CiudadesSection from "../components/ciudades-section/ciudades-section";
import CommunitySection from "../components/community-section/community-section";
import HeroSection from "../components/hero-section/hero-section";
import Suscribe from "../components/suscribe/suscribe";
const Home = () => (
  <div className="home-section-container">
    <HeroSection
      title="Ecuador.js"
      subtitle="Comunidad Javascript del Ecuador"
    />
    <CommunitySection />
    <CiudadesSection />
    <Suscribe />
  </div>
);

export default Home;
