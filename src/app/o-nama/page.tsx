import React, { Suspense } from 'react';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import styles from '../styles/page.module.scss';

import Loading from './loading';
import aboutUsHero from '../img/heros/about-us-hero.png';
import compImage from '../img/globals/about-us-company-img.png';
import PageContent from './PageContent';
import { UserLanguage } from '../types/appState';

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

const pageParagraphContentEn = `Riva Rafting Centar d.o.o. is a company with over 20 years of experience in operating in rural, mountainous areas, located in Kruševo, in the hamlet of Drage above Obrovac. Our location has incredible tourist potential for active, sports, and rural tourism, and is strategically positioned within 0 to 80 km from most National Parks and Nature Parks.\n\nAs a leading company in rural and sports tourism in Zadar County and beyond, we are proud of our contribution to the region's promotion. Riva Rafting Centar d.o.o. was chosen as the main production consultant for Discovery Channel's world-famous adventure series Man, Woman, Wild. This project further positioned our company as an expert in outdoor activities, confirming our long-standing experience and knowledge of the challenging terrains that the series protagonists traverse.\n\nWe take pride in being one of the first companies in the Croatian market dedicated to designing, organizing, and conducting all services related to team building and active vacations for groups and individual guests. In addition to standard activities such as rafting, kayaking, trekking, and cycling, we have expanded our operations to include organizing sports events. Our collaboration with local communities promotes the development of new adventure sports and helps promote the region as an active vacation destination.\n\nEvery year, we strive to expand our offerings, introducing new programs that find their place in the market. Our focus is on programs that allow the exploration of the canyons of the Zrmanja, Krnjeza, and Kupa rivers, the southern slopes of Velebit, the Adriatic Sea, and the rich karst underground that this region offers.\n\nRiva Rafting Centar d.o.o. is not just a tourism company; we also participate in scientific spheres and promote the development of scientific tourism. Our activity attracts numerous scientists and researchers from various fields such as speleology, geomorphology, biology, and more. In addition to promoting the beauty of nature, we encourage research and preservation of its resources for future generations.`;

const companyInfoSegmentsEn = [
  {
    title: 'Address',
    content: 'Župani, Drage 7a\n23450 Obrovac\nCroatia',
  },
  {
    title: 'Business Hours',
    content: 'Monday – Friday: 08:00 – 15:00\nSaturday – Sunday: 08:00 – 13:00',
  },
  {
    title: 'Business Manager',
    content: 'Romana Župan, bacc.oec',
  },
  {
    title: 'Registry',
    content: 'Registered in the Zadar Court Register, No. 110013185',
  },
  {
    title: 'Employee Status',
    content: 'Authorized employee of Riva Rafting Centar, PA d.o.o. according to GL.3 Art. 16-19 of the imposed Law.',
  },
  {
    title: 'TIN (Tax Identification Number)',
    content: '07465455406',
  },
  {
    title: 'Certification',
    content:
      'Authorized by Certificate of passing the professional exam for branch office manager (N.N. 8/96) and (N.N. 62/96)\nNumber: 76/2007, July 19, 2007.\nUniversity of Split – Faculty of Economics',
  },
  {
    title: 'ID CODE',
    content: 'HR-AB-23-110013185',
  },
  {
    title: 'Contact Information',
    content:
      'Email: info@riva-rafting.hr\nPhone: +385 (0) 23 689 920\nMobile: +385 (0) 98 438 711\nFax: +385 (0) 23 689 930',
  },
  {
    title: 'Director/Management Board Member',
    content: 'Đuro Župan',
  },
  {
    title: 'Supervisory Authority',
    content: `Ministry of Tourism – Independent sector of tourism inspection\nAddress: Trg Republike Hrvatske 8/1, 10000 Zagreb, Croatia\n\nIn accordance with Article 6, Point 3 of the Law on Providing Tourism Services, we inform consumers that any dissatisfaction with the provided service can be expressed by a written complaint at the agency's premises or sent by mail, fax, or email to the address info@riva-rafting.hr.`,
  },
];

export default async function Onama({ searchParams }: { searchParams: { lang: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.aboutUsMain}>
        <PageContent
          title={searchParams.lang === UserLanguage.hr ? 'O nama' : 'About us'}
          paraContent={searchParams.lang === UserLanguage.hr ? pageParagraphContentHr : pageParagraphContentEn}
          imgSrc={aboutUsHero}
          compImg={compImage}
          textSegments={searchParams.lang === UserLanguage.hr ? companyInfoSegments : companyInfoSegmentsEn}
        />
      </main>

      <AppFooter isAbout />
    </Suspense>
  );
}
