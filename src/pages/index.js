import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Home from './home'


function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <Home />

    </Layout>
  );
}

export default IndexPage;
