import React from "react";
import styles from "./author.module.css";
import githubImg from "../../images/icons/github-small.svg";
import emailImg from "../../images/icons/email.svg";
import PropTypes from "prop-types";

const Author = ({ name, photo, date, github, email }) => {
  let githubIcon = null;
  if (github) {
    githubIcon = (
      <a className={styles.author__icon} href={github}>
        <img src={githubImg} />
      </a>
    );
  }

  let emailIcon = null;
  if (email) {
    emailIcon = (
      <a className={styles.author__icon} href={email}>
        <img src={emailImg} />
      </a>
    );
  }
  return (
    <div className={styles.author}>
      <div className={styles.author__image}>
        <img src={photo} alt={name} />
      </div>
      <div className={styles.author__info}>
        <p className={styles.author__name}>{name}</p>
        <p className={styles.author__date}>{date}</p>
        <div>
          {githubIcon}
          {emailIcon}
        </div>
      </div>
    </div>
  );
};

Author.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  date: PropTypes.string,
  github: PropTypes.string,
  email: PropTypes.string,
};

export default Author;
