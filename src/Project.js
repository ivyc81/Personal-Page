import React, { Component } from 'react';
import styled from 'styled-components';
import { projects } from './projects';
// import './Project.css';

const StyledProject = styled.div`
  position: relative;
  top: 6vh;
  display: flex;
  height: 90vh;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 100vw;
`;

const StyledImg = styled.img`
  max-width: 80%;
`;

const StyledTech = styled.p`
  margin: 0.1em;
  padding: 0.1em;
  color: black;
  border-radius: 0.5em;
  border: 1px solid grey;
`;

const StyledTechContainer = styled.p`
  display: flex;
`;

class Project extends Component {
  showTech(tech){
    return tech.split(',').map((e, i) => <StyledTech key={i}>{e}</StyledTech>)
  }

  render() {
    const { id } = this.props;
    const { img, title, description, deployedURL, github, tech, gif } = projects[id];
    const techArr = this.showTech(tech);
    return (
      <StyledProject className='Project'>
        <StyledCol>
          <StyledImg src={gif} alt='profile' />
        </StyledCol>
        <StyledCol>
          <h1>{title}</h1>
          <div>See the app: <a href={deployedURL}><i className="fas fa-globe"></i></a></div>
          <div>See source code: <a href={github}><i className="fab fa-github"></i></a></div>
          <p>{description}</p>
          <StyledTechContainer>{techArr}</StyledTechContainer>
        </StyledCol>
      </StyledProject>
    );
  }
}

export default Project;