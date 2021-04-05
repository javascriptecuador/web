import React from "react";
import Persona from "./persona/persona";
import styles from "./personas.module.css";
import PropTypes from "prop-types";

const Personas = ({ listPersonas }) => {
  let personas = null;
  if (listPersonas && listPersonas.length > 0) {
    personas = listPersonas.map((person) => (
      <Persona
        key={person.node.id}
        photo={person.node.photo}
        name={person.node.name}
        rol={person.node.rol}
        description={person.node.description}
        github={person.node.github}
        website={person.node.website}
        email={person.node.email}
        twitter={person.node.twitter}
      />
    ));
  }
  return <div className={styles.personas}>{personas}</div>;
};

Personas.prototype = {
  listPersonas: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Personas;
