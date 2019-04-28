import React, { Component } from 'react';
import styled from 'styled-components';
import blueprint from './blueprint.jpg';
// import './Homepage.css';

const StyledHomepage = styled.div`
  display: flex;
  width: 100vw;
  height: 94vh;
  justify-content: center;
  align-items: center;
  font-family: 'Fredericka the Great', cursive;
`;

const StyledImg = styled.img`
  max-width: 80vw;
  height: auto;
`;

class Homepage extends Component {
  render() {
    return (
      <StyledHomepage className='Homepage'>
        <StyledImg src={blueprint} alt='blueprint' />
        <h1>Hi i am Cynthia</h1>
      </StyledHomepage>
    );
  }
}

export default Homepage;