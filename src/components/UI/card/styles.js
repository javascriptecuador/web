import { Link } from "gatsby";
import styled from "styled-components";

const MAX_LINES = 2;
const BORDER_RADIUS = 10;
const NEUTRAL_COLOR = "#666363";
const TRANSPARENT_COLOR = "transparent";
const PADDING = 0;
// values in em units
const FONT_SIZE_BASE = 1; /* 16px */
const FONT_SIZE_L = FONT_SIZE_BASE + 0.2; /* 19.2px */
const FONT_SIZE_M = FONT_SIZE_BASE - 0.1; /* 14.4px */
const FONT_SIZE_S = FONT_SIZE_BASE - 0.2; /* 11.8px */
const SPACING = 1; /* 16px */
const LINE_HEIGHT_DESC = 1.4; /* 22.4px */
const LINE_HEIGHT_FOOT = 1; /* 4.8px */

const Card = styled.div`
  width: 100%;
  /* max-width: ; */
  display: flex;
  padding: ${(props) => props.allPadding || PADDING}em;
  border-radius: ${BORDER_RADIUS}px;
  background-color: ${(props) => props.bgColor || TRANSPARENT_COLOR};
`;
const CardImg = styled.div`
  width: 100%;
  border-radius: ${BORDER_RADIUS}px;
  height: ${(props) => props.maxHeight}em;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center center;
  flex-grow: 1;
`;
const CardBody = styled.div`
  flex-grow: 1;
`;
const CardContent = styled.div`
  padding-top: 1em;
  line-height: ${LINE_HEIGHT_DESC}rem;
`;
const CardTitle = styled.h5`
  padding-bottom: ${(props) => props.paddingBottom}em;
  font-size: ${(props) => props.fontSize || FONT_SIZE_L}em;
  font-weight: bold;
`;
const CardSubtitle = styled(CardTitle)`
  font-size: ${(props) => props.fontSize || FONT_SIZE_BASE}em;
  color: ${NEUTRAL_COLOR};
`;
const DescriptionTitle = styled.span`
  font-weight: bold;
`;
const CardDescription = styled.p`
  font-size: ${FONT_SIZE_M}em;
  display: -webkit-box;
  -webkit-line-clamp: ${MAX_LINES};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const ReadMoreLink = styled(Link)`
  color: ${(props) => props.color};
  font-size: ${FONT_SIZE_M}em;
  font-weight: bold;
`;
const CardFooter = styled.div`
  padding: 1em 0;
  display: flex;
  flex-direction: column;
`;
const FooterLine = styled.span`
  font-size: ${(props) =>
    props.pos === 0
      ? FONT_SIZE_BASE
      : props.pos === 1
      ? FONT_SIZE_M
      : FONT_SIZE_S}em;
  line-height: ${(props) =>
    [0, 2].includes(props.pos) ? `${LINE_HEIGHT_FOOT}em` : ""};
  color: ${(props) => ([1, 2].includes(props.pos) ? NEUTRAL_COLOR : "")};
`;

export {
  Card,
  CardImg,
  CardBody,
  CardContent,
  CardTitle,
  CardSubtitle,
  DescriptionTitle,
  CardDescription,
  ReadMoreLink,
  CardFooter,
  FooterLine,
};
