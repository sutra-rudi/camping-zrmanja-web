'use client';
import { BannerLayer, ParallaxBanner } from 'react-scroll-parallax';
import React from 'react';
import styles from '../styles/obrovackiKraj.module.scss';
import bgImage from '../img/heros/pravila/podatci-o-tvrtki-hero.png';
import Image from 'next/image';
import localFont from 'next/font/local';
import PaperDividTop from '../components/PaperDividTop';
import obrovackiKrajData from '../../../public/webdata/obrovackiKrajData.json';
import img_1 from '../img/obrovacki-kraj/1.png';
import img_2 from '../img/obrovacki-kraj/2.png';
import img_3 from '../img/obrovacki-kraj/3.png';
import img_4 from '../img/obrovacki-kraj/4.png';
import img_5 from '../img/obrovacki-kraj/5.png';
import img_6 from '../img/obrovacki-kraj/6.png';
import img_7 from '../img/obrovacki-kraj/7.png';
import img_8 from '../img/obrovacki-kraj/8.png';
import img_9 from '../img/obrovacki-kraj/9.png';
import img_10 from '../img/obrovacki-kraj/10.png';
import img_11 from '../img/obrovacki-kraj/11.png';
import img_12 from '../img/obrovacki-kraj/12.png';
import img_13 from '../img/obrovacki-kraj/13.png';
import img_14 from '../img/obrovacki-kraj/14.png';
import img_15 from '../img/obrovacki-kraj/15.png';
import Link from 'next/link';
import paralOne from '../img/sections/PARAL-UP.png';
import paralTwo from '../img/sections/PARAL-DOWN.png';
import arrowIcon from '../img/icons/article-arrow-subpage-thin.svg';
import { useAppContext } from '../contexts/store';
import AppButton from '../components/AppButton';
import PaperDividBotAlt from '../components/PaperDivitBotAlt';

const format = [
  img_1,
  img_2,
  img_3,
  img_4,
  img_5,
  img_6,
  img_7,
  img_8,
  img_9,
  img_10,
  img_11,
  img_12,
  img_13,
  img_14,
  img_15,
];

const RecoletaBold = localFont({
  src: [{ path: '../../../public/fonts/recoleta-font/Recoleta-Bold.ttf', weight: '700' }],
});

const PageContent = () => {
  const {
    state: { userLang },
  } = useAppContext();

  const titleHr = `ŠTO POSJETITI U \n NAŠEM KRAJU?`;
  const titleEn = `WHAT TO VISIT IN \n OUR REGION?`;

  const likeHr = `Sviđa ti se što vidiš? \n Bookiraj svoju avanturu s nama!`;
  const likeEn = `Do you like what you see? \n Book your adventure with us!`;

  const headlineHr = `U srcu Obrovačkog kraja, očekuje vas bogatstvo prirodnih čuda i kulturnih bisera. Ovo izuzetno područje pruža nevjerojatne mogućnosti za istraživanje vrhova planina, divljih rijeka i impresivnih slapova, te uživanje u posjetama nacionalnim parkovima. Krenite od prekrasnih vrhova Velebita, otkrijte skrivene ljepote rijeke Krupe i Zrmanje te istražite dubine planine u Cerovačkim pećinama. Nakon toga, osvježite se kupanjem u Novigradskom ili Karinskom moru. Ne propustite priliku posjetiti Kudin most i Manastir Krupa kako biste još dublje zaronili u bogatstvo ovog fascinantnog kraja.`;

  const headlineEn = `In the heart of the Obrovac region, you can expect a wealth of natural wonders and cultural gems. This exceptional area offers incredible opportunities to explore mountain peaks, wild rivers, impressive waterfalls, and enjoy visits to national parks. Start from the beautiful peaks of Velebit, discover the hidden beauties of the Krupa and Zrmanja rivers, and explore the depths of the mountain in the Cerovačke Caves. After that, refresh yourself with a swim in the Novigrad or Karin Sea. Don't miss the chance to visit Kuda's Bridge and the Krupa Monastery to delve even deeper into the richness of this fascinating region.`;

  const langCheck = (croString: string, engString: string) => (userLang === 'hr' ? croString : engString);

  const paraBackground: BannerLayer = {
    image: `${paralOne.src}`,
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
  };

  const paraHeadline: BannerLayer = {
    translateY: [0, 30],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.gallerySectionTextOverlay}>
        <div className={styles.gallerySectionTextOverlayContent}>
          <div className={styles.spanTextContainer}>
            <h3>{langCheck(likeHr, likeEn)}</h3>
            <a href='tel:+38523689920'>TEL: +385 23 689 920</a>
            <a href='mailto:info@riva-rafting.hr'>EMAIL: info@riva-rafting.hr</a>
          </div>

          <AppButton
            content={langCheck(
              String('Rezerviraj svoju avanturu').toUpperCase(),
              String('Book your adventure').toUpperCase()
            )}
          />
        </div>
      </div>
    ),
  };

  const paraForeground: BannerLayer = {
    image: paralTwo.src,
    translateY: [0, 15],
    shouldAlwaysCompleteAnimation: true,
  };

  const background: BannerLayer = {
    translateY: [0, 60],
    shouldAlwaysCompleteAnimation: true,
    children: <Image fill src={bgImage ?? ''} alt='hero' placeholder='blur' priority />,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 0.95],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className={styles.heroHeader}>
        <h1 className={RecoletaBold.className}>{langCheck(titleHr, titleEn)}</h1>
        <h4>{langCheck(headlineHr, headlineEn)}</h4>
      </div>
    ),
  };

  return (
    <div className={styles.sectionMaster}>
      <PaperDividTop />
      <ParallaxBanner className={styles.sectionHero} layers={[background, headline]} />
      <div className={styles.articleCardContainer}>
        {obrovackiKrajData.map((content, index) => (
          <article key={content.ID}>
            <Image
              width={413}
              height={250}
              alt='article thumbnail'
              priority
              placeholder='blur'
              objectFit='cover'
              src={format[index]}
            />
            <div className={styles.articleContentCont}>
              <h2>{langCheck(content.naslov_hr, content.title_ENG)}</h2>
              <p>{langCheck(content.tekst_hr, content.text_ENG)}</p>
              <div className={styles.articleLinkStack}>
                <Link href={content.url_hr}>
                  <span>Saznaj više</span>
                  <Image src={arrowIcon} width={20} height={20} alt='arrow icon' />
                </Link>
                <Link href={content.Google_maps}>
                  <span>Google maps lokacija</span>
                  <Image src={arrowIcon} width={20} height={20} alt='arrow icon' />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <ParallaxBanner
        className={styles.gallerySectionParallax}
        layers={[paraBackground, paraForeground, paraHeadline]}
      />
      <PaperDividBotAlt />
    </div>
  );
};

export default PageContent;
