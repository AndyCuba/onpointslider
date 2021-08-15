import styled from 'styled-components';

import mainBG from '../../images/2ndSlideBG.png';

const SecondSlideWrapper = styled.div`
    width: 1024px;
    height: 768px;
    position: relative;
    background: url(${mainBG}) center/cover;
    z-index: 2;
    display: flex;
    justify-content: center;
    h2 {
        width: 475px;
        padding-top: 240px;
        font-size: 47.757px;
        font-family: "GothamProLight";
        color: rgb(255, 255, 255);
        line-height: 1.2;
        text-align: center;          
    }
`;

export { SecondSlideWrapper };