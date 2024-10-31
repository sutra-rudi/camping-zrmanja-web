import React, { Suspense } from 'react';
import styles from '../styles/contact.module.scss';
import AppFooter from '../components/AppFooter';
import heroKontakt from '../img/kamp-kucice/camp-site/camp-site07.png';
import AppHeader from '../components/AppHeader';
import Loading from './loading';
import PageContent from './PageContent';

export default async function Kontakt({ searchParams }: any) {
  return (
    <Suspense fallback={<Loading />}>
      <main className={styles.sectionMain}>
        <PageContent
          title={typeof searchParams !== 'undefined' && searchParams.lang === 'en' ? `SEND INQUIRY` : `POŠALJI UPIT`}
          imgSrc={heroKontakt}
        />
      </main>
    </Suspense>
  );
}
