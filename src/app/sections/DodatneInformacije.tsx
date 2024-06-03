'use client';

import styles from '../styles/dodatneInformacije.module.scss';
import moreInfoFrontOne from '../img/sections/what-to-visit/02-front.png';
import moreInfoFrontTwo from '../img/sections/what-to-visit/03-front.png';
import moreInfoFrontThree from '../img/sections/what-to-visit/01-front.png';

import moreInfoBackOne from '../img/sections/what-to-visit/02-back.png';
import moreInfoBackTwo from '../img/sections/what-to-visit/03-back.png';
import moreInfoBackThree from '../img/sections/what-to-visit/01-back.png';

import React from 'react';
import Image from 'next/image';
import { Ubuntu_Condensed } from 'next/font/google';
import Link from 'next/link';
import { useAppContext } from '../contexts/store';
import { useInView } from 'react-intersection-observer';

const ubuntuCondensed = Ubuntu_Condensed({ weight: '400', subsets: ['latin'] });

interface MoreInfoProps {
  isLanding: boolean;
}

const DodatneInformacije = (props: MoreInfoProps) => {
  const {
    state: { userLang },
  } = useAppContext();

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section
      className={
        props.isLanding
          ? `${styles.dodatneInformacije}`
          : `${styles.dodatneInformacije} ${styles.dodatneInformacijeSub}`
      }
    >
      <h2 className={styles.sectionHeading}>{userLang === 'hr' ? 'Dodatne Informacije' : 'Additional information'}</h2>

      <div ref={ref} className={styles.sectionListContainer}>
        <div className={inView ? `${styles.imageBox} ${styles.inView}` : `${styles.imageBox}`}>
          <div className={styles.titleHolder}>
            <div className={styles.titleHolderInner}>
              <h6 className={ubuntuCondensed.className}>RIVA RAFTING</h6>
              <h2 className={styles.headingDefault}>{`TURISTIČKE AKTIVNOSTI\nNA ZRMANJI\nI VELEBITU`}</h2>
            </div>
          </div>

          <Image src={moreInfoFrontOne} fill alt='offer image' quality={100} />
          <Image src={moreInfoBackOne} fill alt='offer image' quality={100} className={`${styles.zcv}`} />
        </div>
        <div className={inView ? `${styles.imageBox} ${styles.inView}` : `${styles.imageBox}`}>
          <div className={styles.titleHolder}>
            <div className={styles.titleHolderInner}>
              <h6 className={ubuntuCondensed.className}>MIĆANOVI DVORI</h6>
              <h2 className={styles.headingDefault}>DOMAĆA HRANA</h2>
            </div>
          </div>

          <Image src={moreInfoFrontTwo} fill alt='offer image' quality={100} />
          <Image src={moreInfoBackTwo} fill alt='offer image' quality={100} className={`${styles.zcv}`} />
        </div>
        <div className={inView ? `${styles.imageBox} ${styles.inView}` : `${styles.imageBox}`}>
          <Link href={`/obrovacki-kraj/?lang=${userLang}`}>
            <div className={styles.titleHolder}>
              <div className={styles.titleHolderInner}>
                <h6 className={ubuntuCondensed.className}>OBROVAC - ZRMANJA - VELEBIT</h6>
                <h2 className={styles.headingDefault}>ŠTO POSJETITI U OKOLICI?</h2>
              </div>
            </div>

            <Image src={moreInfoFrontThree} fill alt='offer image' quality={100} />
            <Image src={moreInfoBackThree} fill alt='offer image' quality={100} className={`${styles.zcv}`} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DodatneInformacije;
