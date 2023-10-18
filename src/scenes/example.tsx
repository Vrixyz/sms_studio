import { makeScene2D, Circle, Layout, Rect, Txt, Img } from '@motion-canvas/2d';
import { all, createRef, createSignal, easeInBack, easeInBounce, easeInExpo, easeInQuad, range, waitFor } from '@motion-canvas/core';
import background from '../assets/message_background.png';

export default makeScene2D(function* (view) {
  const myTxt = createRef<Txt>();
  const my_count = createSignal(0);
  view.add(
    <>
      <Img src={background} />
      <Txt ref={myTxt}>Hello</Txt>
      <Layout spawner={() =>
        range(my_count() + 1).map((i) => <Txt y={200 + i * 42} width={32} height={32} fill={'white'}>{i}</Txt>)}
      />

    </>,
  );
  yield* all(
    myTxt().fill('#ffffff', 0),
    myTxt().position.x(300, 1).to(-300, 1),
    myTxt().fill('#e6a700', 1).to('#e13238', 1),
  );

  yield* all(
    my_count(1, 1), my_count(2, 1).to(3, 1),
  );

  yield* waitFor(2)
});
function count(): number {
  throw new Error('Function not implemented.');
}

