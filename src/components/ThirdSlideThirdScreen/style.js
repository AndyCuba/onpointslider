import styled from 'styled-components';

import mainBG from '../../images/3rdSlideBG.png';

const ThirdSlideThirdScreenWrapper = styled.div`
    width: 1024px;
    height: 768px;
    background: url(${mainBG}) center/cover;
    position: relative;
    flex-shrink: 0;
    h2 {
        font-size: 30px;
        font-family: "GothamProLight";
        color: rgb(255, 255, 255);
        line-height: 1.2; 
        padding: 105px 0 0 115px;
    }
`;

const BCeilsTitle = styled.h3`
    font-size: 21px;
    font-family: "GothamProLight";
    color: rgb(255, 255, 255);
    line-height: 1.2;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        padding-right: 15px;
        font-family: "LatoSemibold";
        font-size: 31px;         
    }
`;

const BCeilsImage = styled.div`
    border-radius: 50%;
    background-color: #43468f;
    opacity: 0.902;
    left: 968px;
    top: 362px;
    width: 88px;
    height: 82.5px;
    text-align: center;
`;

export { 
    ThirdSlideThirdScreenWrapper,
    BCeilsTitle,
    BCeilsImage
};