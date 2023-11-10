import React from "react";
import Layout from "../components/layout/layout";
import Maintainers from "../components/maintainers/maintainers";
import SEO from "../components/seo";

const ComunidadPage = () => (
  <Layout>
    <SEO
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      title="Home"
    />
    {/* <CommunityHeroSection /> */}
    <Maintainers />
    {/* <Contributors /> */}
  </Layout>
);

export default ComunidadPage;
