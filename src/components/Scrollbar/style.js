import styled from 'styled-components';
import ScrollbarThumb from '../../images/ScrollbarThumb.png';

const ScrollbarWrapper = styled.div`
    position: absolute;
    bottom: 70px;
    left: 190px;
    width: 644px;
    height: 11px; 
`;

const ScrollField = styled.div`
    margin: auto;
    width: 620px;
    height: 11px;
    background-color: #435063;
    div:first-child {
        background: #d1eaff;
        width: 620px;
        height: 11px;
    }
`;

const Scroller = styled.div`
    width: 43.5px;
    height: 55.5px;
    position: absolute;
    left: 600px;
    top:-20px;
    border-radius: 2px;
    background: url(${ScrollbarThumb}) center/cover;
    cursor: pointer;
`;


export {
    ScrollbarWrapper,
    ScrollField,
    Scroller
};