import React, { Suspense } from 'react';
import styles from '../styles/rulesAndDisclaimers.module.scss';
import AppFooter from '../components/AppFooter';
import pravilaHero from '../img/heros/pravila/podatci-o-tvrtki-hero.png';
import AppHeader from '../components/AppHeader';
import Loading from './loading';
import dynamic from 'next/dynamic';
const sectionContent_hr = {
  title: 'Podatci o tvrtki',
  topText: '',
  segments: [
    {
      title: 'Adresa',
      content: 'Župani, Drage 7a\n23450 Obrovac\nHrvatska',
    },
    {
      title: 'Voditelj poslova',
      content: 'Romana Župan, bacc.oec',
    },
    {
      title: 'Status zaposlenika',
      content: 'Ovlašteni zaposlenik tvrtke Riva Rafting Centar, PA d.o.o. prema GL.3 Čl. 16-19 nametnutog Zakona.',
    },
    {
      title: 'Certifikacija',
      content:
        'Ovlašten/a prema Certifikatu položenog stručnog ispita za voditelja poslovnice (N.N. 8/96) i (N.N. 62/96)\nBroj: 76/2007, 19. srpnja 2007.\nSveučilište u Splitu – Ekonomski fakultet',
    },
    {
      title: 'Kontakt informacije',
      content:
        'Email: info@riva-rafting.hr\nTelefon: +385 (0) 23 689 920\nMobitel: +385 (0) 98 438 711\nFax: +385 (0) 23 689 930',
    },
    {
      title: 'Radno vrijeme',
      content: 'Ponedjeljak – Petak: 08:00 – 15:00\nSubota – Nedjelja: 08:00 – 13:00',
    },
    {
      title: 'Registar',
      content: 'Upisan/a u Sudski registar Zadar, br. 110013185',
    },
    {
      title: 'OIB (Porezni identifikacijski broj)',
      content: '07465455406',
    },
    {
      title: 'ID KOD',
      content: 'HR-AB-23-110013185',
    },
    {
      title: 'Direktor/Član uprave',
      content: 'Đuro Župan',
    },
    {
      title: 'Nadležno tijelo za nadzor',
      content:
        'Ministarstvo turizma – Samostalni sektor turističke inspekcije\nAdresa: Trg Republike Hrvatske 8/1, 10000 Zagreb, Hrvatska',
    },
    {
      title: 'Sukladno članku 6. Točka 3. Zakona o pružanju usluga u turizmu',
      content:
        'Obavještavamo potrošače da eventualno nezadovoljstvo za pruženu uslugu mogu iskazati prigovorom u pisanoj formi u prostorijama agencije ili isti možete poslati putem pošte, telefaksa ili elektroničke pošte na adresu info@riva-rafting.hr.',
    },
  ],
  imgSrc: pravilaHero,
};

export default async function PodatciOTvrtki() {
  const LazyContent = dynamic(() => import('./PageContent'), { ssr: false });

  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.mainSection}>
        <LazyContent {...sectionContent_hr} />
      </main>
      <AppFooter />
    </Suspense>
  );
}
