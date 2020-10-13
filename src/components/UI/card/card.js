import React from 'react';
import PropTypes from 'prop-types'
import './card.css';
import { Link } from "gatsby";


const Card = ({ imgURL, topic, date, descriptionTitle, description, link, readMoreColor, topicFontSize }) => (
  <div className="card">
    <div className="card-header">
      <div className="img-viewport">
        <img src={imgURL} />
      </div>
    </div>
    <div className="card-body">
      <h5 className="topic" style={{fontSize: topicFontSize}}>{topic}</h5>
      <p className="date">{date}</p>
      <div className="description">
        <p className="description-text">
          <strong className="description-title">{descriptionTitle}:</strong>
          {description} <Link to={link} className="read-more" style={{color: readMoreColor}}>Leer más</Link>
        </p>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  imgURL: PropTypes.string,
  topic: PropTypes.string,
  date: PropTypes.string,
  descriptionTitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  readMoreColor: PropTypes.string,
}

Card.defaultProps = {
  date: null,
  descriptionTitle: 'Descripción',
  readMoreColor: "#27ae60",
  topicFontSize: "2rem"
}

export default Card;
