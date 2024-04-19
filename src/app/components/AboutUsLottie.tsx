import { useLottie, useLottieInteractivity } from 'lottie-react';
import oNamaScroll from '../img/lottie/oNamaScroll.json';

const options = {
  animationData: oNamaScroll,
};

const style = {
  maxWidth: '100%',
  height: 'auto',
  //   maxHeight: '50vh',
  overflow: 'hidden',
  //     maxHeight: "50vh",
  maxHeight: '70dvh',
};

const AboutUsLottie = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 1],
        type: 'seek',
        frames: [0, 300],
      },
    ],
  });

  return Animation;
};

export default AboutUsLottie;
