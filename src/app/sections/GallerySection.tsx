'use client';

import React from 'react';
import slika1 from '../img/sections/karuzel1.png';
import slika2 from '../img/sections/karuzel2.png';
import slika3 from '../img/sections/karuzel3.png';
import slika4 from '../img/sections/karuzel4.png';
import slika5 from '../img/sections/imag3.png';
import styles from '../styles/gallerySection.module.scss';
import Image from 'next/image';
import paralOne from '../img/sections/PARAL-UP.png';
import paralTwo from '../img/sections/PARAL-DOWN.png';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import localFont from 'next/font/local';

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useAppContext } from '../contexts/store';
const RecoletaSemiBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-SemiBold.ttf', weight: '600' }],
});

const GallerySection = () => {
  const {
    state: { userLang },
  } = useAppContext();

  const title_hr = 'NAŠ DOM - RIJEKA ZRMANJA';
  const content_hr =
    'Sa svojim dubokim kanjonom koji se proteže kroz spektakularne vapnenačke stijene, nudi nezaboravne prizore čiste, smaragdno zelene vode koja se vijuga kroz divljinu Sjeverne Dalmacije.';
  const title_eng = 'OUR HOME - ZRMANJA RIVER';
  const content_eng =
    'With its deep canyon cutting through spectacular limestone cliffs, it offers unforgettable views of pure, emerald-green water winding through the wilderness of Northern Dalmatia.';

  const background: BannerLayer = {
    image: `${paralOne.src}`,
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
  };

  const splideOptions: any = {
    perPage: 3,
    type: 'slide',
    drag: 'free',
    snap: true,
    gap: '0.5rem',
    focus: 'center',
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 2000,
    rewind: true,

    breakpoints: {
      640: { perPage: 1.2 },
      960: { perPage: 2.2 },
      1200: { perPage: 3 },
    },
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.gallerySectionTextOverlay}>
        <div className={styles.gallerySectionTextOverlayContent}>
          <h2 className={RecoletaSemiBold.className}>{userLang === 'hr' ? title_hr : title_eng}</h2>
          <h4>{userLang === 'hr' ? content_hr : content_eng}</h4>
        </div>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    image: paralTwo.src,
    translateY: [0, 15],
    // scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  return (
    <section className={styles.gallerySection}>
      <ParallaxBanner className={styles.gallerySectionParallax} layers={[background, foreground, headline]} />

      <Splide className={styles.swiper} options={splideOptions}>
        <SplideSlide className={styles.swiperSlide}>
          <Image draggable={false} fill src={slika1} alt='slika' />
        </SplideSlide>
        <SplideSlide className={styles.swiperSlide}>
          <Image draggable={false} fill src={slika2} alt='slika' />
        </SplideSlide>
        <SplideSlide className={styles.swiperSlide}>
          <Image draggable={false} fill src={slika3} alt='slika' />
        </SplideSlide>

        <SplideSlide className={styles.swiperSlide}>
          <Image draggable={false} fill src={slika4} alt='slika' />
        </SplideSlide>

        <SplideSlide className={styles.swiperSlide}>
          <Image draggable={false} fill src={slika5} alt='slika' />
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default GallerySection;
