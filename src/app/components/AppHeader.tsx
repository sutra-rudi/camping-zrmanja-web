'use client';

import Link from 'next/link';
import React from 'react';
import svgAppLogo from '../img/logos/camping-logo.svg';
import Image from 'next/image';

import styles from '../styles/appHeader.module.scss';
import LanguageSwitch from './LanguageSwitch';
import { Spin as Hamburger } from 'hamburger-react';
import instaIcon from '../img/icons/MOBILE-MENU-SOCIAL-2.svg';
import facebookIcon from '../img/icons/MOBILE-MENU-SOCIAL-1.svg';
import teleIcon from '../img/icons/MOBILE-MENU-SOCIAL-3.svg';

import mobilePapir from '../img/globals/MOBILE-PAPIR.svg';

import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

const AppHeader = () => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  const navLinksOne = [
    {
      text: parseByLang(`O nama`, `About us`),
      href: parseByLang(`/o-nama/?lang=${checkParams}`, `/about-us/?lang=${checkParams}`),
    },
    {
      text: parseByLang('Smještaj', 'Accommodation'),
      href: parseByLang(
        `/smjestaj/mobilne-kucice/?lang=${checkParams}`,
        `/smjestaj/mobilne-kucice/?lang=${checkParams}`
      ),
    },
    { text: parseByLang('Kontakt', 'Contact'), href: `/kontakt/?lang=${checkParams}` },
    {
      text: parseByLang('Što posjetiti?', 'What to visit?'),
      href: parseByLang(`/obrovacki-kraj/?lang=${checkParams}`, `/obrovacki-kraj/?lang=${checkParams}`),
    },
  ];
  const navLinksTwo = [
    { text: 'Mićanovi Dvori', href: '/' },
    { text: 'Riva Rafting Centar', href: '/' },
    // { text: 'Što posjetiti u okolici?', href: '/obrovacki-kraj' },
  ];

  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);

  const handleNavControl = () => {
    if (!isNavOpen) {
      document.documentElement.classList.add('overflow-hidden');
      setIsNavOpen(true);
    } else {
      document.documentElement.classList.remove('overflow-hidden');
      setIsNavOpen(false);
    }
  };

  React.useEffect(() => {
    document.documentElement.classList.remove('overflow-hidden');
  }, []);

  const HeaderBaseOne = () => {
    return (
      <div className={styles.navLeft}>
        {navLinksOne.map((link) => (
          <Link key={link.text} href={link.href}>
            {link.text}
          </Link>
        ))}
      </div>
    );
  };

  const HeaderBaseTwo = () => {
    return (
      <div className={styles.navRight}>
        {navLinksTwo.map((link) => (
          <Link key={link.text} href={link.href}>
            {link.text}
          </Link>
        ))}
      </div>
    );
  };

  const parseLink =
    checkParams === UserLanguage.hr ? `/kontakt?lang=${UserLanguage.hr}` : `/kontakt?lang=${UserLanguage.en}`;

  return (
    <nav className={styles.navParent}>
      <div className='overflow-hidden'>
        <div className={`${styles.navPromoTrack} `}>
          <span>TRIP ADVISOR</span>
          <span>|</span>
          <a href='tel:+0038523689920'>+385 23 689 920</a>
          <span>|</span>
          <a href='mailto:info@riva-rafting-centar.hr'>info@riva-rafting-centar.hr</a>
        </div>
        <div className={styles.navMaster}>
          <Link className={styles.noEffectLogo} href={`/?lang=${checkParams}`}>
            <Image src={svgAppLogo} alt='app logo' />
          </Link>
          <div className={styles.navParentMaster}>
            <div className={styles.navInnerParent}>
              <div className={styles.navLeftParent}>
                <HeaderBaseOne />
              </div>
              <span className={styles.headerLinkDivid}>|</span>

              <HeaderBaseTwo />
            </div>
            <div className={styles.navInnerParent}>
              <Link className={styles.navCta} href={parseLink}>
                <span>{parseByLang('REZERVIRAJ SVOJ BORAVAK', 'BOOK YOUR STAY')}</span>
              </Link>
              <div className={styles.navInnerParentLang}>
                <LanguageSwitch />
              </div>
              <Hamburger toggled={isNavOpen} onToggle={handleNavControl} color='#2f2a32' />
            </div>
          </div>
        </div>

        {/* MOBILE */}

        <div
          className={
            isNavOpen ? `${styles.mobileNavParent}` : `${styles.mobileNavParent} ${styles.mobileNavParentClosed}`
          }
        >
          <div className={styles.mobileNavParentInner}>
            <div className={styles.langSwitchBlock}>
              <LanguageSwitch />
            </div>

            <div className={styles.mobileBlock}>
              {navLinksOne.map((link, index) => (
                <Link key={link.text} href={link.href}>
                  {link.text}
                </Link>
              ))}
            </div>

            <div className={styles.mobileBlockSpace}></div>

            <div className={styles.mobileBlock}>
              {navLinksTwo.map((link, index) => (
                <Link key={link.text} href={link.href}>
                  {link.text}
                </Link>
              ))}
            </div>

            <div className={styles.socialBlock}>
              <div className={styles.socialBlockImage}>
                <Image width={20} height={20} alt='icon' src={facebookIcon} />
              </div>
              <div className={styles.socialBlockImage}>
                <Image width={20} height={20} alt='icon' src={instaIcon} />
              </div>
              <div className={styles.socialBlockImage}>
                <Image width={20} height={20} alt='icon' src={teleIcon} />
              </div>
            </div>

            <Image className={styles.mobilePapir} alt='' src={mobilePapir} />
          </div>
        </div>
      </div>

      {/* MOBILE */}
    </nav>
  );
};

export default AppHeader;
