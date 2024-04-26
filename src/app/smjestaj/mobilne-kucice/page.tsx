import { Suspense } from 'react';
import Loading from './loading';
import AppHeader from '@/app/components/AppHeader';
import AppFooter from '@/app/components/AppFooter';
import styles from '../../styles/smjestaj.module.scss';
import dynamic from 'next/dynamic';
import { engContentLuka, engContentLux, hrContentLuka, hrContentLux } from '@/app/staticContentData/smjestaj';
import ExploreCampSection from '@/app/sections/ExploreCampSection';
import ReviewsSection from '@/app/sections/ReviewsSection';
import KampKuciceSekcija from '@/app/sections/KampKuciceSekcija';
import DodatneInformacije from '@/app/sections/DodatneInformacije';

export default async function MobilneKucice({ searchParams }: any) {
  const LazyContent = dynamic(() => import('./PageContent'), { ssr: false });

  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.smjestajMain}>
        <LazyContent
          luka={searchParams.lang === 'hr' ? hrContentLuka : engContentLuka}
          lux={searchParams.lang === 'hr' ? hrContentLux : engContentLux}
        />
        <ExploreCampSection />
        <ReviewsSection />
        <KampKuciceSekcija />
        <DodatneInformacije isLanding />
      </main>

      <AppFooter />
    </Suspense>
  );
}
