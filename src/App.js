import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import Homepage from './Homepage';
import Portfolio from './Portfolio';
import Project from './Project';
import About from './About';
import './App.css';

const StyledApp = styled.div`
  height: 100vh;
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
      </StyledApp>
    );
  }
}

export default App;
