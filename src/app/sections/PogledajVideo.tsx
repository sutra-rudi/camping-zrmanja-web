'use client';

import Image from 'next/image';
import React from 'react';
import pogledajVideo from '../img/sections/pogledaj-video-bg.png';
import styles from '../styles/pogledajVideo.module.scss';

import localFont from 'next/font/local';
import videoKontrole from '../img/icons/video-kontrole-custom.svg';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';

import Lottie from 'lottie-react';

import PaperDividTop from '../components/PaperDividTop';
import PaperDividBotAlt from '../components/PaperDivitBotAlt';
import { useAppContext } from '../contexts/store';

const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

import lottieAnima from '../img/lottie/videoPulse.json';
import ReactPlayer from 'react-player';
import Loading from '../loading';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';

const PogledajVideo = () => {
  const {
    state: { userLang },
  } = useAppContext();

  const [isReady, setIsReady] = React.useState(false);
  const playerRef = React.useRef<ReactPlayer>(null);

  const onReady = React.useCallback(() => {
    if (!isReady) {
      playerRef.current && playerRef.current.seekTo(0, 'seconds');
      setIsReady(true);
    }
  }, [isReady]);

  const [isVideoLightbox, setIsVideoLightbox] = React.useState<boolean>(false);

  const background: BannerLayer = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <ReactPlayer
        url={'/camping-pogledaj-video-teaser.mp4'}
        loop
        muted
        volume={0}
        width={'100%'}
        height={'100%'}
        playsinline
        playing={isReady}
        onReady={onReady}
        fallback={<Loading />}
        config={{
          file: {
            attributes: {
              poster: pogledajVideo.src,
            },
          },
        }}
      />
    ),
  };

  const foreground: BannerLayer = {
    translateY: [0, 15],
    scale: [2, 0.8],
    opacity: [1, 0.1],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.pogledajKontroleTextBacksideWrapper} onClick={() => setIsVideoLightbox(true)}>
        <span className={`${RecoletaBold.className} ${styles.pogledajKontroleTekstBackside}`}>
          {userLang === 'hr' ? 'Pogledaj video' : 'Watch video'}
        </span>
      </div>
    ),
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.pogledajControls}>
        <Lottie animationData={lottieAnima} className={styles.lottieCustom} />
        <Image src={videoKontrole} alt='controls' width={131} height={131} />
        <h1 className={`${styles.pogledajKontroleTekstMaster} ${RecoletaBold.className}`}>
          {userLang === 'hr' ? 'Pogledaj video' : 'Watch video'}
        </h1>
      </div>
    ),
  };

  return (
    <section className={styles.pogledajVideoSection}>
      <PaperDividTop />
      <ParallaxBanner className={styles.pogledajVideoParalax} layers={[background, headline, foreground]} />
      <Lightbox
        open={isVideoLightbox}
        close={() => setIsVideoLightbox(false)}
        slides={[
          {
            //@ts-ignore
            type: 'custom-slide',
          },
        ]}
        render={{
          slide: () => (
            <ReactPlayer
              url={'https://youtu.be/jzp_MI5o9oU'}
              config={{
                file: {
                  attributes: {
                    poster: pogledajVideo.src,
                  },
                },
              }}
              loop
              width={'100%'}
              height={'100%'}
              playsinline
              fallback={<Loading />}
            />
          ),
        }}
      />
      <PaperDividBotAlt />
    </section>
  );
};

export default PogledajVideo;
