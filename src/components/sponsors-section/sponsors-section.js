import React from "react";
import styles from "./sponsors-section.module.css";
import { useStaticQuery, graphql } from "gatsby";
import PersonasSection from "../personas-section/personas-section";

const SponsorsSection = () => {
  const title = "Sponsors";
  const description =
    "Estos son nuestros sponsors que hacen posible los eventos";
  const data = useStaticQuery(graphql`
    query getSponsors {
      allSponsorsJson {
        edges {
          node {
            description
            email
            github
            id
            name
            photo
            rol
            twitter
            website
          }
        }
      }
    }
  `);
  return (
    <div className={styles.sponsors}>
      <PersonasSection
        title={title}
        description={description}
        personas={data.allSponsorsJson.edges}
      />
    </div>
  );
};

export default SponsorsSection;
