'use client';

import React from 'react';
import AppButton from '../components/AppButton';
import odm1 from '../img/sections/odmori-se/01.png';
import odm2 from '../img/sections/odmori-se/02.png';
import odm3 from '../img/sections/odmori-se/03.png';
import Image from 'next/image';
import styles from '../styles/odmoriSe.module.scss';
import { useParallax } from 'react-scroll-parallax';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
import Link from 'next/link';

const OdmoriSeSekcija = () => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  const sectionContentHr = `Zrmanja Camping Village, pruža idealan bijeg od gradske vreve u blizini Obrovca. Smješten na osami, na svježem zraku i okružen prirodom, kamp nudi miran i opuštajući ambijent.`;

  const sectionContentHrEx = `Svojim mobilnim kućicama i brojnim sadržajima kao što su bazen, dječje igralište i sportski tereni, Zrmanja Camping je idealno odredište za sve koji traže bijeg u prirodu i opuštanje daleko od užurbane svakodnevice.`;

  const sectionContentEn = `Zrmanja Camping Village provides an ideal escape from the hustle and bustle of the city, near Obrovac. Located in a secluded area with fresh air and surrounded by nature, the camp offers a peaceful and relaxing atmosphere.`;

  const sectionContentEnEx = `With its mobile homes and numerous amenities such as a pool, children's playground, and sports fields, Zrmanja Camping is the perfect destination for those seeking a getaway in nature and relaxation away from the busy everyday life.`;

  const { ref: imageOne } = useParallax<HTMLImageElement>({
    scale: [1, 1.1],
    // translateY: [0, -5],
    // easing: [0.5, 0.2, 0.4, 0.25],
  });

  const { ref: imageTwo } = useParallax<HTMLImageElement>({
    // scale: [1, 1.1],
    translateY: [0, -15],
    // easing: [0.5, 0.2, 0.4, 0.25],
  });
  const parseLink =
    checkParams === UserLanguage.hr ? `/kontakt?lang=${UserLanguage.hr}` : `/kontakt?lang=${UserLanguage.en}`;
  return (
    <section className={styles.mainSection}>
      <div className={styles.innerContent}>
        <div className={styles.ctaContainer}>
          <h2>{parseByLang('Odmori se', 'Take a break')}</h2>
          <div className={styles.paragraphContainer}>
            <p>{parseByLang(sectionContentHr, sectionContentEn)}</p>
            <p>{parseByLang(sectionContentHrEx, sectionContentEnEx)}</p>
          </div>
          <div className={styles.sectionButtonsContainer}>
            <Link href={parseLink}>
              <AppButton isAbout content={parseByLang('Kontaktirajte nas', 'Contact us')} />
            </Link>
            <Link
              href={
                'https://www.google.com/maps/dir//Camping+Village+Zrmanja/@44.1843724,15.689788,16.95z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4761c7af57c632ed:0xf9e3f2ec2318a20b!2m2!1d15.6945726!2d44.1827998?entry=ttu'
              }
            >
              <AppButton isRelax isAbout content={parseByLang('Google maps', 'Google maps')} />
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image ref={imageOne as any} width={315} height={237} src={odm1} placeholder='blur' alt='picture of camp' />
          <Image ref={imageTwo as any} width={385} height={534} src={odm2} placeholder='blur' alt='picture of camp' />
          <Image width={234} height={174} src={odm3} alt='picture of camp' placeholder='blur' />
        </div>
      </div>
    </section>
  );
};

export default OdmoriSeSekcija;
