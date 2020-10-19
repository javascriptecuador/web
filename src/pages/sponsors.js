import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import SponsorsSection from "../components/sponsors-section/sponsors-section";

const Sponsors = () => (
  <Layout>
    <SEO
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      title="Home"
    />
    <SponsorsSection />
  </Layout>
);

export default Sponsors;
