import React from 'react';
import styles from './contributors.module.css';
import PersonasSection from '../personas-section/personas-section';
import Button from '../UI/button/button';
import { useStaticQuery, graphql } from 'gatsby'

const Contributors = () => {
  const data = useStaticQuery(graphql`
    query getContributors {
      allContributorsJson {
        edges {
          node {
            id
            photo
            name
            rol
            description
            email
            github
            twitter
            website
          }
        }
      }
    }
  `);
  const title = "Contribuidores"
  const description = "Personas que han contribuido con su conocimiento en nuestra comunidad."
  return (
    <div className={styles.contributors}>
      <PersonasSection
        title={title}
        description={description}
        personas={data.allContributorsJson.edges}
      />
      <div className={styles.contributors__add}>
        <Button type="tertiary">Agregarme a este panel</Button>
      </div>
    </div>
  );
}

export default Contributors;
