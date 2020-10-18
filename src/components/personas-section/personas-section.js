import React from "react";
import styles from "./personas-section.module.css";
import PropTypes from 'prop-types'
import Personas from '../UI/personas/personas'

const PersonasSection = ({ title, description, personas }) => (
  <div className={styles.section}>
    <div className="ec-container">
      <h3 className={styles.section__title}>{title}</h3>
      <p className={styles.section__description}>{description}</p>
      <Personas listPersonas={personas} />
    </div>
  </div>
);

PersonasSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  personas: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rol: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      // URL
      github: PropTypes.string,
      // URL
      website: PropTypes.string,
      // URL
      email: PropTypes.string,
      // URL
      twitter: PropTypes.string,
    })
  ),
};

export default PersonasSection;
