'use client';

import React from 'react';
import ReactPlayer from 'react-player';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import styles from '../styles/tureSekcija.module.scss';
import localFont from 'next/font/local';
import { parseByLang } from '../utils/parseByLang';
import { useAppContext } from '../contexts/store';
import { content_eng, content_hr, headline_eng, headline_hr } from '../staticContentData/parallaxVideoSection';
import PaperDividTop from '../components/PaperDividTop';
import AppButton from '../components/AppButton';
import Loading from '../loading';
import Image from 'next/image';
import bottomImage from '../img/sections/paralax-video-bottomsectionimage.png';

const RecoletaSemiBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-SemiBold.ttf', weight: '600' }],
});
const ParallaxVideoSection = () => {
  const [isReady, setIsReady] = React.useState(false);
  const playerRef = React.useRef<ReactPlayer>(null);
  const {
    state: { userLang },
  } = useAppContext();
  const onReady = React.useCallback(() => {
    if (!isReady) {
      // const timeToStart = 7 * 60 + 12.6;
      playerRef.current && playerRef.current.seekTo(0, 'seconds');
      setIsReady(true);
    }
  }, [isReady]);

  const foreground: BannerLayer = {
    translateY: [0, 45],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.gallerySectionTextOverlay}>
        <div className={styles.gallerySectionTextOverlayContent}>
          <h2 className={RecoletaSemiBold.className}>{parseByLang(headline_hr, headline_eng, userLang)}</h2>
          <h4>{parseByLang(content_hr, content_eng, userLang)}</h4>
          <AppButton isAbout content='Saznaj više' />
        </div>
      </div>
    ),
  };

  const background: BannerLayer = {
    translateY: [0, 40],
    shouldAlwaysCompleteAnimation: true,

    children: (
      <ReactPlayer
        url={'/video-parallax.mp4'}
        loop
        muted
        volume={0}
        width={'100%'}
        height={'100%'}
        playsinline
        playing={isReady}
        onReady={onReady}
        fallback={<Loading />}
        //   config={{
        //     file: {
        //       attributes: {
        //         poster: pingPongPoster.src,
        //       },
        //     },
        //   }}
      />
    ),
  };

  return (
    <div className={styles.parallaxVideoSekcija}>
      <PaperDividTop />

      <ParallaxBanner className={styles.playerContainer} layers={[background, foreground]} />
      <div className={styles.bottomImageContainer}>
        <Image src={bottomImage} fill alt='bottom image' />
        <div className={styles.bottomImageTextOverlay}>
          <h4 className={RecoletaSemiBold.className}>
            {parseByLang('Doručak u Mićanovim Dvorima', 'Breakfast at Mićanovi Dvori', userLang)}
          </h4>
          <p>
            {parseByLang(
              'Odmah pored kampa se nalazi naš ugostiteljski objekt\nu kojem se poslužuju doručci na prekrasnoj terasi.',
              'Right next to the campsite is our catering facility\nwhere breakfast is served on a beautiful terrace.',
              userLang
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxVideoSection;
