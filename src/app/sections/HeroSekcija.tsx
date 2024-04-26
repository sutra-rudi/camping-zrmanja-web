'use client';
import localFont from 'next/font/local';
import React from 'react';
import styles from '../styles/heroSekcija.module.scss';
// import ReactPlayer from 'react-player/lazy';
import AppButton from '../components/AppButton';
import PaperDividTop from '../components/PaperDividTop';
import heroPoster from '../img/hero-poster.jpg';
import Loading from '../loading';
import { useAppContext } from '../contexts/store';
import campingHero from '../img/heros/camping-hero.png';

const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import Image from 'next/image';

const HeroSekcija = () => {
  // const [isReady, setIsReady] = React.useState(false);
  // const playerRef = React.useRef<ReactPlayer>(null);

  // const onReady = React.useCallback(() => {
  //   if (!isReady) {
  //     // const timeToStart = 7 * 60 + 12.6;
  //     playerRef.current && playerRef.current.seekTo(0, 'seconds');
  //     setIsReady(true);
  //   }
  // }, [isReady]);

  const {
    state: { userLang },
  } = useAppContext();

  const headline_en = `The right place for\n isolation and relaxation`;
  const headline_hr = `Pravo mjesto za \n izolaciju i opuštanje`;

  const btn_main_hr = 'Rezerviraj svoj boravak';
  const btn_main_en = 'Book your stay';

  // const btn_second_hr = 'Rezerviraj mailom';
  // const btn_second_en = 'Book by email';

  const langCheck = React.useCallback(
    (hrString: string, enString: string) => (userLang === 'hr' ? hrString : enString),
    [userLang]
  );

  const background: BannerLayer = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
    children: <Image fill src={campingHero} alt='hero camping from air' />,
  };

  const foreground: BannerLayer = {
    translateY: [0, 30],
    // scale: [2, 0.8],
    // opacity: [1, 0.1],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.heroCtaKontejner}>
        <h1 className={`${styles.heroCtaHeader} ${RecoletaBold.className}`}>{langCheck(headline_hr, headline_en)}</h1>
        <div className={styles.heroCtaButtonKontejter}>
          <AppButton isHero content={langCheck(btn_main_hr, btn_main_en)} />
          {/* <AppButton isHero content={langCheck(btn_second_hr, btn_second_en)} isSecondary /> */}
        </div>
      </div>
    ),
  };

  const headline: BannerLayer = {
    translateY: [0, 15],
    scale: [1.1, 0.7],
    opacity: [0.15, 0],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.heroCtaHeaderBacksideWrapper}>
        <h1 className={`${RecoletaBold.className} ${styles.heroCtaHeaderBackside}`}>
          {langCheck(headline_hr, headline_en)}
        </h1>
      </div>
    ),
  };

  return (
    <section className={styles.heroSekcija}>
      <PaperDividTop />
      <ParallaxBanner className={styles.playerContainer} layers={[background, headline, foreground]} />
    </section>
  );
};

export default HeroSekcija;
