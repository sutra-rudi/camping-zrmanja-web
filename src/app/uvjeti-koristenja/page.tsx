import React, { Suspense } from 'react';
import styles from '../styles/rulesAndDisclaimers.module.scss';
import AppFooter from '../components/AppFooter';
import pravilaHero from '../img/heros/pravila/uvjeti-koristenja-hero.png';
import AppHeader from '../components/AppHeader';

import Loading from './loading';
import dynamic from 'next/dynamic';
const sectionContent_hr = {
  title: 'Uvjeti Korištenja',
  topText:
    'Molimo vas pažljivo pročitajte sljedeće Uvjete korištenja (u daljnjem tekstu "Uvjeti") prije nego što pristupite ili koristite web stranicu riva-rafting.hr (u daljnjem tekstu "web stranica") koju upravlja Riva Rafting Centar, PA d.o.o. (u daljnjem tekstu "tvrtka", "mi" ili "nas"). Korištenjem ove web stranice pristajete na ove Uvjete. Ako se ne slažete s ovim Uvjetima, nemojte pristupati ili koristiti ovu web stranicu.',
  segments: [
    {
      title: '1. Intelektualno vlasništvo',
      content:
        'Sav sadržaj na ovoj web stranici, uključujući tekst, grafiku, logotipe, ikone, slike, audio i video zapise, digitalne preuzete datoteke i ostali materijal, zaštićen je zakonima o autorskim pravima i drugim zakonima o intelektualnom vlasništvu. Ne smijete reproducirati, distribuirati, mijenjati, prikazivati, izvoditi, prenositi ili na bilo koji način koristiti materijal s ove web stranice bez prethodnog pisanog odobrenja tvrtke.',
    },
    {
      title: '2. Linkovi trećih strana',
      content:
        'Ova web stranica može sadržavati linkove trećih strana ili resurse. Ti linkovi su samo za vaše praktične svrhe i ne impliciraju podršku ili odobrenje od strane tvrtke. Mi ne snosimo odgovornost za sadržaj trećih strana ili zaštitu vaših podataka prilikom korištenja tih stranica.',
    },
    {
      title: '3. Ograničenja odgovornosti',
      content:
        'Tvrtka ne jamči točnost, potpunost ili aktualnost informacija na ovoj web stranici. U najvećoj mjeri dopuštenoj zakonom, tvrtka neće biti odgovorna za bilo kakve gubitke ili štete nastale korištenjem ove web stranice ili njezinog sadržaja.',
    },
    {
      title: '4. Promjene i dopune',
      content:
        'Tvrtka zadržava pravo izmijeniti ili dopuniti ove Uvjete u bilo kojem trenutku bez prethodne najave. Svaka izmjena će biti objavljena na ovoj web stranici i stupit će na snagu odmah po objavi. Nastavak korištenja ove web stranice nakon takvih promjena predstavlja vaše prihvaćanje izmjena.',
    },
    {
      title: '5. Pravni nadzor',
      content:
        'Ovi Uvjeti uređuju se i tumače u skladu sa zakonima Republike Hrvatske. Svi sporovi koji proizlaze iz ovih Uvjeta bit će isključivo podložni nadležnosti sudova u Republici Hrvatskoj.',
    },
    {
      title: 'Kontakt informacije',
      content:
        'Ako imate bilo kakvih pitanja ili nedoumica u vezi s ovim Uvjetima, molimo kontaktirajte nas putem kontaktnih informacija navedenih na web stranici.',
    },
  ],
  imgSrc: pravilaHero,
};

export default async function UvjetiKoristenja() {
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
