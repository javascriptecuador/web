import PropTypes from "prop-types";
import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./layout.module.css";
import pathImg from "../../images/background/path.svg";
import BlogSection from "../blog-section/blog-section";
import Subscribe from "../subscribe/subscribe";

const Layout = ({ isHome, children }) => {
  let background = "";
  let blogSection = null;

  if (isHome) {
    background = pathImg;
    blogSection = <BlogSection />;
  }

  return (
    <div
      className={styles.layout}
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <Subscribe />
      {/* Comment this section until it will be implemented */}
      {/* {blogSection} */}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  isHome: PropTypes.bool, // Indicates whether it is the Homepage or not
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  isHome: false,
};

export default Layout;
