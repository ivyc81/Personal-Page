import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import homepage from './homepage.png';
import blueprint from './blueprint.jpg';

// import './Homepage.css';

const StyledHomepage = styled.div`
  position: relative;
  top: 6vh;
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 32vw;

  @media only screen and (max-width: 600px) {
    height: 64vw;
`;

const ContainerLeft = styled.div`
  position: relative;
  left: ${({ isLoaded }) => {
    return isLoaded ? '0' : '-50vw'
  }};
  overflow: hidden;
  display: flex;
  width: ${({ isHovered, isRightHovered }) => {
    return isHovered ? '40vw' : isRightHovered ? '0px' : '20vw'}};
  transition: 1s all;

  @media only screen and (max-width: 600px) {
    width: 40vw;
`;

const ContainerRight = styled.div`
  position: relative;
  left: ${({ isLoaded }) => {
    return isLoaded ? '0' : '50vw'
  }};
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  width: ${({ isHovered, isLeftHovered }) => {
    return isHovered ? '40vw' : isLeftHovered ? '0px' : '20vw'}};
  transition: 1s all;

  @media only screen and (max-width: 600px) {
    width: 40vw;
`;

const StyledImg = styled.img`
  height: auto;
  width: 40vw;
  position: relative;
  top: 0;
  left: 0;

  @media only screen and (max-width: 600px) {
    width: 80vw;
`;

const StyledH1 = styled.h1`
  padding: 5px 7px;
`;

const StyledButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items:${({ isLeft }) => {
    return isLeft ? 'flex-end' : 'flex-start'
  }};
  justify-content: center;
  padding: 0.5em;
  color: #328CC1;
  border-radius: 3px;
  text-decoration: none;
  width: 25vw;
  margin: 1em;
  visibility: ${({ isLoaded }) => {
    return isLoaded ? "visible" : "hidden"
  }};
  opacity: ${({ isLoaded }) => {
    return isLoaded ? "1" : "0"
  }};
  transition: 2s all;

  @media only screen and (max-width: 600px) {
    display: none;
`;

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state={
      isLeftHovered: false,
      isRightHovered: false,
      load: false,
    };
    this.mouseOverLeft = this.mouseOverLeft.bind(this);
    this.mouseOverRight = this.mouseOverRight.bind(this);
    this.mouseOutLeft = this.mouseOutLeft.bind(this);
    this.mouseOutRight = this.mouseOutRight.bind(this);
    this.load = this.load.bind(this);
  }

  mouseOverLeft(evt) {
    this.setState({isLeftHovered: true})
  }

  mouseOverRight(evt){
    this.setState({isRightHovered: true})
  }

  mouseOutLeft(evt) {
    this.setState({isLeftHovered: false})
  }

  mouseOutRight(evt) {
    this.setState({isRightHovered: false})
  }

  load(evt){
    this.setState({load: true})
  }

  render() {
    return (
      <StyledHomepage className='Homepage'>
        <Container onLoad={this.load}>
          <StyledButton
            to='/about'
            onMouseOver={this.mouseOverLeft}
            onMouseOut={this.mouseOutLeft}
            isLoaded={this.state.load}
            isLeft={true}
          >
            <div><h2>About me</h2></div>
            <div>From structural engineering</div>
            <div>To software engineering</div>
          </StyledButton>
          <ContainerLeft
            isLoaded={this.state.load}
            isHovered={this.state.isLeftHovered}
            isRightHovered={this.state.isRightHovered}
          >
            <StyledImg src={blueprint} alt='homepage'/>
          </ContainerLeft>
          <ContainerRight
            isLoaded={this.state.load}
            isHovered={this.state.isRightHovered}
            isLeftHovered={this.state.isLeftHovered}
          >
            <StyledImg src={homepage} alt='homepage'/>
          </ContainerRight>
          <StyledButton
            to='/portfolio'
            onMouseOver={this.mouseOverRight}
            onMouseOut={this.mouseOutRight}
            isLoaded={this.state.load}
            isLeft={false}
          >
            <div><h2>See My Work</h2></div>
            <div>All the things I learned</div>
            <div>My achievements</div>
          </StyledButton>
        </Container>
        <StyledH1>Hi I am Cynthia</StyledH1>
        <p>A <u>structural engineer</u> becoming <u>web developer</u></p>
      </StyledHomepage>
    );
  }
}

export default Homepage;