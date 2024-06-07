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

import { useInView } from 'react-intersection-observer';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

const ubuntuCondensed = Ubuntu_Condensed({ weight: '400', subsets: ['latin'] });

interface MoreInfoProps {
  isLanding: boolean;
}

const DodatneInformacije = (props: MoreInfoProps) => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

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
      <h2 className={styles.sectionHeading}>{parseByLang('Dodatne Informacije', 'Additional information')}</h2>

      <div ref={ref} className={styles.sectionListContainer}>
        <div className={inView ? `${styles.imageBox} ${styles.inView}` : `${styles.imageBox}`}>
          <Link href={'https://riva-rafting-centar.hr'}>
            <div className={styles.titleHolder}>
              <div className={styles.titleHolderInner}>
                <h6 className={ubuntuCondensed.className}>{parseByLang('RIVA RAFTING', 'RIVA RAFTING')}</h6>
                <h2 className={styles.headingDefault}>
                  {parseByLang(
                    'TURISTIČKE AKTIVNOSTI\nNA ZRMANJI\nI VELEBITU',
                    'TOURIST ACTIVITIES\nON ZRMANJA\nAND VELEBIT'
                  )}
                </h2>
              </div>
            </div>

            <Image src={moreInfoFrontOne} fill alt='offer image' quality={100} />
            <Image src={moreInfoBackOne} fill alt='offer image' quality={100} className={`${styles.zcv}`} />
          </Link>
        </div>
        <div className={inView ? `${styles.imageBox} ${styles.inView}` : `${styles.imageBox}`}>
          <Link href={`https://micanovidvori.com`}>
            <div className={styles.titleHolder}>
              <div className={styles.titleHolderInner}>
                <h6 className={ubuntuCondensed.className}>{parseByLang('MIĆANOVI DVORI', 'MIĆANOVI DVORI')}</h6>
                <h2 className={styles.headingDefault}>{parseByLang('DOMAĆA HRANA', 'LOCAL FOOD')}</h2>
              </div>
            </div>
            <Image src={moreInfoFrontTwo} fill alt='offer image' quality={100} />
            <Image src={moreInfoBackTwo} fill alt='offer image' quality={100} className={`${styles.zcv}`} />
          </Link>
        </div>
        <div className={inView ? `${styles.imageBox} ${styles.inView}` : `${styles.imageBox}`}>
          <Link href={`/obrovacki-kraj/?lang=${checkParams}`}>
            <div className={styles.titleHolder}>
              <div className={styles.titleHolderInner}>
                <h6 className={ubuntuCondensed.className}>
                  {parseByLang('OBROVAC - ZRMANJA - VELEBIT', 'OBROVAC - ZRMANJA - VELEBIT')}
                </h6>
                <h2 className={styles.headingDefault}>
                  {parseByLang('ŠTO POSJETITI U OKOLICI?', 'WHAT TO VISIT IN THE AREA?')}
                </h2>
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
