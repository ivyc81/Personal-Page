import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.png';
import { navBackgroundColor, navTextColor } from './theme';

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.2em;
  text-decoration: none;
  color: ${navTextColor};

  img {
    height: 4vh;
    width: auto;
  }
`;

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 6vh;
  display: flex;
  align-items: center;
  background-color: ${navBackgroundColor};
  z-index: 1;
  /* box-shadow: grey 1px 1px 2px; */
`;

const StyledDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const StyledNavLink = styled(NavLink)`
  padding: 1em;
  text-decoration: none;
  color: ${navTextColor};

  :hover {
    text-decoration: underline;
  }
`;

class Nav extends Component {
  render() {
    const activeStyle = {
      "fontWeight":"bold",
      "textDecoration":"underline"
    }

    return (
        <StyledNav className="Nav">
          <StyledDiv>
            <StyledLogo to='/'><img src={logo} alt='logo' /><b>Hi, I am Cynthia</b></StyledLogo>
            <div>
            <StyledNavLink exact to='/portfolio' activeStyle={activeStyle}>Portfolio</StyledNavLink>
            <StyledNavLink exact to='/about' activeStyle={activeStyle}>About</StyledNavLink>
            </div>
          </StyledDiv>
        </StyledNav>
    );
  }
}

export default Nav;
