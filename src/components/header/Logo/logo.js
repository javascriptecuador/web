import React from "react";
import escudo from "../../../images/logo-escudo-ec.svg";
import styles from "./logo.module.css";

const Logo = () => (
  <div className={styles.logo}>
    <h1>
      <span className={styles.shield}>
        <img src={escudo} alt="Logo de Javascript Ecuador" />
      </span>
      <span className={styles.legend}>Ecuador.js</span>
    </h1>
  </div>
);

export default Logo;
