import React from "react";
import { Link } from "gatsby";
import styles from "./footer.module.css";
import escudo from "../../images/logo-escudo-ec.svg";
//import SocialNetworks from './social-networks';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.flex}>
      <div className={styles.col}>
        <h4 className={styles.footer__title}>RECURSOS</h4>
        <ul>
          <li>Acerca de</li>
          <Link to="/blog">
            <li>Blog</li>{" "}
          </Link>
          <Link to="/cuentas">
            <li>Cuentas</li>
          </Link>
        </ul>
      </div>
      <div className={styles.col}>
        <h4 className={styles.footer__title}>AYUDA</h4>
        <ul>
          <li>Organizar un Meetup</li>
          <li>Dar una Charla/Taller</li>
          <li>Publicar un Post</li>
          <li>Informar un problema</li>
          <Link to="/code-of-conduct">
            <li>Código de Conducta</li>
          </Link>
        </ul>
      </div>

      <div className={styles.col}>
        <h4 className={styles.footer__title}>COMUNIDAD</h4>
        <ul>
          <Link to="/eventos">
            <li>Eventos</li>
          </Link>
          <li>¿Cómo ayudar?</li>
          <li>Quiero ser Patrocinador</li>
          <li>Registrar mi ciudad</li>
          <li>Descargo de responsabilidad</li>
        </ul>
      </div>

      <div className={styles.col}>
        <h1>Ecuador.js</h1>
        <img src={escudo} alt="Escudo del Ecuador" />
        {/* <SocialNetworks /> */}
      </div>
    </div>

    <p>
      ¿Encontraste un error?{" "}
      <span>
        <a
          href="https://github.com/javascriptecuador/web/issues/new/choose"
          target="_blank"
        >
          Repórtalo{" "}
        </a>
      </span>
    </p>

    <h2>2019 - 2020 Ecuador.js</h2>
    <h3>All rights reserved</h3>
  </footer>
);

export default Footer;
