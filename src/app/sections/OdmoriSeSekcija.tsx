'use client';

import React from 'react';
import { useAppContext } from '../contexts/store';
import AppButton from '../components/AppButton';
import odm1 from '../img/sections/odmori-se-1.png';
import odm2 from '../img/sections/odmori-se-2.png';
import odm3 from '../img/sections/odmori-se-3.png';
import Image from 'next/image';
import styles from '../styles/odmoriSe.module.scss';

const OdmoriSeSekcija = () => {
  const {
    state: { userLang },
  } = useAppContext();

  const parseByLang = (hrString: string, enString: string) => (userLang === 'hr' ? hrString : enString);

  const sectionContentHr = `Zrmanja Camping Village, pruža idealan bijeg od gradske vreve u blizini Obrovca. Smješten na osami, na svježem zraku i okružen prirodom, kamp nudi miran i opuštajući ambijent. Svojim mobilnim kućicama i brojnim sadržajima kao što su bazen, dječje igralište i sportski tereni, Zrmanja Camping je idealno odredište za sve koji traže bijeg u prirodu i opuštanje daleko od užurbane svakodnevice.`;

  const sectionContentEn = `Zrmanja Camping Village offers an ideal escape from the hustle and bustle of the city near Obrovac. Located in seclusion, amidst fresh air and surrounded by nature, the campsite provides a peaceful and relaxing ambiance. With its mobile homes and numerous amenities such as a pool, playground, and sports courts, Zrmanja Camping is the perfect destination for those seeking a retreat in nature and relaxation away from the busy everyday life.`;

  return (
    <section className={styles.mainSection}>
      <div className={styles.innerContent}>
        <div className={styles.ctaContainer}>
          <h2>{parseByLang('Odmori se', 'Take a break')}</h2>
          <p>{parseByLang(sectionContentHr, sectionContentEn)}</p>
          <div className={styles.sectionButtonsContainer}>
            <AppButton isAbout content={parseByLang('Rezervirajte svoj boravak', 'Book your stay')} />
            <AppButton isRelax isAbout content={parseByLang('Pogledaj video', 'Watch video')} />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image width={315} height={237} src={odm1} alt='picture of camp' />
          <Image width={385} height={534} src={odm2} alt='picture of camp' />
          <Image width={234} height={174} src={odm3} alt='picture of camp' />
        </div>
      </div>
    </section>
  );
};

export default OdmoriSeSekcija;
