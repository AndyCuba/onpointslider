import React, { useEffect, useRef } from 'react';

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
    const { onTouchStart, onTouchEnd } = props;
    const container = useRef(null);
    const viewport = useRef(null);
    const contentBox = useRef(null);
    const scrollerThumb = useRef(null);

    const onInit = () => {
        const viewportWidth = viewport.current.offsetWidth,
            ratio = viewportWidth / 3500,
            scroller = scrollerThumb.current,
            scrollbarFilling = scroller.previousElementSibling;

        let isScrollThumbPressed = false;
        let startX = 830;
        let shiftContent;

        contentBox.current.scrollTo(2048, 0);

        const handleTouchStart = (e) => {
            startX = e.touches[0].clientX;
            isScrollThumbPressed = true;
        };
        
        const handleTouchMove = (e) => {
 
            if (isScrollThumbPressed === false) return;

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

        const handleTouchEnd = () => {
            isScrollThumbPressed = false;

            if(shiftContent >= 1400) {
                contentBox.current.scrollTo({ left: 2048, behavior: 'smooth'});
                scroller.style.left = '620px';
            } else if(shiftContent >= 700) {
                contentBox.current.scrollTo({ left: 1024, behavior: 'smooth'});
                scroller.style.left = '310px';
            } else if(shiftContent >= 0){ 
                contentBox.current.scrollTo({ left: 0, behavior: 'smooth'});
                scroller.style.left = '0px';
            } else {
                contentBox.current.scrollTo({ left: 2048, behavior: 'smooth'});
                scroller.style.left = '620px';
            };
            scrollbarFilling.style.width = scroller.style.left;
        };
       
        contentBox.current.addEventListener('scroll', () => {
            scroller.style.left = (contentBox.current.scrollLeft * ratio) + 'px';
        });

        scroller.addEventListener('touchstart', handleTouchStart);

        document.addEventListener('touchmove', handleTouchMove);

        document.addEventListener('touchend', handleTouchEnd);
    };

    useEffect(() => {
        onInit();
    }, []);

    return(
        <ThirdSlideWrapper 
            onTouchStart={onTouchStart} 
            onTouchEndCapture={onTouchEnd}
            id='thirdSlide'
            ref={container}
        >   
            <Slider ref={viewport}>
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