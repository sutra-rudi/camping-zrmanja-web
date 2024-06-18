'use client';

import React from 'react';
import styles from '../../styles/smjestaj.module.scss';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import localFont from 'next/font/local';

import kuciceHero from '../../img/kamp-kucice/luka-kucica/luka-kucica01.png';
import Image from 'next/image';

import PaperDividTop from '@/app/components/PaperDividTop';
import PaperDividBot from '@/app/components/PaperDividBot';
import lukaPlaceholder from '../../img/placeholders/luka-placeholder-for-video.png';
import luxPlaceholder from '../../img/placeholders/lux-placeholder-for-video.png';
import ReactPlayer from 'react-player';
import Loading from './loading';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '@/app/types/appState';
import Link from 'next/link';
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
  const parseLink =
    checkParams === UserLanguage.hr ? `/kontakt?lang=${UserLanguage.hr}` : `/kontakt?lang=${UserLanguage.en}`;

  const onReady = React.useCallback(() => {
    if (!isReady) {
      playerRef.current && playerRef.current.seekTo(0, 'seconds');
      setIsReady(true);
    }
  }, [isReady]);
  const background: BannerLayer = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
    children: <Image fill src={kuciceHero} alt='hero camping from air' placeholder='blur' />,
  };

  const foreground: BannerLayer = {
    translateY: [0, 30],

    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.heroHeader}>
        <h1 className={`${styles.heroCtaHeader} ${RecoletaBold.className}`}>
          {parseByLang(`Mobilne kućice`, `Mobile Homes`)}
        </h1>
        <div className={styles.heroCtaButtonKontejter}>
          <Link className={styles.navCta} href={parseLink}>
            <span>{parseByLang(`Rezervirajte svoj borava`, `Book your stay`)}</span>
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
        <h1 className={`${styles.heroCtaHeaderBackside} ${RecoletaBold.className}`}>
          {parseByLang(`Mobilne kućice`, `Mobile Homes`)}
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
          <div id='luka-kucica' className={styles.innerContentLuka}>
            <div className={styles.innerContentBlock}>
              <h2>{parseByLang('Mobilne Kućice Luka', 'Luka mobile homes')}</h2>
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
                url={'https://cms.zrmanja-camping.hr/wp-content/uploads/2024/06/luka-video.mp4'}
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
                      poster: lukaPlaceholder.src,
                    },
                  },
                }}
              />
            </div>
          </div>

          <div id='lux-kucica' className={styles.innerContentLux}>
            <div className={styles.innerContentBlock}>
              <h2>{parseByLang('Mobilne Kućice Lux', 'Lux mobile homes')}</h2>
              {lux.map((contents, index) => {
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
                url={'https://cms.zrmanja-camping.hr/wp-content/uploads/2024/06/lux-video.mp4'}
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
                      poster: luxPlaceholder.src,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
