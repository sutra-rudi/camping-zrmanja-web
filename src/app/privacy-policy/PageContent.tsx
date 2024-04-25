'use client';

import React from 'react';
import PaperDividTop from '../components/PaperDividTop';
import Image, { StaticImageData } from 'next/image';

import styles from '../styles/rulesAndDisclaimers.module.scss';
import localFont from 'next/font/local';
const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import PaperDividBot from '../components/PaperDividBot';

interface PageContentPriv {
  title: string;
  topText: string;
  segments: {
    title: string;
    content: string;
  }[];
  imgSrc: StaticImageData;
}

const PageContent = (content: PageContentPriv) => {
  const background: BannerLayer = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
    children: <Image fill src={content.imgSrc ?? ''} alt='hero' placeholder='blur' />,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 0.85],
    //     opacity: [0.15, 0],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.heroHeader}>
        <h1 className={RecoletaBold.className}>{content.title}</h1>
      </div>
    ),
  };
  // if (typeof window !== 'undefined' || window !== null) {
  //   return null;
  // }

  return typeof window !== 'undefined' && window !== null ? (
    <>
      <PaperDividTop />
      <ParallaxBanner className={styles.rulesHero} layers={[background, headline]} />

      <div className={styles.masterContainer}>
        <PaperDividBot />
        <div className={styles.innerContent}>
          <p className={styles.segmentContent}>{content.topText}</p>
          {content.segments.map((segment, index) => {
            return (
              <div key={segment.title} className={styles.contentBlock}>
                <p className={styles.segmentTitle}>{segment.title}</p>
                <p
                  className={
                    index === 4
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
    </>
  ) : null;
};

export default PageContent;
