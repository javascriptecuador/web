import React from "react";
import Contributors from "../components/contributors/contributors";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const ComunidadPage = () => (
  <Layout>
    <SEO
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      title="Home"
    />
    <Contributors />
  </Layout>
);

export default ComunidadPage;
