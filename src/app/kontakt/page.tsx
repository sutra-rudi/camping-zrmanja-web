import React, { Suspense } from 'react';
import styles from '../styles/contact.module.scss';
import AppFooter from '../components/AppFooter';
import kontaktHero from '../img/heros/Kayak gallery-1.png';
import AppHeader from '../components/AppHeader';
import Loading from './loading';
import PageContent from './PageContent';

export default async function Kontakt({ searchParams }: any) {
  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.sectionMain}>
        <PageContent
          title={typeof searchParams !== 'undefined' && searchParams.lang === 'en' ? `SEND INQUIRY` : `POŠALJI UPIT`}
          imgSrc={kontaktHero}
        />
      </main>
      <AppFooter />
    </Suspense>
  );
}
