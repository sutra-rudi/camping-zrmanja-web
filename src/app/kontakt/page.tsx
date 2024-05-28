import React, { Suspense } from 'react';
import styles from '../styles/contact.module.scss';
import AppFooter from '../components/AppFooter';
import kontaktHero from '../img/heros/Kayak gallery-1.png';
import AppHeader from '../components/AppHeader';
import Loading from './loading';
import FAQsection from '../sections/FAQsection';
import PageContent from './PageContent';

export default async function Kontakt({ searchParams }: any) {
  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.sectionMain}>
        <PageContent
          title={
            typeof searchParams !== 'undefined' && searchParams.lang === 'en'
              ? `CONTACT US AND\nBOOK YOUR APPOINTMENT`
              : `KONTAKTIRAJTE NAS I\nREZERVIRAJTE SVOJ TERMIN`
          }
          imgSrc={kontaktHero}
        />

        <FAQsection />
      </main>
      <AppFooter />
    </Suspense>
  );
}
