import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { linkColor } from './theme';
// import './Project.css';

const StyledDiv = styled.div`
  display: inline-block;
  position: relative;
  width: 25vw;
  height: 25vw;
  overflow: hidden;
  margin: 1em;
  outline: 1.5px solid ${linkColor};

  :hover a{
    top: 0;
  }

  ::before {
    position: absolute;
    background-color: #fff;
    top: ${({ isLoaded }) =>{
      return isLoaded? '100%' : 0;
    }};
    left: 0;
    width: 50%;
    content: "";
    height: 100%;
    transition: 1.5s all;
  }

  ::after {
    position: absolute;
    background-color: #fff;
    bottom: ${({ isLoaded }) =>{
      return isLoaded? '100%' : 0;
    }};
    right: 0;
    width: 50%;
    content: "";
    height: 100%;
    transition: 1.5s all;
  }

  @media only screen and (max-width: 600px) {
    width: 60vw;
    height: 60vw;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledLink = styled(Link)`
  margin: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #847c77bd;
  color: white;
  position: absolute;
  top: 100%;
  transition: top 0.6s;
  text-decoration: none;
`;

class ProjectCard extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoaded: false,
    }
    this.load = this.load.bind(this);
  }

  load(){
    this.setState({
      isLoaded: true,
    });
  }

  render() {
    const {img, title, id, tech} = this.props;
    const {isLoaded} = this.state;
    return (
      <StyledDiv className='Project' onLoad={this.load} isLoaded={isLoaded}>
        <StyledImg src={img} alt={title} />
        <StyledLink to={`/projects/${id}`} >
          <h3>{title}</h3>
          <p>{tech}</p>
        </StyledLink>
      </StyledDiv>
    );
  }
}

export default ProjectCard;