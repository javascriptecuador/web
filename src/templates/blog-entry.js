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

      <section className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        <h1>{pageContext.frontmatter.title}</h1>
        <br/>
        <h4>{pageContext.frontmatter.description}</h4>
        <br/>
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
