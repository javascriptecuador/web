import React from "react";
import Layout from "../components/layout/layout";
import HeroSection from "../components/hero-section/hero-section";
import CommunitySection from "../components/community-section/community-section";
import CitiesSection from "../components/cities-section/cities-section";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout home={true}>
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
  </Layout>
);

export default IndexPage;
