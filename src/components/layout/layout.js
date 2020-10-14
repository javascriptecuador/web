import PropTypes from "prop-types";
import React from "react";
import Footer from "../footer/footer";
import Header from "../header";
import styles from "./layout.module.css";
import pathImg from '../../images/background/path.svg';
import BlogSection from '../blog-section/blog-section';
import Subscribe from "../subscribe/subscribe";

const Layout = ({ home, children }) => {
  let background = ''
  let blogSection = null

  if (home) {
    background = pathImg
    blogSection = <BlogSection />
  }

  return (
    <div
      className={styles.layout}
      style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Subscribe />
      {blogSection}
      <Footer />
    </div>
  );
}



Layout.propTypes = {
  home: PropTypes.bool, // Indicates whether it is the homepage or not
  children: PropTypes.node.isRequired,
};

Layout.propTypes = {
  home: false
}

export default Layout;
