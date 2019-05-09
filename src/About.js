import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { aboutMe } from './data';

const StyledAbout = styled.div`
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
    const { profilePhoto, resume, email, gitHub, linkedIn, bio } = aboutMe;
    return (
      <StyledAbout className='About'>
        <StyledCol>
          <StyledImg src={profilePhoto} alt='profile' />
        </StyledCol>
        <StyledCol>
          <h1>Please connect with me</h1>
          <StyledButtons>
            <StyledLink href={`mailto:${email}`}><i className="fas fa-envelope-square"></i></StyledLink>
            <StyledLink href={linkedIn}><i className="fab fa-linkedin"></i></StyledLink>
            <StyledLink href={gitHub}><i className="fab fa-github-square"></i></StyledLink>
            <StyledButton href={resume} download>My resume<StyledI className="fas fa-file"></StyledI></StyledButton>
          </StyledButtons>
          <p>{bio}</p>
        </StyledCol>
      </StyledAbout>
    );
  }
}

export default About;