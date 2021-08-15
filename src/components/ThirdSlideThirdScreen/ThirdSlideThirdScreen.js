import React from 'react';

import { IceCube } from '../../style';
import { 
    BCeilsImage, 
    BCeilsTitle, 
    ThirdSlideThirdScreenWrapper 
} from './style';

import FifthIce from '../../images/5thIce.png';
import SixthIce from '../../images/6thIce.png';
import SeventhIce from '../../images/7thIce.png';

const ThirdSlideThridScreen = (props) => {
    const { onTouchStart, onTouchEnd } = props;
    

    return(
        <ThirdSlideThirdScreenWrapper 
            onTouchStart={onTouchStart} 
            onTouchEndCapture={onTouchEnd}
            id='thirdSlideThirdScreen'
        >
            <h2>Звенья патогенеза СД2</h2>
            <BCeilsTitle>
                <span>1</span>
                β-клетки
            </BCeilsTitle>
            <BCeilsImage>
                
            </BCeilsImage>
            <IceCube
                top={105}
                left={0}
                width={33}
                height={38.5}
                background={FifthIce}
            />
            <IceCube
                top={600}
                left={160}
                width={191.5}
                height={179.5}
                background={SixthIce}
            />
            <IceCube
                top={205}
                left={935}
                width={88}
                height={101.5}
                background={SeventhIce}
            />
        </ThirdSlideThirdScreenWrapper>
    );
};

export default ThirdSlideThridScreen;