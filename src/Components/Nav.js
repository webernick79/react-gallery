import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/mountains">Mountains</NavLink></li>
      <li><NavLink to="/rivers">Rivers</NavLink></li>
      <li><NavLink to="/oceans">Oceans</NavLink></li>
    </ul>
  </nav>
);

export default Nav;