import React, { Suspense } from 'react';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import styles from '../styles/page.module.scss';

import Loading from './loading';
import aboutUsHero from '../img/heros/about-us-hero.png';
import compImage from '../img/globals/about-us-company-img.png';
import dynamic from 'next/dynamic';

const pageParagraphContentHr = `Riva Rafting Centar d.o.o. je tvrtka s više od 20 godina iskustva u poslovanju na ruralnom, brdsko-planinskom području, smještena u Kruševu, zaseoku Drage iznad Obrovca. Naša lokacija ima nevjerojatan turistički potencijal za aktivni, sportski i seoski turizam, te je strateški pozicionirana na udaljenosti od 0 do 80 km od većine Nacionalnih parkova i Parkova prirode.
\nKao vodeća tvrtka za seoski i sportski turizam u Zadarskoj županiji, ali i šire, ponosni smo na svoj doprinos u promociji regije. Riva Rafting Centar d.o.o. je odabran kao glavni konzultant produkcije Discovery Channela za svjetski poznatu avanturističku seriju Man, Woman, Wild. Ovaj projekt dodatno je pozicionirao našu tvrtku kao stručnjaka za aktivnosti na otvorenom, što potvrđuje naše dugogodišnje iskustvo i znanje o izazovnim terenima koje prolaze protagonisti serije.
\nPonosimo se time što smo jedna od prvih tvrtki na hrvatskom tržištu koja se posvećuje osmišljavanju, organizaciji i izvođenju svih usluga vezanih uz team buildinge i aktivni odmor za grupe i individualne goste. Osim standardne ponude aktivnosti kao što su rafting, kajaking, trekking i biciklizam, proširili smo svoje djelovanje na organizaciju sportskih manifestacija. Naša suradnja s lokalnim zajednicama potiče razvoj novih avanturističkih sportova i pomaže u promociji regije kao destinacije za aktivni odmor.
\nSvake godine nastojimo proširiti svoju ponudu, donoseći nove programe koji pronalaze svoje mjesto na tržištu. U fokusu su nam programi koji omogućuju istraživanje kanjona rijeka Zrmanje, Krnjeze i Kupe, južnih padina Velebita, Jadranskog mora te bogatog kraškog podzemlja koje ova regija nudi.
\nRiva Rafting Centar d.o.o. nije samo tvrtka koja se bavi turizmom; također sudjelujemo u znanstvenim sferama te potičemo razvoj znanstvenog turizma. Naša aktivnost privlači brojne znanstvenike i istraživače iz različitih područja kao što su speleologija, geomorfologija, biologija i slično. Osim što promoviramo ljepote prirode, potičemo i istraživanje i očuvanje njezinih resursa za buduće generacije.`;

const companyInfoSegments = [
  {
    title: 'Adresa',
    content: 'Župani, Drage 7a\n23450 Obrovac\nHrvatska',
  },
  {
    title: 'Radno vrijeme',
    content: 'Ponedjeljak – Petak: 08:00 – 15:00\nSubota – Nedjelja: 08:00 – 13:00',
  },
  {
    title: 'Voditelj poslova',
    content: 'Romana Župan, bacc.oec',
  },
  {
    title: 'Registar',
    content: 'Upisan/a u Sudski registar Zadar, br. 110013185',
  },
  {
    title: 'Status zaposlenika',
    content: 'Ovlašteni zaposlenik tvrtke Riva Rafting Centar, PA d.o.o. prema GL.3 Čl. 16-19 nametnutog Zakona.',
  },
  {
    title: 'OIB (Porezni identifikacijski broj)',
    content: '07465455406',
  },
  {
    title: 'Certifikacija',
    content:
      'Ovlašten/a prema Certifikatu položenog stručnog ispita za voditelja poslovnice (N.N. 8/96) i (N.N. 62/96)\nBroj: 76/2007, 19. srpnja 2007.\nSveučilište u Splitu – Ekonomski fakultet',
  },
  {
    title: 'ID KOD',
    content: 'HR-AB-23-110013185',
  },

  {
    title: 'Kontakt informacije',
    content:
      'Email: info@riva-rafting.hr\nTelefon: +385 (0) 23 689 920\nMobitel: +385 (0) 98 438 711\nFax: +385 (0) 23 689 930',
  },
  {
    title: 'Direktor/Član uprave',
    content: 'Đuro Župan',
  },
  {
    title: 'Nadležno tijelo za nadzor',
    content:
      'Ministarstvo turizma – Samostalni sektor turističke inspekcije\nAdresa: Trg Republike Hrvatske 8/1, 10000 Zagreb, Hrvatska\n\nSukladno članku 6. Točka 3. Zakona o pružanju usluga u turizmu obavještavamo potrošače da eventualno nezadovoljstvo za pruženu uslugu mogu iskazati prigovorom u pisanoj formi u prostorijama agencije ili isti možete poslati putem pošte, telefaksa ili elektroničke pošte na adresu info@riva-rafting.hr.',
  },
];

export default async function Onama() {
  const LazyContent = dynamic(() => import('./PageContent'), { ssr: false });

  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.aboutUsMain}>
        <LazyContent
          title='O nama'
          paraContent={pageParagraphContentHr}
          imgSrc={aboutUsHero}
          compImg={compImage}
          textSegments={companyInfoSegments}
        />
      </main>

      <AppFooter isAbout />
    </Suspense>
  );
}
