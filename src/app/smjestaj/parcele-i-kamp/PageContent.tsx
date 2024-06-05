'use client';

import React from 'react';
import styles from '../../styles/smjestaj.module.scss';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import localFont from 'next/font/local';

import parcelHero from '../../img/sections/kamp-kucice-sekcija/camp-site-back.png';
import Image from 'next/image';
import AppButton from '@/app/components/AppButton';
import PaperDividTop from '@/app/components/PaperDividTop';

import ReactPlayer from 'react-player';

import PaperDividBot from '@/app/components/PaperDividBot';

import Loading from './loading';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '@/app/types/appState';
const RecoletaBold = localFont({
  src: [{ path: '../../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

interface SmjestajPageContent {
  luka: {
    title: string;
    content: string;
  }[];

  lux: {
    title: string;
    content: string;
  }[];
}
const PageContent = ({ luka, lux }: SmjestajPageContent) => {
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
      playerRef.current && playerRef.current.seekTo(0, 'seconds');
      setIsReady(true);
    }
  }, [isReady]);

  const background: BannerLayer = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
    children: <Image fill src={parcelHero} priority alt='hero camping from air' />,
  };

  const foreground: BannerLayer = {
    translateY: [0, 30],
    // scale: [2, 0.8],
    // opacity: [1, 0.1],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.heroHeader}>
        <h1 className={`${styles.heroCtaHeader} ${RecoletaBold.className}`}>
          {parseByLang(`Parcele i kamp mjesta`, `Parcels and camping spots`)}
        </h1>
        <div className={styles.heroCtaButtonKontejter}>
          <AppButton isHero content={parseByLang(`Rezervirajte svoj termin`, `Book your appointment`)} />
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
        <h1 className={`${styles.heroCtaHeaderBackside} ${RecoletaBold.className}`}>
          {parseByLang(`Parcele i kamp mjesta`, `Parcels and camping spots`)}
        </h1>
      </div>
    ),
  };

  return (
    <div className={styles.contentContainer}>
      <PaperDividTop />
      <ParallaxBanner className={styles.smjestajHero} layers={[background, headline, foreground]} />
      <div className={styles.bigWrapp}>
        <PaperDividBot />
        <div className={styles.innerContentMaster}>
          <div className={styles.innerContentLuka}>
            <div className={styles.innerContentBlock}>
              <h2>{parseByLang('PROSTOR ZA KAMPIRANJE', 'CAMPING AREA OPTIONS')}</h2>
              {luka.map((contents, index) => {
                const { title, content } = contents;

                return (
                  <div key={index} className={styles.innerContentBlockSegment}>
                    <p>{title}</p>
                    <ul>
                      {content.split('. ').map((lis, i) => (
                        <li key={i}>{lis}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className={styles.imageContainer}>
              <ReactPlayer
                url={'/parcel-video.mp4'}
                loop
                muted
                volume={0}
                width={'100%'}
                height={'100%'}
                playsinline
                playing={isReady}
                onReady={onReady}
                fallback={<Loading />}
                // config={{
                //   file: {
                //     attributes: {
                //       poster: heroPoster.src,
                //     },
                //   },
                // }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
