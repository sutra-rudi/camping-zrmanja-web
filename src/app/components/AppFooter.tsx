'use client';

import React from 'react';
import styles from '../styles/appFooter.module.scss';
import footerBg from '../img/globals/footer-main-bg.png';
import appLogo from '../img/logos/camping-logo.svg';
import Image from 'next/image';
import facebookIcon from '../img/icons/FACEBOOK-FOOTER.svg';
import instaIcon from '../img/icons/INSTA-FOOTER.svg';
import teleIcon from '../img/icons/TELE-FOOTER.svg';
import footerArrow from '../img/icons/FOOTER-LINK-ARROW.svg';
import footerAltBg from '../img/globals/footer-small-screen.png';

import PaperDividTop from './PaperDividTop';
import { useAppContext } from '../contexts/store';
import { useWindowSize } from '../hooks/useWindowSize';

import { kampKuciceContent } from '../staticContentData/kampKucice';

interface FooterInterface {
  isAbout?: boolean;
}

const AppFooter = (props: FooterInterface) => {
  const {
    state: { userLang },
  } = useAppContext();

  const en_links = [
    { title: 'Hiking tour', href: '/activities/walking-tour' },
    { title: 'Kayak tours', href: '/activities/kayak' },
    { title: 'Rafting tour', href: '/activities/Rafting-on-Zrmanja' },
    { title: 'Kayaking from Zrmanja to the Adriatic Sea', href: '/activities/Kayak-River-to-the-sea' },
    { title: 'Stand Up Paddle', href: '/activities/Stand-Up-Paddle-Zrmanja' },
    { title: 'Boat Tour', href: '/activities/Zrmanja-by-boat' },
    { title: 'Jeep Safari', href: '/activities/Velebit-Jeep-safari' },
    { title: 'Caving', href: '/activities/Cave-Modric' },
    { title: 'Horseback Riding', href: '/activities/horses' },
    { title: 'Cycling', href: '/activities/Bike-riding' },
  ];

  const hr_links = [
    { title: 'Pješačka Tura', href: '/aktivnosti/pjesacke-ture' },
    { title: 'Kayak Ture', href: '/aktivnosti/kayak-tura' },
    { title: 'Rafting Tura', href: '/aktivnosti/Rafting' },
    { title: 'Kayak po Zrmanji do Jadranskog mora', href: '/aktivnosti/Kayak-Zrmanja-More' },
    { title: 'Stand Up Paddle', href: '/aktivnosti/Stand-Up-Paddle' },
    { title: 'Vožnja Brodom', href: '/aktivnosti/Zrmanja-brodom' },
    { title: 'Jeep Safari', href: '/aktivnosti/Jeep-safari' },
    { title: 'Špiljarenje', href: '/aktivnosti/Spiljarenje' },
    { title: 'Jahanje', href: '/aktivnosti/Jahanje' },
    { title: 'Vožnja Bicikla', href: '/aktivnosti/Bicik' },
  ];

  const parseByLang = (hrString: string, enString: string) => (userLang === 'hr' ? hrString : enString);

  const clientWindowSize = useWindowSize();

  return (
    <footer style={{ marginTop: props.isAbout ? '0' : '3rem' }} className={styles.appFooter}>
      <PaperDividTop isAbout={props.isAbout} />

      <div className={styles.socialFooterStack}>
        <p>{parseByLang('Zapratite nas:', 'Follow us:')}</p>
        <div className={styles.socialIconStack}>
          <Image src={facebookIcon} alt='icon' width={32} height={32} />
          <Image src={instaIcon} alt='icon' width={32} height={32} />
          <Image src={teleIcon} alt='icon' width={32} height={32} />
        </div>
      </div>

      <Image
        fill
        src={clientWindowSize && clientWindowSize?.width > 1024 ? footerBg : footerAltBg}
        alt='footerBackground'
        placeholder='blur'
        quality={100}
        loading='lazy'
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
                    <a href=''>{userLang === 'hr' ? content.titleHr : content.titleEng}</a>
                  </li>
                ))}
                {/* {userLang === 'hr'
                  ? hr_links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href}>{link.title}</a>
                      </li>
                    ))
                  : en_links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href}>{link.title}</a>
                      </li>
                    ))} */}
              </ul>
            </div>
          </div>
          <div className={styles.footerBlock}>
            <p>{parseByLang('Linkovi', 'Links')}</p>
            <div className={styles.linkStack}>
              <a href={parseByLang('/o-nama', '/about-us')}>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>{parseByLang('O nama', 'About us')}</span>
              </a>
              <a href={'/kontakt'}>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>{parseByLang('Kontakt forma', 'Contact form')}</span>
              </a>
              <a href='/#FAQ'>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>{parseByLang('FAQ', 'FAQ')}</span>
              </a>
              <a href='/obrovacki-kraj'>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>Obrovački kraj</span>
              </a>
              <a href=''>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>Zrmanja Camping village</span>
              </a>
              <a href=''>
                <Image src={footerArrow} alt='icon' width={16} height={16} />
                <span>Mičanovi dvori</span>
              </a>
            </div>
          </div>

          <div className={styles.footerBlock}>
            <p>{parseByLang('Kontaktirajte nas', 'Contact us')}</p>
            <div className={styles.contactStack}>
              <a href='https://www.google.com/maps/dir//Obala+hr.+Čas.+Senada+Ž.+6,+23450,+Obrovac/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4761c76f06da2a03:0x8abf7d8f6eb1b3c1?sa=X&ved=1t:707&ictx=111'>{`6 Obala hr. Čas. Senada Ž.,\nObrovac, Croatia`}</a>
              <a href='mailto:info@riva-rafting-centar.hr'>info@riva-rafting-centar.hr</a>
              <a href='tel:+38523689920'>023 689 920</a>
            </div>
          </div>

          <div className={styles.footerDislaimerTrack}>
            <div className={styles.disclaimerSig}>
              <div className={styles.disclaimerSigIn}>
                <a href={parseByLang('/uvjeti-koristenja', '/terms-of-use')}>
                  {parseByLang('Uvjeti i odredbe', 'Terms & Conditions')}
                </a>

                <span>|</span>

                <a href={parseByLang('/pravila-privatnosti', '/privacy-policy')}>
                  {parseByLang('Politika privatnosti', 'Privacy Policy')}
                </a>

                <span>|</span>

                <a href={parseByLang('/podatci-o-tvrtki', '/company-info')}>
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
                <a href='https://www.facebook.com/RivaRaftingCentar/'>
                  <Image src={facebookIcon} alt='icon' width={32} height={32} />
                </a>
                <a href='https://www.instagram.com/riva_rafting_centar/ '>
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
