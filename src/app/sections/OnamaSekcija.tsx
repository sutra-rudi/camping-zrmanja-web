'use client';

import React from 'react';
import styles from '../styles/oNama.module.scss';
import AppButton from '../components/AppButton';

import AboutUsLottie from '../components/AboutUsLottie';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

const paragraphContent = `Riva Rafting Centar, specijalizirana putnička agencija, ističe se dugogodišnjom tradicijom u organizaciji pustolovnih i sportskih aktivnosti, obuhvaćajući širok spektar selektivnih turističkih usluga u Hrvatskoj, poput raftinga, kajakanja, SUP-a, off-roada, speleologije, trekkinga i biciklizma. Ove aktivnosti, kao inovativni doprinos ukupnoj turističkoj ponudi, ključne su za razvoj team building programa i sportsko-pustolovnih događanja, što je dovelo do razvoja jedinstvenog pristupa u marketingu - manifestacijskog marketinga.`;

const paragraphContentEx = `Uz ponudu organiziranja avantura vezanih za Zrmanju i Velebit, nudimo i usluge smještaja u našem CAMPING VILLAGE ZRMANJA i ugostiteljske usluge unutar seoskog gospodarstva MIĆANOVI DVORI.`;

const paraGraphContentEn = `Riva Rafting Center, a specialized travel agency, distinguishes itself with a long-standing tradition in organizing adventurous and sports activities, encompassing a wide range of selective tourism services in Croatia, such as rafting, kayaking, stand-up paddleboarding (SUP), off-roading, spelunking, trekking, and cycling. These activities, as an innovative contribution to the overall tourism offer, are crucial for the development of team-building programs and sports-adventure events, leading to the development of a unique marketing approach - event marketing.`;

const paraGraphContentEnEx = `In addition to offering adventures related to the Zrmanja River and Velebit, we also provide accommodation services in our CAMPING VILLAGE ZRMANJA and catering services within the rural estate MIĆANOVI DVORI.`;

const OnamaSekcija = () => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );
  return (
    <section className={styles.aboutUsSection}>
      {/* MAIN CONT START */}

      <div className={styles.masterContainer}>
        <div className={styles.aboutUsContentCont}>
          <div className={styles.imageHolder}>
            <AboutUsLottie />
          </div>

          <div className={styles.aboutUsContent}>
            <h2 className={styles.sectionHeading}>{parseByLang('O nama', 'About us')}</h2>
            <div className={styles.paragraphContainer}>
              <p>{parseByLang(paragraphContent, paraGraphContentEn)}</p>
              <p>{parseByLang(paragraphContentEx, paraGraphContentEnEx)}</p>
            </div>
            <div className={styles.buttonContainer}>
              <AppButton isAbout content={parseByLang('Saznaj više', 'Learn more')} />
              <AppButton isAbout content={parseByLang('Kontaktiraj nas', 'Contact us')} />
            </div>
          </div>
        </div>
      </div>
      {/* MAIN CONT END */}
    </section>
  );
};

export default OnamaSekcija;
