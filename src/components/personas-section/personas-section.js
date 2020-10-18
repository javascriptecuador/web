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
  personas: PropTypes.arrayOf(PropTypes.object),
};

export default PersonasSection;
