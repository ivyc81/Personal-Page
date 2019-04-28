import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.png';
import './Nav.css';

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.3em;
  text-decoration: none;
  color: white;
  font-family: 'Fredericka the Great', cursive;

  img {
    max-width: 50px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
  background-color: black;
`;

const StyledNavLink = styled(NavLink)`
  padding: 1em;
  text-decoration: none;
  color: white;
  `;

  class Nav extends Component {
    render() {
      const activeStyle = {
        "fontWeight": "bold",
        "backgroundColor": "#d9B310",
        "color": "#328CC1",
    }

    return (
      <StyledNav className="Nav">
        <StyledLogo to='/'><img src={logo} alt='logo' />Hi, I am Cynthia</StyledLogo>
        <div>
        <StyledNavLink exact to='/portfolio' activeStyle={activeStyle}>Portfolio</StyledNavLink>
        <StyledNavLink exact to='/about' activeStyle={activeStyle}>About</StyledNavLink>
        </div>
      </StyledNav>
    );
  }
}

export default Nav;
