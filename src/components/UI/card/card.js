import React from "react";
import PropTypes from "prop-types";
import styles from "./card.module.css";
import { Link } from "gatsby";

const Card = ({
  imgURL,
  topic,
  dateTime,
  descriptionTitle,
  description,
  link,
  readMoreColor,
  topicFontSize,
  viewportHeight,
  textSpacing,
  lineHeight,
}) => (
  <div className={styles.card}>
    <div className={styles.card__header}>
      <div className={styles.card__imgViewport} style={{ height: viewportHeight }}>
        <img src={imgURL} />
      </div>
    </div>
    <div className={styles.card__body}>
      <h5
        className={styles.card__topic}
        style={{
          fontSize: topicFontSize,
          marginBottom: textSpacing,
          lineHeight,
        }}>
        {topic}
      </h5>
      <p className={styles.card__date} style={{ lineHeight }}>
        {dateTime}
      </p>
      <div className={styles.card__description} style={{ marginTop: textSpacing }}>
        <p className={styles.card__descriptionText}>
          <strong className={styles.card__descriptionTitle}>{descriptionTitle}:</strong>
          {description}{" "}
          <Link
            to={link}
            className={styles.card_readmore}
            style={{ color: readMoreColor }}>
            Leer más
          </Link>
        </p>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  imgURL: PropTypes.string,
  topic: PropTypes.string,
  dateTime: PropTypes.string,
  descriptionTitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  readMoreColor: PropTypes.string,
  viewportHeight: PropTypes.string,
  textSpacing: PropTypes.string,
  lineHeight: PropTypes.string,
};

Card.defaultProps = {
  date: null,
  descriptionTitle: "Descripción",
  readMoreColor: "#27ae60",
  topicFontSize: "2rem",
  viewportHeight: "136.13px",
  textSpacing: "0.5em",
  lineHeight: "auto",
};

export default Card;
