'use client';

import React from 'react';
import PaperDividTop from '../components/PaperDividTop';
import Image, { StaticImageData } from 'next/image';

import styles from '../styles/aboutUs.module.scss';
import localFont from 'next/font/local';
const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import PaperDividBot from '../components/PaperDividBot';

interface PageContentAbout {
  title: string;
  paraContent: string;
  imgSrc: StaticImageData;
  compImg: StaticImageData;
  textSegments: Record<string, string>[];
}

const PageContent = (content: PageContentAbout) => {
  const background: BannerLayer = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
    children: <Image fill src={content.imgSrc ?? ''} alt='hero' placeholder='blur' />,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 0.85],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.heroHeader}>
        <h1 className={RecoletaBold.className}>{content.title}</h1>
      </div>
    ),
  };

  return (
    <div className={styles.heroWrapp}>
      <PaperDividTop />
      <ParallaxBanner className={styles.aboutUsHero} layers={[background, headline]} />

      <div className={styles.masterContainer}>
        <PaperDividBot />
        <div className={`${styles.innerContent}`}>
          <p>{content.paraContent}</p>
          <div className={styles.imgCont}>
            <Image fill alt='img' src={content.compImg} />
          </div>
        </div>

        <div className={styles.innerContentWrapp}>
          <div className={styles.headerWrapp}>
            <h2>Informacije o tvrtki:</h2>
          </div>
          <div className={styles.innerContentAlt}>
            {content.textSegments.map((segment, index) => {
              return (
                <div key={segment.title} className={styles.contentBlock}>
                  <p className={styles.segmentTitle}>{segment.title}</p>
                  <p
                    className={
                      index === 8
                        ? `${styles.segmentContentContact} ${styles.segmentContent}`
                        : `${styles.segmentContent}`
                    }
                  >
                    {index === 4 ? segment.content.split('\n').map((t) => <span key={t}>{t}</span>) : segment.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
