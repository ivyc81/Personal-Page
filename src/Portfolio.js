import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { projects } from './data';
// import './Portfolio.css';

const StyledPortfolio = styled.div`
  position: relative;
  top: 6vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


class Portfolio extends Component {
  renderProjects(){
    return Object.keys(projects).map((key) => {
      const {img, title, id, tech, gif} = projects[key];
      return <ProjectCard key={key} img={img} title={title} id={id} tech={tech} gif={gif}/>});
  }

  render() {
    const projects = this.renderProjects();

    return (
      <StyledPortfolio className='Portfolio'>
        <h1>Projects</h1>
        <StyledDiv>
          { projects }
        </StyledDiv>
      </StyledPortfolio>
    );
  }
}

export default Portfolio;