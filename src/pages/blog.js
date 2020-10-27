import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

import { StaticQuery, graphql, Link } from "gatsby";

function BlogPage(articulos) {
  return (
    <Layout>
      <SEO title="Blog de Javascript Ecuador" />
      <div className="mx-auto md:w-1/2 mb-8">
        <h2>Lista de blogs:</h2>

        <ul>
          {articulos.map((articulo) => (
            <li key={articulo.id}>
              <Link to={`/blog/${articulo.slug}`}>{articulo.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

function renderBlogPage() {
  return (
    <StaticQuery
      query={graphql`
        query BlogList {
          articulos: allMdx {
            edges {
              node {
                id
                slug
                frontmatter {
                  title
                  description
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const articulosFormateados = data.articulos.edges.map((articulo) => {
          return {
            ...articulo.node.frontmatter,
            slug: articulo.node.slug,
            id: articulo.node.id,
          };
        });
        return BlogPage(articulosFormateados);
      }}
    />
  );
}

export default renderBlogPage;
