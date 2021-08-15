import React from 'react';
import { 
    ScrollbarWrapper, 
    Scroller, 
    ScrollField 
} from './style';

const Scrollbar = React.forwardRef((props, ref) => {

    return(
        <ScrollbarWrapper >
            <ScrollField>
                <div></div>
                <Scroller ref={ref}>

                </Scroller>
            </ScrollField>
        </ScrollbarWrapper>
    );
});

export default Scrollbar;