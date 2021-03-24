import { Link } from "gatsby";
import styled from "styled-components";
import { Card, CardContent } from "../UI/card/styles";

const BlogWrapper = styled.section`
  background: #fff;
  /* height: 840px; */
  padding-top: 10em;
  position: relative;
`;
const BlogTitle = styled.h2`
  margin-bottom: 1em;
`;
const BlogGrid = styled.div`
  display: grid;
  grid-column-gap: 3%;
  grid-row-gap: 15px;
  grid-template-rows: auto;

  /* Small devices (landscape phones, 320px and up) */
  @media (min-width: 320px) {
    & {
      grid-template-columns: 1fr;
    }
  }

  /* Extra arge devices (extra large desktops, 1201px and up) */
  @media (min-width: 1201px) {
    & {
      grid-template-columns: 20% 54% 20%;
    }
  }
`;
const BlogCard = styled.div`
  grid-row: ${(props) => props.gridRow};
  grid-column: ${(props) => props.gridColumn};

  & > ${Card} {
    flex-direction: ${(props) => props.flexDirection};
  }

  & ${CardContent} {
    padding-left: ${(props) => props.paddingLeft}em;
  }

  /* Small devices (landscape phones, 320px and up) */
  @media (min-width: 320px) {
    & {
      grid-area: auto;
    }

    & > ${Card} {
      flex-direction: column;
    }

    & ${CardContent} {
      padding-left: 0;
    }
  }

  /* Extra large devices (extra large desktops, 1201px and up) */
  @media (min-width: 1201px) {
    & {
      grid-row: ${(props) => props.gridRow};
      grid-column: ${(props) => props.gridColumn};
    }

    & > ${Card} {
      flex-direction: ${(props) => props.flexDirection} !important;
    }

    & ${CardContent} {
      padding-left: ${(props) => props.paddingLeft}em !important;
    }
  }

  /* large devices (large desktops, 768px and up) */
  @media (min-width: 768px) {
    & > ${Card} {
      flex-direction: row;
    }

    & ${CardContent} {
      padding-left: 1em;
    }
  }
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

export { BlogWrapper, BlogGrid, BlogCard, BlogTitle, BlogMore, BlogLink };
