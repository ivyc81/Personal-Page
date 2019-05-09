import React, { Component } from 'react';
import styled from 'styled-components';
import { aboutMe } from './data';
import { linkColor, textColor } from './theme';

const StyledAbout = styled.div`
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
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
`;

const StyledImg = styled.img`
  max-width: 80%;
`;

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  margin: 0.67em 0;
`;

const StyledLink = styled.a`
  font-size: 2em;
  margin: 0.1em;
  color: ${linkColor};

  :hover {
    color: ${textColor};
  }
`;

const StyledButton = styled.a`
  height: 28px;
  background-color: ${linkColor};
  color: white;
  border-radius: 3px;
  text-decoration: none;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 0 8px;
  font-weight: bold;

  :hover {
    background-color: ${textColor};
  }
`;

const StyledI = styled.i`
  margin-left: 4px;
`;

class About extends Component {
  renderBio(bio){
    return bio.map((p, i) =><div key={i}>{p}</div>);
  }

  render() {
    const { profilePhoto, resume, email, gitHub, linkedIn, bioTitle, bio } = aboutMe;
    const bioP = this.renderBio(bio);

    return (
      <StyledAbout className='About'>
        <StyledCol>
          <StyledImg src={profilePhoto} alt='profile' />
        </StyledCol>
        <StyledCol>
          <h1>Please connect with me</h1>
          <h3>{bioTitle}</h3>
          <StyledButtons>
            <StyledLink href={`mailto:${email}`}><i className="fas fa-envelope-square"></i></StyledLink>
            <StyledLink href={linkedIn}><i className="fab fa-linkedin"></i></StyledLink>
            <StyledLink href={gitHub}><i className="fab fa-github-square"></i></StyledLink>
            <StyledButton href={resume} download>My resume<StyledI className="fas fa-file"></StyledI></StyledButton>
          </StyledButtons>
          {bioP}
        </StyledCol>
      </StyledAbout>
    );
  }
}

export default About;