import { makeScene2D, Circle, Layout, Rect, Txt, Img, Video } from '@motion-canvas/2d';
import { all, createRef, createSignal, useLogger, waitFor } from '@motion-canvas/core';
import background from '../assets/message_background_less.png';
import { data } from "../scenarios/prod_5";
import recipient_image from '../assets/alex.png';

import message_image from '../assets/message_prod_5.jpg';


export default makeScene2D(function* (view) {
  const logger = useLogger();
  const all_data = data.all_data;
  const recipient = data.recipient;

  const my_messages = createSignal([]);

  const indicator_other_typing_signal = createSignal(0);
  const indicator_me_typing_signal = createSignal(0);
  view.add(
    <Layout>
      <Img src={background} />
      <Layout padding={[0, 200, 250, 0]} direction={'column'} y={1000} width="100%" justifyContent="start" offset={[0, 1]} gap={40} layout>
        <Layout direction={'column'} y={1000} width="100%" justifyContent="start" gap={40} spawner={() => {
          logger.debug("spawn new messages");
          var messages = my_messages().map(
            (elem, i) => {
              return create_element(elem, i);
            }
          );
          return messages;
        }
        } />
        <Rect alignSelf="stretch" radius={90}>
          <Rect scale={() => [indicator_other_typing_signal(), indicator_other_typing_signal()]} alignSelf="start" margin={[0, 255, 0, 50]} padding={[45, 10, 45, 10]} fill={'#444444'} radius={90}>
            <Txt textWrap={true} position={[0, 0]} alignSelf="center" margin={[0, 50, 0, 50]} fontSize={80} fill={'#ffffff'}>...</Txt >
          </Rect>
          <Rect scale={() => [indicator_me_typing_signal(), indicator_me_typing_signal()]} alignSelf="end" margin={[0, -50, 0, 355]} padding={[45, 10, 45, 10]} fill={'#3070ff'} radius={90} offsetX={1}>
            <Txt textWrap={true} position={[0, 0]} alignSelf="center" margin={[0, 50, 0, 50]} fontSize={80} fill={'#ffffff'}>...</Txt >
          </Rect>
        </Rect>

      </Layout>
      <Layout position={[0, 150]}>
        <Rect layout width="100%" offset={[0, 1]} position={[0, -1000]} height={600} fill="#333333" />
        <Layout cache layout direction="column" position={[0, 110]} height="100%" width="100%" justifyContent="start" offset={[0, 0]} gap={40}>
          <Rect position={[0, 150]} alignSelf="center" size={[160, 160]} offset={[-1, 1]} cache>
            <Rect radius={80} size={[160, 160]} offset={[0, 0]} fill="#ffffff" />
            {/*<Img
              src={recipient_image}
              size={[160, 160]} />*/
            }
          </Rect>

          <Txt alignSelf="center" fill="#ffffff">{recipient ?? "❤️"}</Txt>
        </Layout>
      </Layout>
    </Layout >,
  );
  //videoRef().play();
  var states = [];
  for (var i = 0; i < all_data.length; i++) {
    states.push(all_data.slice(0, i + 1));
  }
  var indicator_other_typing_signal_scenario = indicator_other_typing_signal(0, 0);
  var indicator_me_typing_signal_scenario = indicator_me_typing_signal(0, 0);
  var scenario = my_messages([], 0);
  var current_time = 0;
  var typing_duration_default = 2.5;
  var typing_transition_duration = 0.8;
  var additional_time_default = 4.2;
  for (var i = 0; i < all_data.length; i++) {
    var messages = all_data.slice(0, i + 1);
    var data_current_message = all_data[i];
    var typing_duration = data_current_message.typing_duration ?? typing_duration_default;
    if (data_current_message.is_neutral) {
      typing_duration = 0;
    }
    var additional_time = additional_time_default;
    if (data_current_message.delay != null) {
      additional_time = data_current_message.delay;
    }
    else if (data_current_message.time != null) {
      additional_time = data_current_message.time - current_time;
    }
    scenario = scenario.wait(additional_time).to(messages, 0);
    indicator_other_typing_signal_scenario = indicator_other_typing_signal_scenario.wait(additional_time - typing_duration);
    indicator_me_typing_signal_scenario = indicator_me_typing_signal_scenario.wait(additional_time - typing_duration);
    if (data_current_message.is_neutral) {
      // Nothing to do
    }
    else if (data_current_message.from_me == false) {
      indicator_other_typing_signal_scenario = indicator_other_typing_signal_scenario.to(1, typing_transition_duration / 2).wait(typing_duration - typing_transition_duration).to(0, typing_transition_duration / 2);
      indicator_me_typing_signal_scenario = indicator_me_typing_signal_scenario.wait(typing_duration)
    } else {
      indicator_other_typing_signal_scenario = indicator_other_typing_signal_scenario.wait(typing_duration)
      indicator_me_typing_signal_scenario = indicator_me_typing_signal_scenario.to(1, typing_transition_duration / 2).wait(typing_duration - typing_transition_duration).to(0, typing_transition_duration / 2);
    }
    current_time += additional_time;
  }
  yield* all(
    indicator_other_typing_signal_scenario,
    indicator_me_typing_signal_scenario,
    scenario,
  );

  yield* waitFor(5);
});

function create_element(elem: any, i: number) {
  if (elem.photo != null) {
    return create_photo(elem);
  }
  if (elem.is_neutral) {
    return <Rect alignSelf="center" margin={[0, 155, 0, 255]} padding={[45, 10, 45, 10]} radius={90}>
      <Txt textWrap={true} alignSelf="center" textAlign="center" margin={[0, 50, 0, 50]} fontSize={50} fill={'#bbbbbb'}>{elem.text}</Txt >
    </Rect>
  }
  if (elem.from_me) {
    return <Rect alignSelf="end" margin={[0, 0, 0, 255]} padding={[45, 10, 45, 10]} fill={'#3070ff'} radius={90}>
      <Txt textWrap={true} alignSelf="center" margin={[0, 50, 0, 50]} fontSize={60} fill={'#ffffff'}>{elem.text}</Txt >
    </Rect>
  }
  return <Rect alignSelf="start" margin={[0, 255, 0, 50]} padding={[45, 10, 45, 10]} fill={'#444444'} radius={90}>
    <Txt textWrap={true} position={[0, 0]} alignSelf="center" margin={[0, 50, 0, 50]} fontSize={60} fill={'#ffffff'}>{elem.text}</Txt >
  </Rect>
}

function create_photo(elem: any) {
  if (elem.from_me) {
    return <Rect layout alignSelf="end" margin={[0, 0, 0, 255]} padding={[45, 10, 45, 10]} fill={'#3070ff'} radius={90}>
      <Img src={message_image} padding={[50, 50, 50, 255]}
        size={[360, 360]} />
    </Rect>
  }
  return <Rect alignSelf="start" margin={[0, 255, 0, 50]} fill={'#444444'} radius={90}>
    <Img src={message_image} margin={[60, 60, 60, 60]} radius={50}
    //size={[760, 960]}
    />
  </Rect>
}

