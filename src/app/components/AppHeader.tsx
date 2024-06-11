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

import { useSearchParams, useRouter } from 'next/navigation';
import { UserLanguage } from '../types/appState';
import { getSocialLinksQuery } from '../queries/getSocialLinksQuery';

const AppHeader = () => {
  const [footerURLS, setFooterURLS] = React.useState<any>();
  React.useEffect(() => {
    const prepareFooterLinks = async () => {
      const getSocialLinks = await fetch(`https://cms.zrmanja-camping.hr/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: getSocialLinksQuery }),
        cache: 'no-store',
      });

      const parseSocialLinksData = await getSocialLinks.json();
      const prepareDataForFooter = parseSocialLinksData.data.povezniceDrustvene.povezniceDrustveneFields;
      setFooterURLS(prepareDataForFooter);
      return prepareDataForFooter;
    };

    prepareFooterLinks();
  }, []);
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );
  const [isActivitiesDropdown, setIsActivitiesDropdown] = React.useState<boolean>(false);
  const navLinksOne = [
    {
      text: parseByLang(`O nama`, `About us`),
      href: parseByLang(`/o-nama/?lang=${checkParams}`, `/o-nama/?lang=${checkParams}`),
    },
    {
      text: parseByLang('Smještaj', 'Accommodation'),
      href: parseByLang(
        `/smjestaj/mobilne-kucice/?lang=${checkParams}`,
        `/smjestaj/mobilne-kucice/?lang=${checkParams}`
      ),
      subItems: [
        {
          text: parseByLang('LUX MOBILNA KUĆICA', 'LUXURY MOBILE HOME'),
          href: parseByLang(
            `/smjestaj/mobilne-kucice/?lang=${checkParams}#lux-kucica`,
            `/smjestaj/mobilne-kucice/?lang=${checkParams}#lux-kucica`
          ),
        },
        {
          text: parseByLang('MOBILNA KUĆICA LUKA', 'LUKA MOBILE HOME'),
          href: parseByLang(
            `/smjestaj/mobilne-kucice/?lang=${checkParams}#luka-kucica`,
            `/smjestaj/mobilne-kucice/?lang=${checkParams}#luka-kucica`
          ),
        },
        {
          text: parseByLang('PITCH', 'PITCH'),
          href: parseByLang(
            `/smjestaj/parcele-i-kamp/?lang=${checkParams}#pitch-kucica`,
            `/smjestaj/parcele-i-kamp/?lang=${checkParams}#pitch-kucica`
          ),
        },
        {
          text: parseByLang('KAMP MJESTO', 'CAMP SITE'),
          href: parseByLang(
            `/smjestaj/parcele-i-kamp/?lang=${checkParams}#camp-kucica`,
            `/smjestaj/parcele-i-kamp/?lang=${checkParams}#camp-kucica`
          ),
        },
      ],
    },
    { text: parseByLang('Kontakt', 'Contact'), href: `/kontakt/?lang=${checkParams}` },
    {
      text: parseByLang('Što posjetiti?', 'What to visit?'),
      href: parseByLang(`/obrovacki-kraj/?lang=${checkParams}`, `/obrovacki-kraj/?lang=${checkParams}`),
    },
  ];
  const navLinksTwo = [
    { text: 'Mićanovi Dvori', href: 'https://micanovidvori.com' },
    { text: 'Riva Rafting Centar', href: 'https://riva-rafting-centar.hr' },
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

  const router = useRouter();

  const handleCustomPush = (url: string) => router.push(url);

  const HeaderBaseOne = () => {
    return (
      <div className={styles.navLeft}>
        {navLinksOne.map((link, index) => {
          if (index === 1) {
            return (
              <div className={styles.bigParent} key={link.text}>
                <Link
                  href={link.href}
                  className={styles.customNohover}
                  onMouseEnter={() => setIsActivitiesDropdown(true)}
                >
                  <span>{link.text}</span>
                </Link>

                <span
                  className={`${styles.navCustomLinks} ${isActivitiesDropdown ? styles.show : styles.hide}`}
                  onMouseLeave={() => setIsActivitiesDropdown(false)}
                >
                  {link.subItems!.map((aktiv) => (
                    <span onClick={() => handleCustomPush(aktiv.href)} key={aktiv.text}>
                      {aktiv.text}
                    </span>
                  ))}
                </span>
              </div>
            );
          }
          return (
            <Link key={link.text} href={link.href}>
              {link.text}
            </Link>
          );
        })}
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
              <Link href='mailto:info@riva-rafting-centar.hr'>
                <Image width={20} height={20} alt='icon' src={facebookIcon} />
              </Link>
            </div>
            <div className={styles.socialBlockImage}>
              <a href={typeof footerURLS !== 'undefined' && footerURLS !== null ? footerURLS.instagram : ''}>
                <Image width={20} height={20} alt='icon' src={instaIcon} />
              </a>
            </div>
            <div className={styles.socialBlockImage}>
              <a href={typeof footerURLS !== 'undefined' && footerURLS !== null ? footerURLS.facebook : ''}>
                <Image width={20} height={20} alt='icon' src={teleIcon} />
              </a>
            </div>
          </div>

          <Image className={styles.mobilePapir} alt='' src={mobilePapir} />
        </div>
      </div>

      {/* MOBILE */}
    </nav>
  );
};

export default AppHeader;
