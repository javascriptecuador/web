import React from 'react';
import styles from './persona.module.css';
import PropTypes from 'prop-types'
import emailImg from '../../../../images/icons/email.svg'
import githubImg from '../../../../images/icons/github-small.svg'
import twitterImg from '../../../../images/icons/twitter-small.svg'
import websiteImg from '../../../../images/icons/world.svg'

const Persona = ({ photo, name, rol, description, github, website, email, twitter }) => {
  let githubIcon = null
  if (github) {
    githubIcon = (
      <a className={styles.persona__icon} href={github}>
        <img src={githubImg} />
      </a>
    )
  }

  let websiteIcon = null
  if (website) {
    websiteIcon = (
      <a className={styles.persona__icon} href={website}>
        <img src={websiteImg} />
      </a>
    );
  }

  let emailIcon = null
  if (email) {
    emailIcon = (
      <a className={styles.persona__icon} href={email}>
        <img src={emailImg} />
      </a>
    );
  }

  let twitterIcon = null
  if (twitter) {
    twitterIcon = (
      <a className={styles.persona__icon} href={twitter}>
        <img src={twitterImg} />
      </a>
    );
  }

  return (
    <div className={styles.persona}>
      <div className={styles.persona__body}>
        <div className={styles.persona__photo}>
          <img src={photo} alt={name}/>
        </div>
        <div className={styles.persona__text}>
          <h4 className={styles.persona__name}>{name}</h4>
          <span className={styles.persona__rol}>{rol}</span>
          <p className={styles.persona__description}>{description}</p>
        </div>
        <div className={styles.persona__footer}>
          {githubIcon}
          {websiteIcon}
          {emailIcon}
          {twitterIcon}
        </div>
      </div>
    </div>
  );
}

Persona.propTypes = {
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
};

export default Persona;
