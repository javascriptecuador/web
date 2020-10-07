import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HomeSection from '../components/homeSection'


function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      
      <HomeSection />
      
    </Layout>
  );
}

export default IndexPage;
