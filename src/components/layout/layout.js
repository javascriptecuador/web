import PropTypes from "prop-types";
import React from "react";
import "./layout.css";
import Footer from "../footer/footer";
import Header from "../header";
import SEO from "../seo";


const Layout = ({ children }) => (
  <div className="layout flex flex-col min-h-screen font-sans text-gray-900">
    <Header />
    <main className="main-content">{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
