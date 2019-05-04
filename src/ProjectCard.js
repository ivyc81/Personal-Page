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

  :hover p{
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

const StyledP = styled.p`
  margin: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #090909b3;
  color: white;
  position: absolute;
  top: 100%;
  transition: top 0.6s;
`;

class ProjectCard extends Component {
  render() {
    const {img, title, id} = this.props;
    return (
      <StyledDiv className='Project'>
        <StyledImg src={img} alt={title} />
        <Link to={`/projects/${id}`} ><StyledP>{title}</StyledP></Link>
      </StyledDiv>
    );
  }
}

export default ProjectCard;