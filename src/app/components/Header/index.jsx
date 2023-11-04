'use client';

import React from 'react';
import HeaderStyled from './styles';

const Header = () => (
  <HeaderStyled>
    <ul className="navbar">
      <li className="navbar-item">
        <a href="">Home</a>
      </li>
      <li className="navbar-item">
        <a href="">About</a>
      </li>
      <li className="navbar-item">
        <a href="">Projects</a>
      </li>
      <li className="navbar-item">
        <a href="">Skills</a>
      </li>
      <li className="navbar-item">
        <a href="">Contact Me</a>
      </li>
    </ul>
  </HeaderStyled>
);

export default Header;
