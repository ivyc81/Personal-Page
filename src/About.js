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
    width: 90vw;
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

const StyledAnimation = styled.div`
  max-width: 80%;
  position: relative;
  overflow: hidden;

  :before {
    position: absolute;
    background-color: #fff;
    top: ${({ isLoaded }) =>{
      return isLoaded? '100%' : 0;
    }};
    left: 0;
    width: 50%;
    content: "";
    height: 100%;
    transition: 2s all;
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
    transition: 2s all;
  }
`;

const StyledImg = styled.img`
  width: 100%;
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
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
    };
    this.load = this.load.bind(this);
  }

  load(){
    this.setState({
      isLoaded: true,
    })
  }

  renderBio(bio){
    return bio.map((p, i) =><div key={i}>{p}</div>);
  }

  render() {
    const { profilePhoto, resume, email, gitHub, linkedIn, bioTitle, bio } = aboutMe;
    const bioP = this.renderBio(bio);
    const {isLoaded} = this.state;

    return (
      <StyledAbout className='About'>
        <StyledCol onLoad={this.load}>
          <StyledAnimation isLoaded={isLoaded}>
            <StyledImg src={profilePhoto} alt='profile'/>
          </StyledAnimation>
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