'use client';

import React from 'react';
import styles from '../../styles/smjestaj.module.scss';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import localFont from 'next/font/local';

import campingHero from '../../img/heros/camping-hero.png';
import Image from 'next/image';
import AppButton from '@/app/components/AppButton';
import PaperDividTop from '@/app/components/PaperDividTop';
import smjestajPlaceholder from '../../img/globals/smjestaj-placeholder.png';
import PaperDividBot from '@/app/components/PaperDividBot';
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
  console.log('PAGE DATA', 'LUX:', lux);

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
      <div className={styles.heroHeader}>
        <h1 className={`${styles.heroCtaHeader} ${RecoletaBold.className}`}>Mobilne Kućice</h1>
        <div className={styles.heroCtaButtonKontejter}>
          <AppButton isHero content={`Rezervirajte svoj termin`} />
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
        <h1 className={`${styles.heroCtaHeaderBackside} ${RecoletaBold.className}`}>Mobilne Kućice</h1>
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
              <h2>Mobilne Kućice Luka</h2>
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
              <Image src={smjestajPlaceholder} fill alt='camping site' />
            </div>
          </div>

          <div className={styles.innerContentLux}>
            <div className={styles.innerContentBlock}>
              <h2>Mobilne Kućice Lux</h2>
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
              <Image src={smjestajPlaceholder} fill alt='camping site' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
