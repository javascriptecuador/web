import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import "./Nav.css";
import escudo from "../../images/logo-escudo-ec.svg";
import Logo from "./Logo";

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <div className="nav-wrap">
        <Link to="/" className="nav__logo-image--sm">
          <img className="nav__logo-image--sm" src={escudo} alt="Logo" />
          <h4 className="nav__logo-title--sm">Ecuador.js</h4>
        </Link>
        <button
          className="nav__btn"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav className={`${isExpanded ? `block` : `hidden`} navbar `}>
          <Link className="nav__item" to="/" key="HOME">
            HOME
          </Link>
          <Link className="nav__item" to="/eventos" key="EVENTOS">
            EVENTOS
          </Link>
          <Link className="nav__item" to="/comunidad" key="COMUNIDAD">
            COMUNIDAD
          </Link>
          <Link className="nav__item" to="/ciudades" key="CIUDADES">
            CIUDADES
          </Link>
          <Link to="/" className="nav__logo">
            <Logo />
          </Link>
          <Link className="nav__item" to="/blog" key="BLOG">
            BLOG
          </Link>
          <Link
            className="nav__item"
            to="/code-of-conduct"
            key="CÓDIGO DE CONDUCTA"
          >
            CÓDIGO DE CONDUCTA
          </Link>
          <Link className="nav__item" to="/sponsors" key="SPONSORS">
            SPONSORS
          </Link>
          <Link className="nav__item" to="/cuentas" key="CUENTAS">
            CUENTAS
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
