import React, { Component } from 'react';
import styled from 'styled-components';
import { projects } from './data';
import { linkColor, textColor } from './theme';
// import './Project.css';

const StyledProject = styled.div`
  position: relative;
  top: 6vh;
  display: flex;
  height: 90vh;
  width: 80vw;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const StyledCol = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
  left: ${({ isLoaded, isLeft }) => {
    return isLoaded  ? '0' : isLeft? '-50vw' : '50vw';
  }};
  transition: 1s all;

  @media only screen and (max-width: 600px) {
    width: 100%;
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

const StyledLink = styled.a`
  color: ${linkColor};
  text-decoration: none;

  :hover {
    text-decoration: underline;
    color: ${textColor};
  }
`;

const StyledTechContainer = styled.p`
  display: flex;
`;

class Project extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
    }
    this.load = this.load.bind(this);
  }

  load(){
    this.setState({
      isLoaded: true,
    });
  }

  showTech(tech){
    return tech.split(',').map((e, i) => <StyledTech key={i}>{e}</StyledTech>)
  }

  render() {
    const { id } = this.props;
    const { img, title, description, deployedURL, github, tech, gif } = projects[id];
    const { isLoaded } = this.state;
    const techArr = this.showTech(tech);
    return (
      <StyledProject className='Project' onLoad={this.load}>
        <StyledCol isLoaded={isLoaded} isLeft={true}>
          <StyledImg src={gif} alt='profile' />
        </StyledCol>
        <StyledCol isLoaded={isLoaded}>
          <h1>{title}</h1>
          { deployedURL && <div><StyledLink href={deployedURL}><i className="fas fa-globe"></i> See the app </StyledLink></div> }
          { github && <div><StyledLink href={github}><i className="fab fa-github"></i> See source code </StyledLink></div> }
          <p>{description}</p>
          <StyledTechContainer>{techArr}</StyledTechContainer>
        </StyledCol>
      </StyledProject>
    );
  }
}

export default Project;