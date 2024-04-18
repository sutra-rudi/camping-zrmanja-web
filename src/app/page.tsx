import dynamic from 'next/dynamic';
import AppHeader from './components/AppHeader';
// import DodatneInformacije from './sections/DodatneInformacije';
import styles from './styles/page.module.scss';
import { Suspense } from 'react';
import Loading from './loading';
import AppFooter from './components/AppFooter';

export default async function Home() {
  // const HeroLazy = dynamic(() => import('./sections/HeroSekcija'));
  // const PromoLazy = dynamic(() => import('./sections/PromoSekcijaJedan'));
  // const TureLazy = dynamic(() => import('./sections/TureSekcija'));
  // const TureOfferLazy = dynamic(() => import('./sections/TurePonuda'));
  // const PogledajVideoLazy = dynamic(() => import('./sections/PogledajVideo'));
  // const OnamaSekcijaLazy = dynamic(() => import('./sections/OnamaSekcija'));
  // const FAQsectionLazy = dynamic(() => import('./sections/FAQsection'));
  // const GallerySectionLazy = dynamic(() => import('./sections/GallerySection'));

  return (
    <Suspense fallback={<Loading />}>
      <main className={styles.homeMain}>
        <AppHeader />
        {/* <HeroLazy /> */}
        {/* <PromoLazy />
        <TureLazy /> */}
        {/* <TureOfferLazy />
        <PogledajVideoLazy />
        <OnamaSekcijaLazy /> */}
        {/* <DodatneInformacije isLanding /> */}
        {/* <FAQsectionLazy />
        <GallerySectionLazy /> */}
        <AppFooter />
      </main>
    </Suspense>
  );
}
