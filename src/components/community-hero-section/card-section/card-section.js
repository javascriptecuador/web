import React from "react";
import "./card-section.css";
import Button from "../../UI/button/button";
import PropTypes from "prop-types";

const HeroSection = ({ title, description, txtButton, descriptionExample }) => {
  return (
    <div className="card-section">
      <div className="section-evento">
        <h5 className="topic-description">{title}</h5>
        <div className="description-section">{description}</div>
        <Button type="primary">{txtButton}</Button>
      </div>
      <div className="section-example">
        <h5 className="topic-example">Ejemplo</h5>
        <div className="description-example">{descriptionExample}</div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  txtButton: PropTypes.string,
  descriptionExample: PropTypes.string,
};

export default HeroSection;
