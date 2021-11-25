import { Link } from "gatsby";
import React, { useState } from "react";
import "./header.css";
import escudo from "../../images/logo-escudo-ec.svg";
import Logo from "./Logo/logo";

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  let expanededClass = "";
  if (isExpanded) {
    expanededClass = "expanded";
  }

  return (
    <header>
      <div className="nav-wrap">
        <Link to="/" className="nav__logo-image--sm" activeClassName="active">
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

        <nav className={`navbar ${expanededClass}`}>
          <Link
            className="nav__item"
            to="/"
            key="HOME"
            activeClassName="active"
          >
            HOME
          </Link>
          <Link
            className="nav__item"
            to="/eventos"
            key="EVENTOS"
            activeClassName="active"
            partiallyActive={true}
          >
            EVENTOS
          </Link>
          <Link
            className="nav__item"
            to="/comunidad"
            key="COMUNIDAD"
            activeClassName="active"
            partiallyActive={true}
          >
            COMUNIDAD
          </Link>
          <Link
            className="nav__item"
            to="#ciudades"
            key="CIUDADES"
            activeClassName="active"
            partiallyActive={true}
          >
            CIUDADES
          </Link>
          <Link to="/" className="nav__logo" activeClassName="active">
            <Logo />
          </Link>
          <Link
            className="nav__item"
            to="/blog"
            key="BLOG"
            activeClassName="active"
            partiallyActive={true}
          >
            BLOG
          </Link>
          <Link
            className="nav__item"
            to="/code-of-conduct"
            key="CÓDIGO DE CONDUCTA"
            activeClassName="active"
          >
            CÓDIGO DE CONDUCTA
          </Link>
          <Link
            className="nav__item"
            to="/sponsors"
            key="SPONSORS"
            activeClassName="active"
            partiallyActive={true}
          >
            SPONSORS
          </Link>
          <Link
            className="nav__item"
            to="/cuentas"
            key="CUENTAS"
            activeClassName="active"
            partiallyActive={true}
          >
            CUENTAS
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
