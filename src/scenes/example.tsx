import { makeScene2D, Circle, Layout, Rect, Txt, Img, Video } from '@motion-canvas/2d';
import { all, createRef, createSignal, easeInBack, easeInBounce, easeInExpo, easeInQuad, range, useLogger, waitFor } from '@motion-canvas/core';
import background from '../assets/message_background_less.png';
import hypno from '../assets/hypnomp4.mp4';
import { data } from "./scenario_pregnant";

export default makeScene2D(function* (view) {
  const logger = useLogger();
  var all_data = data.all_data;

  const videoRef = createRef<Video>();

  const my_messages = createSignal([]);
  // <Video loop={true} ref={videoRef} src={hypno} height="100%" width="100%" />

  view.add(
    <Layout>
      <Img src={background} />
      <Layout padding={[0, 200, 250, 0]} direction={'column'} y={1000} width="100%" justifyContent="start" offset={[0, 1]} gap={40} layout spawner={() =>
        my_messages().map(
          (elem, i) => {
            return create_element(elem, i);
          }
        )
      }
      />
      <Layout position={[0, 150]}>
        <Rect layout width="100%" offset={[0, 1]} position={[0, -1000]} height={600} fill="#333333" />
        <Layout layout direction="column" position={[0, 110]} height="100%" width="100%" justifyContent="start" offset={[0, 0]} gap={40}>
          <Circle position={[0, 150]} alignSelf="center" size={[160, 160]} offset={[-1, 1]} fill="#ffffff" />
          <Txt alignSelf="center" fill="#ffffff">My Love ❤️</Txt>
        </Layout>
      </Layout>
    </Layout>,
  );
  //videoRef().play();

  var states = [];
  for (var i = 0; i < all_data.length; i++) {
    states.push(all_data.slice(0, i + 1));
  }
  logger.debug(states.toString());

  var scenario = my_messages([], 0);
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
    return <Rect alignSelf="end" margin={[0, 55, 0, 255]} padding={[45, 10, 45, 10]} fill={'#3070ff'} radius={90}>
      <Txt textWrap={true} alignSelf="center" margin={[0, 50, 0, 50]} fontSize={80} fill={'#ffffff'}>{elem.text}</Txt >
    </Rect>
  }
  return <Rect alignSelf="start" margin={[0, 255, 0, 50]} padding={[45, 10, 45, 10]} fill={'#444444'} radius={90}>
    <Txt textWrap={true} position={[0, 0]} alignSelf="center" margin={[0, 50, 0, 50]} fontSize={80} fill={'#ffffff'}>{elem.text}</Txt >
  </Rect>
}

