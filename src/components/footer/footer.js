import React from 'react'

const Footer = () => (
  <footer className="bg-yellow-500">
    <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
      <p className="text-white font-bold">JavaScript Ecuador</p>

      <p>
        <a
          className="font-bold text-white no-underline"
          href="https://github.com/javascriptecuador/web"
          target="_blank"
          rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </nav>
  </footer>
);

export default Footer;
