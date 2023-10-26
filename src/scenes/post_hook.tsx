import { makeScene2D, Circle, Layout, Rect, Txt, Img, Video, Node } from '@motion-canvas/2d';
import { Direction, all, createRef, createSignal, easeInBack, easeInBounce, easeInExpo, easeInQuad, fadeTransition, range, slideTransition, useLogger, waitFor } from '@motion-canvas/core';
import background from '../assets/message_background_less.png';
import flavour from '../assets/dalle_1.png';

export default makeScene2D(function* (view) {
    const logger = useLogger();

    const maskRef = createRef<Circle>();
    const valueRef = createRef<Img>();

    view.add(
        <>
            <Img src={background} />
            <Node cache>
                <Circle ref={maskRef} position={[0, 0]} alignSelf="center" size={[1600, 1600]} offset={[0, 0]} fill="#ffffff" />
                <Img src={flavour}
                    ref={valueRef}
                    size={[2000, 2000]}
                    compositeOperation={'source-in'} />
            </Node>
            <Txt alignSelf="center" fill="#ffffff" rotation={-10} offset={[0, 0]} textWrap size={[1000, 200]} textAlign="center" fontSize={250}>Subscribe and like ❤️</Txt>
        </ >,
    );
    yield* fadeTransition(2);
    yield* waitFor(6);
});

