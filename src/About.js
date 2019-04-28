import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profilePhoto from './placeholder.gif';
import resume from './resume.pdf';
const EMAIL = 'ivyc8192@gmail.com';
const GITHUB_URL = 'https://github.com/ivyc81';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ivyc8192/';

const StyledAbout = styled.div`
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

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled.a`
  font-size: 2em;
  margin: 0.1em;
  color: black;
`;

const StyledButton = styled.a`
  height: 28px;
  background-color: black;
  color: white;
  border-radius: 3px;
  text-decoration: none;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 0 8px;
  font-weight: bold;
`;

const StyledI = styled.i`
  margin-left: 4px;
`;

class About extends Component {
  render() {
    return (
      <StyledAbout className='About'>
        <StyledCol>
          <StyledImg src={profilePhoto} alt='profile' />
        </StyledCol>
        <StyledCol>
          <h1>Please connect with me</h1>
          <StyledButtons>
            <StyledLink href={`mailto:${EMAIL}`}><i className="fas fa-envelope-square"></i></StyledLink>
            <StyledLink href={LINKEDIN_URL}><i className="fab fa-linkedin"></i></StyledLink>
            <StyledLink href={GITHUB_URL}><i className="fab fa-github-square"></i></StyledLink>
            <StyledButton href={resume} download>My resume<StyledI className="fas fa-file"></StyledI></StyledButton>
          </StyledButtons>
          <p>A structural engineer becoming web developer</p>
        </StyledCol>
      </StyledAbout>
    );
  }
}

export default About;