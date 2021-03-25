import React from "react";
import { BlogWrapper, BlogTitle, BlogMore, BlogLink } from "./styles";
import BlogEntries from "../UI/blog-entries/blog-entries";

const BlogSection = () => {
  return (
    <BlogWrapper id="blog-section" className={`ec-container`}>
      <BlogTitle className={`section-title `}>Blog</BlogTitle>
      <BlogEntries />
      <BlogMore>
        <BlogLink to="/blog">Leer más</BlogLink>
      </BlogMore>
    </BlogWrapper>
  );
};

export default BlogSection;
