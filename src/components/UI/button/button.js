import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({ type, children }) => {
  let typeStyles = "";
  if (type === "primary") {
    typeStyles = styles.buttonPrimary;
  } else if (type === "secondary") {
    typeStyles = styles.buttonSecondary;
  } else if (type === "tertiary") {
    typeStyles = styles.buttonTertiary;
  }

  return (
    <button className={`${styles.button} ${typeStyles}`}>{children}</button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
};

export default Button;
