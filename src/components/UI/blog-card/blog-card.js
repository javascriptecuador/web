import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./blog-card.module.css";

const BlogCard = ({
  imgUrl,
  title,
  titleFontSize,
  description,
  descriptionTitle,
  link,
  author,
  readMoreColor,
  date,
  timeago,
  orientation,
}) => {
  const _or = orientation === "h";
  const styleCard = cx(styles.card, _or ? styles.cardH : styles.cardV);
  const styleCardImg = cx(styles.card__img);
  const styleCardBody = cx(_or ? styles.card__bodyH : styles.card__bodyV);

  return (
    <div className={styleCard}>
      <div
        className={styleCardImg}
        style={{
          backgroundImage: `url('${imgUrl}')`,
        }}
      ></div>
      <div className={styleCardBody}>
        <div className={styles.card__content}>
          <h6 className={styles.card__title} style={titleFontSize}>
            {title}
          </h6>
          <p className={styles.card__description}>
            {descriptionTitle}
            {description}
          </p>
          <Link
            className={styles.card_readmore}
            to={link}
            style={readMoreColor}
          >
            Leer más
          </Link>
        </div>
        <div className={styles.card__footer}>
          <span className={styles.card__author}>{author}</span>
          <span className={styles.card_date}>{date}</span>
          <span className={styles.card__timeAgo}>{timeago}</span>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  titleFontSize: PropTypes.string,
  description: PropTypes.string,
  descriptionTitle: PropTypes.string,
  link: PropTypes.string,
  author: PropTypes.string,
  readMoreColor: PropTypes.string,
  date: PropTypes.string,
  timeago: PropTypes.string,
  orientation: PropTypes.oneOf(["v", "h"]).isRequired,
};

export default BlogCard;
