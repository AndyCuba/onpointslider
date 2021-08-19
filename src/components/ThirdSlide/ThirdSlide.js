import React, { useEffect, useRef, useState } from 'react';

import {  
    Slider,
    SliderTrack,
    ThirdSlideWrapper 
} from './style';

import ThirdSlideThridScreen from '../ThirdSlideThirdScreen/ThirdSlideThirdScreen';
import ThirdSlideFirstScreen from '../ThirdSlideFirstScreen/ThirdSlideFirstScreen';
import ThirdSlideSecondScreen from '../ThirdSlideSecondScreen/ThirdSlideSecondScreen';
import Scrollbar from '../Scrollbar/Scrollbar';

const ThirdSlide = (props) => {
    const { onTouchWindowStart, onTouchWindowEnd } = props;
    const container = useRef(null);
    const viewport = useRef(null);
    const contentBox = useRef(null);
    const scrollerThumb = useRef(null);
    const firstSlide = 'firstSlide';
    const secondSlide = 'secondSlide';
    const thirdSlide = 'thirdSlide';
    const [currentSlide, setSlide] = useState(thirdSlide);
    const [offset, setOffset] = useState(null);

    const onInit = () => {
        const viewportWidth = viewport.current.offsetWidth;
        const ratio = viewportWidth / 3500;
        const scroller = scrollerThumb.current;
        const scrollbarFilling = scroller.previousElementSibling;

        let isScrollThumbPressed = false;
        let startX = 830;
        let shiftContent;

        //sets start X position
        const handleScrollTouchStart = (e) => {
            startX = e.touches[0].clientX;
            isScrollThumbPressed = true;
        };
        
        const handleScrollTouchMove = (e) => {
            
            if (isScrollThumbPressed === false) return;

            //sets clientX or max possible number of clientX
            const clientX = e.touches[0].clientX > 830 ? 830 : e.touches[0].clientX;
            shiftContent = scroller.offsetLeft / ratio;

            let shiftScroller = startX - clientX;

            scroller.style.left = (scroller.offsetLeft - shiftScroller) + 'px';

            const totalheightScroller = scroller.offsetWidth + scroller.offsetLeft;
            const maxOffsetScroller = 644 - scroller.offsetWidth;

            if (scroller.offsetLeft < 0) scroller.style.left = '0px';
            if (totalheightScroller >= 644) scroller.style.left = maxOffsetScroller + 'px';

            contentBox.current.scrollTo(shiftContent, 0);

            scrollbarFilling.style.width = scroller.style.left;
            startX = clientX;
        }; 

        // sets slide depending on scroller offset
        const handleScrollTouchEnd = () => {

            isScrollThumbPressed = false;

            const scrollerOffset = scroller.offsetLeft;
            
            if(scrollerOffset >= 415) {
                setSlide(thirdSlide);
            } else if(scrollerOffset >= 170) {
                setSlide(secondSlide);
            } else if(scrollerOffset >= 0) { 
                setSlide(firstSlide);
            } else {
                setSlide(thirdSlide);
            };

            setOffset(scrollerOffset);
        };
       
        // moves scroll thumb and scrollbar filling after scroll event
        const handleScroll = () => {
            scroller.style.left = (contentBox.current.scrollLeft * ratio) + 'px';
            scrollbarFilling.style.width = scroller.style.left;
        };

        contentBox.current.addEventListener('scroll', handleScroll);

        scroller.addEventListener('touchstart', handleScrollTouchStart);

        container.current.addEventListener('touchmove', handleScrollTouchMove);

        container.current.addEventListener('touchend', handleScrollTouchEnd);
    };

    useEffect(() => {
        onInit();
    }, []);

    // Scrolls to X position depending on the current slide
    useEffect(() => {
        if(currentSlide === firstSlide) {
            contentBox.current.scrollTo({ left: 0, behavior: 'smooth'});
        } else if(currentSlide === secondSlide) {
            contentBox.current.scrollTo({ left: 1024, behavior: 'smooth'});
        } else if(currentSlide === thirdSlide) {
            contentBox.current.scrollTo({ left: 2048, behavior: 'smooth'});
        }; 
    }, [currentSlide, offset]);

    return(
        <ThirdSlideWrapper 
            onTouchStart={onTouchWindowStart} 
            onTouchEndCapture={onTouchWindowEnd}
            id='thirdSlide'
            ref={container}
        >   
            <Slider 
                ref={viewport}  
            >
                <SliderTrack ref={contentBox}>
                    <ThirdSlideFirstScreen />
                    <ThirdSlideSecondScreen />
                    <ThirdSlideThridScreen />
                </SliderTrack>              
            </Slider>
            <Scrollbar ref={scrollerThumb}/>
        </ThirdSlideWrapper>
    );
};

export default ThirdSlide;