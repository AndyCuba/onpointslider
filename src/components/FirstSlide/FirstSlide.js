import { Ellipse, EllipseTitle, FirstSlideWrapper, FooterEllipse } from './style';

const FirstSlide = (props) => {
    const { onTouchStart, onTouchEnd, currentSlide } = props;

    return(
        <FirstSlideWrapper 
            onTouchStart={onTouchStart} 
            onTouchEndCapture={onTouchEnd}
            id="firstSlide"
        >
            <h1>Всегда ли цели терапии СД2 на поверхности?</h1>
            <Ellipse scale={1.0} top={260} left={560}>
                <div>
                    <div></div>
                </div>
            </Ellipse>
            <EllipseTitle top={275} left={630}>Цель по HbA1c</EllipseTitle>
            <Ellipse scale={0.5} top={415} left={260}>
                <div>
                    <div></div>
                </div>
            </Ellipse>
            <EllipseTitle top={395} left={230}>Гипогликемия</EllipseTitle>
            <Ellipse scale={0.28} top={520} left={460}>
                <div>
                    <div></div>
                </div>
            </Ellipse>
            <EllipseTitle top={505} left={385}>Осложнения СД</EllipseTitle>
            <Ellipse scale={0.28} top={500} left={802}>
                <div>
                    <div></div>
                </div>
            </Ellipse>
            <EllipseTitle top={485} left={795}>СС риски</EllipseTitle>
            <FooterEllipse currentSlide={currentSlide}>
                <h3>Листайте вниз</h3>
                <div></div>
                <div></div>
            </FooterEllipse>
        </FirstSlideWrapper>
    );
};

export default FirstSlide;