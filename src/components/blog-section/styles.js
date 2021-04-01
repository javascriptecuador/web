import { Link } from "gatsby";
import styled from "styled-components";

const BlogWrapper = styled.section`
  background: #fff;
  /* height: 840px; */
  padding-top: 10em;
  position: relative;
`;
const BlogTitle = styled.h2`
  margin-bottom: 1em;
`;
const BlogMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5em;
`;
const BlogLink = styled(Link)`
  font-weight: bold;
  font-size: 1.5em;
  color: #056294;
`;

export { BlogWrapper, BlogTitle, BlogMore, BlogLink };
