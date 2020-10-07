import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      {/* <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16"> */}
      <main>
        {children}
      </main>

      <footer className="bg-yellow-500">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white font-bold">
            JavaScript Ecuador
          </p>

          <p>
            <a
              className="font-bold text-white no-underline"
              href="https://github.com/javascriptecuador/web"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
