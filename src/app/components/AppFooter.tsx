'use client';

import React from 'react';
import styles from '../styles/appFooter.module.scss';
import footerBg from '../img/globals/camping-footer-bg.png';
import appLogo from '../img/logos/camping-logo.svg';
import Image from 'next/image';
import facebookIcon from '../img/icons/FACEBOOK-FOOTER.svg';
import instaIcon from '../img/icons/INSTA-FOOTER.svg';
import teleIcon from '../img/icons/TELE-FOOTER.svg';
import footerArrow from '../img/icons/FOOTER-LINK-ARROW.svg';
import footerAltBg from '../img/globals/footer-small-screen.png';

import PaperDividTop from './PaperDividTop';
import { useWindowSize } from '../hooks/useWindowSize';

import { kampKuciceContent } from '../staticContentData/kampKucice';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
import { getSocialLinksQuery } from '../queries/getSocialLinksQuery';
import Link from 'next/link';

interface FooterInterface {
  isAbout?: boolean;
}

const AppFooter = (props: FooterInterface) => {
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

  const parseByLang = (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString);

  const clientWindowSize = useWindowSize();

  return (
    <footer style={{ marginTop: props.isAbout ? '0' : '3rem' }} className={styles.appFooter}>
      <PaperDividTop isAbout={props.isAbout} />

      <div className={styles.socialFooterStack}>
        <p>{parseByLang('Zapratite nas:', 'Follow us:')}</p>
        <div className={styles.socialIconStack}>
          <Link href={typeof footerURLS !== 'undefined' && footerURLS.facebook !== null ? footerURLS.facebook : ''}>
            <Image src={facebookIcon} alt='icon' width={32} height={32} />
          </Link>
          <Link href={typeof footerURLS !== 'undefined' && footerURLS.instagram !== null ? footerURLS.instagram : ''}>
            <Image src={instaIcon} alt='icon' width={32} height={32} />
          </Link>
          <Link href='mailto:info@riva-rafting-centar.hr'>
            <Image src={teleIcon} alt='icon' width={32} height={32} />
          </Link>
        </div>
      </div>

      <Image
        fill
        src={clientWindowSize && clientWindowSize?.width > 1024 ? footerBg : footerAltBg}
        alt='footerBackground'
        placeholder='blur'
        quality={100}
        loading='eager'
        priority
        className={styles.footerImage}
      />

      <div className={styles.footerMaster}>
        <div className={styles.appLogoContainer}>
          <Image fill src={appLogo} alt='app logo' />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.footerBlock}>
            <p>{parseByLang('Ponuda našeg kampa', 'Offer at our camp')}</p>
            <div className={styles.activityStack}>
              <ul>
                {kampKuciceContent.map((content, index) => (
                  <li key={index}>
                    <a href={content.url ? `${content.url}/?lang=${checkParams}#${content.klasa}` : ''}>
                      {parseByLang(content.titleHr, content.titleEng)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.footerBlock}>
            <p>{parseByLang('Linkovi', 'Links')}</p>
            <div className={styles.linkStack}>
              <a href={parseByLang(`/o-nama/?lang=${checkParams}`, `/about-us/?lang=${checkParams}`)}>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>{parseByLang('O nama', 'About us')}</span>
              </a>
              <a href={`/kontakt/?lang=${checkParams}`}>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>{parseByLang('Kontakt forma', 'Contact form')}</span>
              </a>
              <a href={`/obrovacki-kraj/?lang=${checkParams}`}>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>{parseByLang('Obrovački kraj', 'Obrovac region')}</span>
              </a>
              <a href='https://www.riva-rafting-centar.hr/'>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>Riva Rafting Centar</span>
              </a>
              <a href='https://micanovidvori.com'>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>Mićanovi dvori</span>
              </a>
            </div>
          </div>

          <div className={styles.footerBlock}>
            <p>{parseByLang('Kontaktirajte nas', 'Contact us')}</p>
            <div className={styles.contactStack}>
              <a href='https://www.google.com/maps/dir//Obala+hr.+Čas.+Senada+Ž.+6,+23450,+Obrovac/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4761c76f06da2a03:0x8abf7d8f6eb1b3c1?sa=X&ved=1t:707&ictx=111'>{`Župani, Kruševo, Drage 7a,\n23450 Obrovac`}</a>
              <a href='mailto:info@riva-rafting-centar.hr'>info@riva-rafting-centar.hr</a>
              <a href='tel:+38523689920'>023 689 920</a>
            </div>
          </div>
          <div className={styles.footerDislaimerTrack}>
            <div className={styles.disclaimerSig}>
              <div className={styles.disclaimerSigIn}>
                <a href={parseByLang(`/uvjeti-koristenja/?lang=${checkParams}`, `/terms-of-use/?lang=${checkParams}`)}>
                  {parseByLang('Uvjeti i odredbe', 'Terms & Conditions')}
                </a>

                <span>|</span>

                <a
                  href={parseByLang(
                    `/pravila-privatnosti/?lang=${checkParams}`,
                    `/privacy-policy/?lang=${checkParams}`
                  )}
                >
                  {parseByLang(`Politika privatnosti`, `Privacy Policy`)}
                </a>

                <span>|</span>

                <a href={parseByLang(`/podatci-o-tvrtki/?lang=${checkParams}`, `/company-info/?lang=${checkParams}`)}>
                  {parseByLang('Podaci o tvrtki', 'Company info')}
                </a>
              </div>
              <div className={styles.disclaimerSigIn}>
                <span>{parseByLang('© 2024 All Rights Reserved', '© 2024 All Rights Reserved')}</span>
                <span>|</span>

                <a href='https://www.sutra.hr/'>WEB DESIGN SUTRA.HR</a>
              </div>
            </div>

            <div className={styles.disclaimerSocial}>
              <span>{parseByLang('Zapratite nas:', 'Follow us:')}</span>
              <div className={styles.disclaimerSocialIcons}>
                <a href={typeof footerURLS !== 'undefined' && footerURLS !== null ? footerURLS.facebook : ''}>
                  <Image src={facebookIcon} alt='icon' width={32} height={32} />
                </a>
                <a href={typeof footerURLS !== 'undefined' && footerURLS !== null ? footerURLS.instagram : ''}>
                  <Image src={instaIcon} alt='icon' width={32} height={32} />
                </a>
                <a href='mailto:info@riva-rafting-centar.hr'>
                  <Image src={teleIcon} alt='icon' width={32} height={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
