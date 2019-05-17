import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Homepage from './Homepage';
import Portfolio from './Portfolio';
import Project from './Project';
import About from './About';
import Footer from './Footer';
import { textColor, font, logoFont } from './theme';
// import './App.css';

const StyledApp = styled.div`
  * {
    box-sizing: border-box;
  }

  h1 {
    font-family: ${logoFont};
  }

  div,button {
    font-family: ${font};
  }

  color: ${textColor};
`;

class App extends Component {
  render() {
    return (
      <StyledApp className="App">
        <BrowserRouter>
          <Nav />
          <Route exact path='/portfolio' render={() => <Portfolio />} />
          <Route exact path='/projects/:id' render={(rtProps) => <Project id={rtProps.match.params.id} />} />
          <Route exact path='/about' render={() => <About />} />
          <Route exact path='/' render={() => <Homepage />} />
        </BrowserRouter>
        <Footer />
      </StyledApp>
    );
  }
}

export default App;
