import React from 'react';

const Header = () => (
  <nav id="nav">
    <h1 className="logo">
      Math magician
    </h1>
    <ul className="navlinks">
      <li>
        <a href="/">Home</a>
      </li>
      <hr className="rotate" />
      <li>
        <a href="/calculator">Calculator</a>
      </li>
      <hr className="rotate" />
      <li>
        <a href="/quotes">Quotes</a>
      </li>
    </ul>
  </nav>
);
export default Header;
