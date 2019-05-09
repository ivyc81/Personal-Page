import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import './Project.css';

const StyledDiv = styled.div`
  display: inline-block;
  position: relative;
  width: 25vw;
  height: 25vw;
  overflow: hidden;
  margin: 1em;
  outline: 5px solid #847c77;

  :hover a{
    top: 0;
  }

  @media only screen and (max-width: 600px) {
    width: 40vw;
    height: 40vw;
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
  render() {
    const {img, title, id, tech} = this.props;
    return (
      <StyledDiv className='Project'>
        <StyledImg src={img} alt={title} />
        <StyledLink to={`/projects/${id}`} >
          <h3>{title}</h3>
          <p>{tech}</p>
          <p>{'<-- Click to see more -->'}</p>
        </StyledLink>
      </StyledDiv>
    );
  }
}

export default ProjectCard;