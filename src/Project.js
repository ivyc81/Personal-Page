import React, { Component } from 'react';
import styled from 'styled-components';
import { projects } from './projects';
// import './Project.css';

const StyledProject = styled.div`
  display: flex;
  width: 100vw;
  height: 94vh;
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  align-items: center;
  justify-content: center;;
`;

const StyledImg = styled.img`
  max-width: 80%;
`;

const StyledLink = styled.a`
  font-size: 2em;
  margin: 0.1em;
  color: black;
`;

class Project extends Component {
  render() {
    const { id } = this.props;
    const { img, title, description, deployedURL, github } = projects[id];
    return (
      <StyledProject className='Project'>
        <StyledCol>
          <StyledImg src={img} alt='profile' />
        </StyledCol>
        <StyledCol>
          <h1>{title}</h1>
          <div>See the app: <a href={deployedURL}><i className="fas fa-globe"></i></a></div>
          <div>See source code: <a href={github}><i className="fab fa-github"></i></a></div>
          <p>{description}</p>
        </StyledCol>
      </StyledProject>
    );
  }
}

export default Project;