import React, { Component } from 'react';
import styled from 'styled-components';
import { footerBackgroundColor } from './theme';

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${footerBackgroundColor};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 4vh;
  color: white;
  font-size: 0.8em;

  @media only screen and (max-width: 600px) {
    display: none;
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter className="Footer">
        <p>Background picture from: https://dsps.lib.uiowa.edu/clip/library/red-oak/</p>
        <p>Copyright © 2019 Cynthia Lu.</p>
      </StyledFooter>
    );
  }
}

export default Footer;
