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
              <p>{articulo.title}</p>
              <p>
                {articulo.description_title}: {articulo.description}
              </p>
              <Link to={articulo.url_entry}>Leer más</Link>
              <p>{articulo.author}</p>
              <p>{articulo.date}</p>
              <p>{articulo.timeago}</p>
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
          articulos: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
              id
              path: slug
              timeToRead
              frontmatter {
                date(formatString: "MMMM DD, YYYY", locale: "es")
                description
                title
                author {
                  name
                }
                img {
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const articulosFormateados = data.articulos.nodes.map((articulo) => {
          return {
            ...articulo.frontmatter,
            id: articulo.id,
            url_entry: `/blog/${articulo.path}`,
            img: articulo.frontmatter.img.publicURL,
            author: articulo.frontmatter.author.name,
            timeago: `${articulo.timeToRead} min. Lectura`,
            description_title: "Descripción",
            type: "blog",
          };
        });

        return BlogPage(articulosFormateados);
      }}
    />
  );
}

export default renderBlogPage;
