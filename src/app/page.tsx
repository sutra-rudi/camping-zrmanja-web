// import dynamic from 'next/dynamic';
import AppHeader from './components/AppHeader';
import styles from './styles/page.module.scss';
import { Suspense } from 'react';
import Loading from './loading';
import AppFooter from './components/AppFooter';
import HeroSekcija from './sections/HeroSekcija';

export default async function Home() {
  return (
    <main className={styles.homeMain}>
      <Suspense fallback={<Loading />}>
        <AppHeader />
        <HeroSekcija />
        <AppFooter />
      </Suspense>
    </main>
  );
}
