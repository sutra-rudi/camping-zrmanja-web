'use client';
import localFont from 'next/font/local';
import React from 'react';
import styles from '../styles/heroSekcija.module.scss';
import AppButton from '../components/AppButton';
import PaperDividTop from '../components/PaperDividTop';
import heroPoster from '../img/heros/video-hero-poster-camping.jpg';
import Loading from '../loading';

const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';

import ReactPlayer from 'react-player';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
import Link from 'next/link';

const HeroSekcija = () => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );
  const [isReady, setIsReady] = React.useState(false);
  const playerRef = React.useRef<ReactPlayer>(null);

  const onReady = React.useCallback(() => {
    if (!isReady) {
      // const timeToStart = 7 * 60 + 12.6;
      playerRef.current && playerRef.current.seekTo(0, 'seconds');
      setIsReady(true);
    }
  }, [isReady]);

  const headline_en = `THE RIGHT PLACE FOR\nPEACE AND RELAXATION`;
  const headline_hr = `Pravo mjesto \nza opuštanje`;

  const btn_main_hr = 'Rezerviraj svoj boravak';
  const btn_main_en = 'Book your stay';
  const parseLink =
    checkParams === UserLanguage.hr ? `/kontakt?lang=${UserLanguage.hr}` : `/kontakt?lang=${UserLanguage.en}`;
  const background: BannerLayer = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <ReactPlayer
        url={'https://cms.zrmanja-camping.hr/wp-content/uploads/2024/06/video-hero.mp4'}
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
              poster: heroPoster.src,
            },
          },
        }}
      />
    ),
  };

  const foreground: BannerLayer = {
    translateY: [0, 30],

    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.heroCtaKontejner}>
        <h1 className={`${styles.heroCtaHeader} ${RecoletaBold.className}`}>{parseByLang(headline_hr, headline_en)}</h1>
        <div className={styles.heroCtaButtonKontejter}>
          {/* <AppButton isHero content={parseByLang(btn_main_hr, btn_main_en)} /> */}
          <Link href={'https://secure.phobs.net/book.php?company_id=b400bc674d80ef59f6fd07df12630409'}>
            <span>{parseByLang(btn_main_hr, btn_main_en)}</span>
          </Link>
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
          {parseByLang(headline_hr, headline_en)}
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
