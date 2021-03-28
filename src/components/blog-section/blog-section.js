import React from "react";
import { StaticQuery, graphql } from "gatsby";
import BlogEntries from "../UI/blog-entries/blog-entries";
import { BlogWrapper, BlogTitle, BlogMore, BlogLink } from "./styles";

const BlogSection = (entries) => {
  return (
    <BlogWrapper id="blog-section" className={`ec-container`}>
      <BlogTitle className={`section-title `}>Blog</BlogTitle>
      <BlogEntries data={entries} />
      <BlogMore>
        <BlogLink to="/blog">Leer más</BlogLink>
      </BlogMore>
    </BlogWrapper>
  );
};

const RenderBlogSection = () => (
  <StaticQuery
    query={graphql`
      {
        articulos: allMdx(
          sort: { fields: frontmatter___date, order: DESC }
          limit: 5
        ) {
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
      const lastFiveEntries = data.articulos.nodes.map((entry) => {
        return {
          ...entry.frontmatter,
          id: entry.id,
          url_entry: `/blog/${entry.path}`,
          img: entry.frontmatter.img.publicURL,
          author: entry.frontmatter.author.name,
          timeago: `${entry.timeToRead} min. Lectura`,
          description_title: "Descripción",
          type: "blog",
        };
      });

      return BlogSection(lastFiveEntries);
    }}
  ></StaticQuery>
);

export default RenderBlogSection;
