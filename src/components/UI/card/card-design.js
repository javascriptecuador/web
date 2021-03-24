import React from "react";
import PropTypes from "prop-types";
import {
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
} from "./styles";

export const CardDesign = ({ data, optionalData, styles }) => {
  const {
    id,
    title,
    subtitle,
    description,
    description_title,
    url_img,
    url_entry,
  } = data;
  const optDataKeys = Object.keys(optionalData);
  const hasOptData = optDataKeys.length > 0;
  const printSubtitle = subtitle && (
    <CardSubtitle fontSize={styles.subtitle_size} as="h6">
      {subtitle}
    </CardSubtitle>
  );
  const printFooterLines = optDataKeys.map((name, index) => (
    <FooterLine pos={index} key={name}>
      {optionalData[name]}
    </FooterLine>
  ));

  return (
    <Card
      bgColor={styles.bg_color}
      allPadding={styles.padding}
    >
      <CardImg bgImg={url_img} maxHeight={styles.viewport_img_height}></CardImg>
      <CardBody>
        <CardContent>
          <CardTitle
            fontSize={styles.title_size}
            paddingBottom={styles.spacing}
          >
            {title}
          </CardTitle>
          {printSubtitle}
          <CardDescription>
            <DescriptionTitle>{description_title}:</DescriptionTitle>{" "}
            {description}{" "}
          </CardDescription>
          <ReadMoreLink to={url_entry} color={styles.link_color}>
            Leer más
          </ReadMoreLink>
          {hasOptData && <CardFooter>{printFooterLines}</CardFooter>}
        </CardContent>
      </CardBody>
    </Card>
  );
};

CardDesign.propTypes = {
  data: PropTypes.object.isRequired,
  optionalData: PropTypes.object,
  styles: PropTypes.object.isRequired,
};

export default CardDesign;
