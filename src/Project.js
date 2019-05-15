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
  display: ${({ isReady}) => isReady ? 'flex' : 'none'};
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
  padding: 0.1em 0.2em;
  color: ${textColor};
  border-radius: 0.3em;
  border: 1px solid ${textColor};
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
      GIFReady: false,
    }
    this.load = this.load.bind(this);
    this.loadGif = this.loadGif.bind(this);
  }

  componentDidMount(){

  }

  load(){
    this.setState({
      isLoaded: true,
    });
  }

  loadGif() {
    this.setState({
      GIFReady: true,
    });
  }

  showTech(tech){
    return tech.split(',').map((e, i) => <StyledTech key={i}>{e}</StyledTech>)
  }

  render() {
    const { id } = this.props;
    const { img, title, description, deployedURL, github, tech, gif } = projects[id];
    const { isLoaded, GIFReady } = this.state;
    const techArr = this.showTech(tech);
    return (
      <StyledProject className='Project'>
        <StyledCol isLoaded={isLoaded} isReady={!GIFReady} isLeft={true} onLoad={this.load}>
          <StyledImg src={img} alt='profile' />
        </StyledCol>
        <StyledCol isLoaded={isLoaded} isReady={GIFReady} isLeft={true} onLoad={this.loadGif}>
          <StyledImg src={gif} alt='profile' />
        </StyledCol>
        <StyledCol isLoaded={isLoaded} isReady={true}>
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