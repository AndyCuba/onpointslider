import styled, { createGlobalStyle } from 'styled-components';
import gothamRegular from './fonts/GothamProRegular/GothamProRegular.ttf';
import gothamMedium from './fonts/GothamProMedium/GothamProMedium.ttf';
import gothamLight from './fonts/GothamProLight/GothamProLight.ttf';
import latoBold from './fonts/LatoBold/Lato-Bold.ttf';
import latoSemibold from './fonts/LatoSemibold/Lato-Semibold.ttf';
import latoRegular from './fonts/LatoRegular/Lato-Regular.ttf';
import latoMedium from './fonts/LatoMedium/Lato-Medium.ttf';

const activeThumblerColor = "rgb(247, 139, 31)";
const inactiveThublerColor = "rgb(255, 255, 255)";



const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "GothamProRegular";
    src: url(${gothamRegular}) format("truetype");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "GothamProMedium";
    src: url(${gothamMedium}) format("truetype");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "GothamProLight";
    src: url(${gothamLight}) format("truetype");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "LatoBold";
    src: url(${latoBold}) format("truetype");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "LatoSemibold";
    src: url(${latoSemibold}) format("truetype");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "LatoRegular";
    src: url(${latoRegular}) format("truetype");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "LatoMedium";
    src: url(${latoMedium}) format("truetype");
    font-style: normal;
    font-weight: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    overflow: hidden;
  }
`;

const SliderThumbler = styled.div`
  width: 13.5px;
  height: 50px;
  position: fixed;
  top: 350px;
  right: 25px;
  z-index: 253; 
  div {
      border-radius: 50%;
      background-color: rgb(255, 255, 255);
      width: 13.5px;
      height: 13.5px;
      margin-bottom: 7px;
      cursor: pointer;
      transition: background-color 1s;
    &:first-child {
      background-color: ${props => props.current === 'firstSlide' ? activeThumblerColor : inactiveThublerColor};
    }

    &:nth-child(2) {
      background-color: ${props => props.current === 'secondSlide' ? activeThumblerColor : inactiveThublerColor};
    }

    &:last-child {
      background-color: ${props => props.current === 'thirdSlide' ? activeThumblerColor : inactiveThublerColor};
    }
  }
`;

const IceCube = styled.div`
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background: url(${props => props.background}) center/cover;
`;

export { 
  GlobalStyle, 
  SliderThumbler,
  IceCube
};