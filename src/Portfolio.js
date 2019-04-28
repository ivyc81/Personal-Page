import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { projects } from './projects';
// import './Portfolio.css';

const StyledPortfolio = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;


class Portfolio extends Component {
  renderProjects(){
    return Object.keys(projects).map((key) => <ProjectCard key={key} img={projects[key].img} title={projects[key].title} id={projects[key].id}/>);
  }

  render() {
    const projects = this.renderProjects();

    return (
      <StyledPortfolio className='Portfolio'>
        <h1>Projects</h1>
        <div>
          { projects }
        </div>
      </StyledPortfolio>
    );
  }
}

export default Portfolio;