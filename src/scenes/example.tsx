import { makeScene2D, Circle, Layout, Rect, Txt, Img } from '@motion-canvas/2d';
import { all, createRef, createSignal, easeInBack, easeInBounce, easeInExpo, easeInQuad, range, waitFor } from '@motion-canvas/core';
import background from '../assets/message_background.png';

export default makeScene2D(function* (view) {
  const my_messages = createSignal([]);
  view.add(
    <>
      <Img src={background} />
      <Layout spawner={() =>
        my_messages().map((elem, i) => <Txt y={100 - (my_messages().length - i) * 42} width={32} height={32} fill={'white'}>{elem}</Txt>)}
      />

    </>,
  );

  yield* waitFor(1)
  yield* all(
    my_messages(["hello"], 1).to(["hello", "test"], 1)
  );

  yield* waitFor(2)
});
function count(): number {
  throw new Error('Function not implemented.');
}

