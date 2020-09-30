import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

// import PropTypes from 'prop-types';

export default function BlogEntry({ pageContext, children }) {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col md:flex-row">
        <h1>{pageContext.frontmatter.title}</h1>
        <section>{children}</section>
        {/* <div className="md:w-2/3 md:mr-8"></div> */}
      </section>
    </Layout>
  );
}

// BlogEntry.prototype = {
//     children: PropTypes.object,
//     // pageContext: PropTypes.shape({
//     //     title: PropTypes.string.isRequired,
//     //     date: PropTypes.string.isRequired,
//     //     description: PropTypes.string,
//     // })
//     pageContext: PropTypes.any
// }
