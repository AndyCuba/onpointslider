import styled, { keyframes } from 'styled-components';

import mainBG from '../../images/1stSlideBG.png';
import footerArrow from '../../images/footerArrow.png';



const scaleUpRing = keyframes`
    from {
        transform: scale(1.0);
    }
    to {
        transform: scale(3.2);
        
    }
`;

const scaleUpCore = keyframes`
    from {
        transform: scale(1.0);
    }
    to {
        transform: scale(8);
    }
`;


const FirstSlideWrapper = styled.div`
    width: 1024px;
    height: 768px;
    background: url(${mainBG}) center/cover;
    position: relative;
    h1 {
        font-size: 47.757px;
        font-family: "GothamProRegular";
        color: rgb(13, 49, 156);
        line-height: 1.2;
        z-index: 37;
        width: 750px;
        padding: 130px 0 0;
        margin-left: 70px;      
    }
    h2 {
        font-size: 17.455px;
        font-family: "LatoRegular";
        color: rgb(13, 49, 156);
        line-height: 1.2;
        text-align: left;
        z-index: 35;          
    }
`;

const Ellipse = styled.div`
    transform: scale(${props => props.scale});
    position: relative;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    width: 53px;
    height: 53px;
    border: 1px solid #d01a36;
    background-color: rgba(247, 139, 31, 0.22);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;   
    div:first-child {
        width: 16.5px;
        height: 16.5px;
        animation: 2s infinite ${scaleUpRing} linear;
        background: #b49e91;
        border: 0.5px solid #d01a36;
        border-radius: 50%;
    }
    div:last-child {
        position: absolute;
        width: 2px;
        height: 2px;
        background-image: -moz-radial-gradient( 50% 50%, circle closest-side, rgb(222,121,27) 1%, rgb(207,20,55) 100%);
        background-image: -webkit-radial-gradient( 50% 50%, circle closest-side, rgb(222,121,27) 1%, rgb(207,20,55) 100%);
        background-image: -ms-radial-gradient( 50% 50%, circle closest-side, rgb(222,121,27) 1%, rgb(207,20,55) 100%);
        border: none;
        border-radius: 50%;
        animation: 2s infinite ${scaleUpCore} linear;
    } 
    
`;

const EllipseTitle = styled.h2`
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    font-size: 17.455px;
    font-family: "LatoRegular";
    color: rgb(13, 49, 156);
    line-height: 1.2;
    text-align: left;
    z-index: 35; 
`;

const FooterEllipse = styled.div`
    display: ${props => props.currentSlide === 'firstSlide' ? 'flex' : 'none'};
    position: fixed;
    left: 150px;
    bottom: -15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
        font-size: 14.327px;
        font-family: "GothamProRegular";
        color: rgb(255, 255, 255);
        line-height: 1.2;
        text-align: left;
    }
    div:nth-child(2) {
        width: 39px;
        height: 17px;
        background: url(${footerArrow}) center/cover;
        padding: 15px 0 20px;
        z-index: 1;
    }
    div:last-child {
        border-radius: 50%;
        background-color: rgb(247, 139, 31);
        box-shadow: 0px 0px 10px 11px rgba(247,139,31,1);        
        width: 724px;
        height: 30px;
    }   
`;

export { 
    FirstSlideWrapper, 
    Ellipse, 
    EllipseTitle,
    FooterEllipse
};