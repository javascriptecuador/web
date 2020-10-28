import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const Ciudades = () => (
  <Layout>
    <SEO
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      title="Home"
    />
    <div className="mx-auto md:w-1/2 mb-8">Pagina Ciudades</div>
  </Layout>
);

export default Ciudades ;
