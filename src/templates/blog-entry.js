import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import styles from "./blog-entry.module.css";
import Author from "../components/author/author";

const BlogEntry = ({ children }) => {
  const data = useStaticQuery(graphql`
    query BlogEntry {
      mdx {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          author {
            photo
            name
            github
            email
          }
        }
      }
    }
  `);
  const { title, date } = data.mdx.frontmatter;
  const { name, photo, github, email } = data.mdx.frontmatter.author;
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `react`]} title={title} />
      <section className={styles.blog}>
       <h1 className={styles.blog__title}>{title}</h1>
        <Author
          name={name}
          photo={photo}
          date={date}
          github={github}
          email={email}
        />
        <section>{children}</section>
      </section>
    </Layout>
  );
};

export default BlogEntry;
