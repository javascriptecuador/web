import React from "react";
import Layout from "../components/layout/layout";
import HeroSection from "../components/hero-section/hero-section";
import CommunitySection from "../components/community-section/community-section";
import CitiesSection from "../components/cities-section/cities-section";
import EventsSection from "../components/events-section/Events";
import Subscribe from "../components/subscribe/subscribe";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout isHome={true}>
    <SEO
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      title="Home"
    />
    <HeroSection
      title="Ecuador.js"
      subtitle="Comunidad Javascript del Ecuador"
    />
    <CommunitySection />
    <CitiesSection />
    <EventsSection />
  </Layout>
);

export default IndexPage;
