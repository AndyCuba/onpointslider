import React from 'react';

import { SecondSlideWrapper } from './style';
import { IceCube } from '../../style';
import FirstIce from '../../images/1stIce.png';
import SecondIce from '../../images/2ndIce.png';
import ThirdIce from '../../images/3rdIce.png';
import FourthIce from '../../images/4rthIce.png';


const SecondSlide = (props) => {
    const { onTouchWindowStart, onTouchWindowEnd } = props;

    return(
        <SecondSlideWrapper 
            onTouchStart={onTouchWindowStart} 
            onTouchEndCapture={onTouchWindowEnd}
            id='secondSlide'
        >
            <h2>Основа терапии - патогенез СД2</h2>
            <IceCube 
                top={160} 
                left={80} 
                width={41} 
                height={38.5} 
                background={FirstIce}
            />
            <IceCube 
                top={440} 
                left={230} 
                width={103.5} 
                height={101} 
                background={SecondIce}
            />
            <IceCube 
                top={600} 
                left={720} 
                width={74.5} 
                height={75.5} 
                background={ThirdIce}
            />
            <IceCube 
                top={40} 
                left={880} 
                width={147.5} 
                height={205.5} 
                background={FourthIce}
            />
            
        </SecondSlideWrapper>
    );
};

export default SecondSlide;