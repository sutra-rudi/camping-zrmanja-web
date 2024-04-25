import React, { Suspense } from 'react';
import styles from '../styles/rulesAndDisclaimers.module.scss';
import AppFooter from '../components/AppFooter';
import pravilaHero from '../img/heros/pravila/pravila-privatnosti-hero.png';
import AppHeader from '../components/AppHeader';

import Loading from './loading';
import dynamic from 'next/dynamic';
const sectionContent_hr = {
  title: 'Pravila privatnosti',
  topText: `Riva Rafting Centar, PA d.o.o. (u daljnjem tekstu "mi", "nas" ili "tvrtka") poštuje vašu privatnost i posvećeni smo zaštiti vaših osobnih podataka. Ova Pravila privatnosti opisuju kako prikupljamo, koristimo i otkrivamo osobne podatke koje primamo putem naše web stranice riva-rafting.hr (u daljnjem tekstu "web stranica"). Molimo vas da pažljivo pročitate ova pravila kako biste razumjeli naše postupke u vezi s vašim osobnim podacima i kako ih tretiramo.`,
  segments: [
    {
      title: '1. Osobni podaci koje prikupljamo',
      content:
        'Prikupljamo osobne podatke koje nam dobrovoljno pružate putem naše web stranice, kao što su vaše ime, adresa, e-mail adresa, broj telefona i slično, kako bismo vam pružili usluge koje tražite ili kako bismo vam pružili informacije koje ste zatražili.',
    },
    {
      title: '2. Način korištenja prikupljenih podataka',
      content:
        'Vaše osobne podatke koristit ćemo isključivo u svrhu pružanja usluga koje tražite od nas, komunikacije s vama, odgovaranja na vaše upite i poboljšanja naših usluga i web stranice. Nećemo dijeliti vaše osobne podatke s trećim stranama bez vašeg pristanka, osim ako to nije zakonom propisano ili je nužno za izvršavanje naših usluga.',
    },
    {
      title: '3. Sigurnost podataka',
      content:
        'Poduzimamo odgovarajuće tehničke i organizacijske mjere kako bismo zaštitili vaše osobne podatke od neovlaštenog pristupa, gubitka ili otkrivanja. Međutim, trebate biti svjesni da internet nije potpuno siguran okoliš i da ne možemo jamčiti sigurnost vaših osobnih podataka.',
    },
    {
      title: '4. Prava korisnika',
      content:
        'Imate pravo zatražiti pristup, ispravak, brisanje ili ograničenje obrade vaših osobnih podataka koje imamo. Također imate pravo prigovora na način na koji obrađujemo vaše osobne podatke. Za sve zahtjeve ili pritužbe u vezi s vašim osobnim podacima, molimo kontaktirajte nas putem podataka za kontakt navedenih u nastavku.',
    },
    {
      title: '5. Kontakt informacije',
      content: `Ako imate bilo kakvih pitanja, komentara ili pritužbi u vezi s ovim Pravilima privatnosti ili našim postupcima obrade osobnih podataka, molimo kontaktirajte nas putem sljedećih podataka:\nRiva Rafting Centar, PA d.o.o.\nAdresa: Župani, Drage 7a, 23450 Obrovac, Hrvatska\nE-mail: info@riva-rafting.hr\nTelefon: +385 (0) 23 689 920`,
    },
    {
      title: '6. Promjene u pravilima privatnosti',
      content:
        'Ova Pravila privatnosti mogu se povremeno ažurirati kako bi se odražavale promjene u našim praksama obrade osobnih podataka. Svaka ažuriranja će biti objavljena na ovoj web stranici. Preporučujemo vam da povremeno provjeravate ovu stranicu kako biste bili informirani o bilo kakvim promjenama.',
    },
  ],
  imgSrc: pravilaHero,
};

export default async function PravilaPrivatnosti() {
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
