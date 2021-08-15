import { useEffect, useState } from 'react';

import FirstSlide from './components/FirstSlide/FirstSlide';
import SecondSlide from './components/SecondSlide/SecondSlide';
import ThirdSlide from './components/ThirdSlide/ThirdSlide';
import { GlobalStyle, SliderThumbler } from './style';

const App = () => {
    const [startY, setStartY] = useState(0);
    const [endY, setEndY] = useState(0);
    const firstSlide = 'firstSlide';
    const secondSlide = 'secondSlide';
    const thirdSlide = 'thirdSlide';
    const [currentSlide, setCurrentSlide] = useState(firstSlide);
    
    //Sets first position of touch event
    const handleTouchStart = (e) => {
        setStartY(e.changedTouches[0].clientY);
    };

    //Sets last position of touch event
    const handleTouchEnd = (e) => {
        setEndY(e.changedTouches[0].clientY);
    };

    //If user's touch is long enough, calculates the direction of the swipe
    useEffect(() => {
        if(startY - endY > 250) {
            if(currentSlide === firstSlide) {
                setCurrentSlide(secondSlide)
            } else if(currentSlide === secondSlide) {
                setCurrentSlide(thirdSlide);
            };
        } else if(startY - endY < -250) {
            if(currentSlide === secondSlide) {
                setCurrentSlide(firstSlide)
            } else if(currentSlide === thirdSlide) {
                setCurrentSlide(secondSlide);
            };
        };
    }, [endY, startY]);

    //If current Slide changes, scrolls to this Slide position
    useEffect(() => {
        if(currentSlide === firstSlide) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        } else if(currentSlide === secondSlide) {
            window.scrollTo({top: 768, behavior: 'smooth'});
        } else if(currentSlide === thirdSlide) {
            window.scrollTo({top: 1536, behavior: 'smooth'});
        };
    }, [currentSlide])

    return(
        <div>
            <GlobalStyle />
            <SliderThumbler current={currentSlide}>
                <div onClick={() => setCurrentSlide(firstSlide)}></div>
                <div onClick={() => setCurrentSlide(secondSlide)}></div>
                <div onClick={() => setCurrentSlide(thirdSlide)}></div>
            </SliderThumbler>
            <FirstSlide 
                onTouchStart={handleTouchStart} 
                onTouchEnd={handleTouchEnd}
                currentSlide={currentSlide}
            />
            <SecondSlide 
                onTouchStart={handleTouchStart} 
                onTouchEnd={handleTouchEnd}
                currentSlide={currentSlide}
            />
            <ThirdSlide 
                onTouchStart={handleTouchStart} 
                onTouchEnd={handleTouchEnd}
                currentSlide={currentSlide}
            />
        </div>
    );
};

export default App;