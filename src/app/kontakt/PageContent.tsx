'use client';

import React from 'react';

import Image, { StaticImageData } from 'next/image';

import styles from '../styles/contact.module.scss';
import localFont from 'next/font/local';
const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

import { BannerLayer, ParallaxBanner, useParallax } from 'react-scroll-parallax';
import PaperDividBot from '../components/PaperDividBot';
// import ContactForm from '../components/ContactForm';
import cardImage from '../img/heros/Kayak gallery-1.png';
import { CiLocationOn as LocationIcon, CiMail as MailIcon } from 'react-icons/ci';
import { FiPhoneCall as PhoneIcon } from 'react-icons/fi';
import PaperDividTop from '../components/PaperDividTop';
import ContactForm from '../components/ContactForm';

interface AboutUsPageContent {
  title: string;
  imgSrc: StaticImageData;
}

const PageContent = (content: AboutUsPageContent) => {
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

  const { ref: paralaImage } = useParallax<HTMLDivElement>({
    scale: [1, 1.7],
  });
  // if (typeof window !== 'undefined' || window !== null) {
  //   return null;
  // }

  return typeof window !== 'undefined' && window !== null ? (
    <>
      <div className={styles.heroWrapp}>
        <PaperDividTop />
        <ParallaxBanner className={styles.sectionHero} layers={[background, headline]} />
      </div>

      <div className={styles.masterContainer}>
        <PaperDividBot />
        <div className={styles.contentContainer}>
          <ContactForm />
          <div className={styles.contactCardCont}>
            <div className={styles.contactInfoCont}>
              <p>Kontaktirajte nas</p>

              <div className={styles.contactInfoInnerCont}>
                <a href='https://www.google.com/maps/dir//Obala+hr.+Čas.+Senada+Ž.+6,+23450,+Obrovac/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4761c76f06da2a03:0x8abf7d8f6eb1b3c1?sa=X&ved=1t:707&ictx=111'>
                  <span className={styles.contactIcon}>
                    <LocationIcon />
                  </span>
                  <span className={styles.contactText}>6 Obala hr. Čas. Senada Ž., Obrovac, Croatia</span>
                </a>

                <a href={'mailto:info@riva-rafting-centar.hr'}>
                  <span className={styles.contactIcon}>
                    <MailIcon />
                  </span>
                  <span className={styles.contactText}>info@riva-rafting-centar.hr</span>
                </a>

                <a href={'tel:+38523689920'}>
                  <span className={styles.contactIcon}>
                    <PhoneIcon />
                  </span>
                  <span className={styles.contactText}>023 689 920</span>
                </a>
              </div>
            </div>
            <div className={styles.contactImageCont}>
              {/* @ts-ignore */}
              <Image ref={paralaImage} fill src={cardImage} alt='kaya tour' />
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default PageContent;
