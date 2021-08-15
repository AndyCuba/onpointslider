import styled, { keyframes } from 'styled-components';

import mainBG from '../../images/1stSlideBG.png';
import ellipseBG from '../../images/ellipseBG.png';
import ellipseCore from '../../images/ellipseCore.png';
import ellipseRing from '../../images/ellipseRing.png';
import footerArrow from '../../images/footerArrow.png';



const scaleUpRing = keyframes`
    from {
        transform: scale(1.0);
        background: url(${ellipseRing}) center/cover;
    }
    to {
        transform: scale(3.24);
        background: url(${ellipseBG}) center/cover;
    }
`;

const scaleUpCore = keyframes`
    from {
        transform: scale(1.0); 
    }
    to {
        transform: scale(5);
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
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    width: 53.5px;
    height: 53.5px;
    background: url(${ellipseBG}) center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        width: 16.5px;
        height: 16.5px;
        background: url(${ellipseRing}) center/cover;
        animation: 2s infinite ${scaleUpRing} linear;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
            width: 2px;
            height: 2px;
            background: url(${ellipseCore}) center/cover;
            animation: 2s infinite ${scaleUpCore} linear;
        }
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