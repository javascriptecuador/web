import React from "react";
import Persona from "./persona/persona";
import styles from "./personas.module.css";
import PropTypes from "prop-types";

const Personas = ({ listPersonas }) => {
  let personas = null
  if (listPersonas && listPersonas.length > 0) {
    personas = listPersonas.map(
        ({ photo, name, rol, description, github, website, email, twitter }) => (
          <Persona
            photo={photo}
            name={name}
            rol={rol}
            description={description}
            github={github}
            website={website}
            email={email}
            twitter={twitter}
            key={name}
          />
        )
      )
  }
  return (
    <div className={styles.personas}>
      {personas}
    </div>
  )
}

Personas.prototype = {
  listPersonas: PropTypes.arrayOf(
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
  ).isRequired,
};

export default Personas;
