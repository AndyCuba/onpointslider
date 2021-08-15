import styled from 'styled-components';



const ThirdSlideWrapper = styled.div`
    width: 1024px;
    height: 768px;
    position: relative;
`;

const Slider = styled.div`
    overflow: hidden;
    height: 768px;
    position: relative;
    transition: transform 2s;
`;

const SliderTrack = styled.div`
    overflow-x: scroll;
    width: 1024px;
    display: flex;
    position: absolute;
    left: 0;
	bottom: 0;
`;

export { 
    ThirdSlideWrapper,
    Slider,
    SliderTrack
};