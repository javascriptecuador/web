import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import "./Nav.css";
import escudo from "../../images/Logo-escudo-ec.svg";
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
        <Link to="/" className="escudo">
          <img className="escudo" src={escudo} alt="Logo" />
          <h4 className="titulo">Ecuador.js</h4>
        </Link>
        <button
          className="btn-hambur"
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
          <Link className="item" to="/" key="HOME">
            HOME
          </Link>
          <Link className="item" to="/eventos" key="EVENTOS">
            EVENTOS
          </Link>
          <Link className="item" to="/comunidad" key="COMUNIDAD">
            COMUNIDAD
          </Link>
          <Link className="item" to="/ciudades" key="CIUDADES">
            CIUDADES
          </Link>
          <Link to="/" className="logo">
            <Logo />
          </Link>
          <Link className="item" to="/blog" key="BLOG">
            BLOG
          </Link>
          <Link className="item" to="/code-of-conduct" key="CÓDIGO DE CONDUCTA">
            CÓDIGO DE CONDUCTA
          </Link>
          <Link className="item" to="/sponsors" key="SPONSORS">
            SPONSORS
          </Link>
          <Link className="item" to="/cuentas" key="CUENTAS">
            CUENTAS
          </Link>
        </nav>
      </div>
    </header>
  );

  // return (
  //   <header className="bg-transparent">
  //     <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
  //       <Link to="/">
  //         <h4 className="flex items-center text-black no-underline">Inicio</h4>
  //       </Link>

  //       <button
  //         className="items-center block px-3 py-2 text-black border border-black rounded md:hidden"
  //         onClick={() => toggleExpansion(!isExpanded)}
  //       >
  //         <svg
  //           className="w-3 h-3 fill-current"
  //           viewBox="0 0 20 20"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <title>Menu</title>
  //           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  //         </svg>
  //       </button>

  //       <nav
  //         className={`${
  //           isExpanded ? `block` : `hidden`
  //         } md:block md:items-center w-full md:w-auto`}
  //       >
  //         {[
  //           {
  //             route: `/comunidad`,
  //             title: `Comunidad`,
  //           },
  //           {
  //             route: `/blog`,
  //             title: `Blog`,
  //           },
  //           {
  //             route: `/code-of-conduct`,
  //             title: `Código de Conducta`,
  //           },
  //           {
  //             route: `/sponsors`,
  //             title: `Sponsors`,
  //           },
  //         ].map((link) => (
  //           <Link
  //             className="block mt-4 text-black no-underline md:inline-block md:mt-0 md:ml-6"
  //             key={link.title}
  //             to={link.route}
  //           >
  //             {link.title}
  //           </Link>
  //         ))}
  //       </nav>
  //     </div>
  //   </header>
  // );
};

export default Header;
