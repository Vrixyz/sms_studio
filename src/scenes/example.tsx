import { makeScene2D, Circle, Layout, Rect, Txt, Img } from '@motion-canvas/2d';
import { all, createRef, createSignal, easeInBack, easeInBounce, easeInExpo, easeInQuad, range, useLogger, waitFor } from '@motion-canvas/core';
import background from '../assets/message_background.png';

export default makeScene2D(function* (view) {
  const logger = useLogger();
  const all_data = [{
    text: "Hello",
    from_me: true,
    transition_duration: 1,
  }, {
    text: "Yes?",
    from_me: false,
    transition_duration: 2,
  }, {
    text: "I'm pregnant",
    from_me: true,
    transition_duration: 1.5,
  }, {
    text: "What?",
    from_me: false,
    transition_duration: 1.5,
  }, {
    text: "Am I the father?",
    from_me: false,
    transition_duration: 2,
  }, {
    text: "Didn't you take the pill?",
    from_me: false,
    transition_duration: 2.5,
  }];
  const my_messages = createSignal([]);
  view.add(
    <Layout>
      <Img src={background} />
      <Layout direction={'column'} y={1000} width="100%" justifyContent="start" offset={[0, 1]} gap={70} layout spawner={() =>
        my_messages().map(
          (elem, i) => {
            return create_element(elem, i);

            //<Layout alignSelf="end" offset={[1, 0]}><Rect height={100} width={100} fill="#ffff38" />


            //</Layout >
          }
        )
      }
      />

    </Layout >,
  );

  var states = [];
  for (var i = 0; i < all_data.length; i++) {
    states.push(all_data.slice(0, i + 1));
  }
  logger.debug(states.toString());

  var scenario = my_messages([], 0);
  yield* waitFor(0)
  for (var i = 0; i < states.length; i++) {
    scenario = scenario.to(states[i], all_data[i].transition_duration);
  }
  yield* all(
    scenario
  );

  yield* waitFor(0.2);
});

function create_element(elem: any, i: number) {
  if (elem.from_me) {
    return <Rect alignSelf="end" margin={[0, 55, 0, 0]} fill={'#9099ff'}>
      <Rect alignSelf="center" margin={[100, 75, 100, -10]} />
      <Txt position={[0, 0]} alignSelf="center" marginRight={75} fontSize={90} fill={'#ffffff'}>{elem.text}</Txt >
    </Rect>

  }
  return <Rect alignSelf="start" margin={[0, 55, 0, 0]} fill={'#aaaaaa'}>
    <Rect alignSelf="center" margin={[100, 75, 100, -10]} />
    <Txt position={[0, 0]} alignSelf="center" marginRight={75} fontSize={90} fill={'#ffffff'}>{elem.text}</Txt >
  </Rect>
}

