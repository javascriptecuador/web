import React from 'react';
import PersonasSection from '../personas-section/personas-section';
import styles from './maintainers.module.css';
import { useStaticQuery, graphql } from 'gatsby'

const Maintainers = () => {
  const title = "Mantenedores"
  const description = "Este es el grupo de mantenedores que hacen posible los eventos"
  const data = useStaticQuery(graphql`
    query getMaintainers {
      allMaintainersJson {
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
    <div className={styles.maintainers}>
      <PersonasSection
        title={title}
        description={description}
        personas={data.allMaintainersJson.edges}
      />
    </div>
  );
}



export default Maintainers;
