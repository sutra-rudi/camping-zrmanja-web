import { Suspense } from 'react';
import Loading from './loading';
import AppHeader from '@/app/components/AppHeader';
import AppFooter from '@/app/components/AppFooter';
import styles from '../../styles/smjestaj.module.scss';
import dynamic from 'next/dynamic';
import { engContentLuka, engContentLux, hrContentLuka, hrContentLux } from '@/app/staticContentData/smjestaj';

export default async function MobilneKucice({ searchParams }: any) {
  const LazyContent = dynamic(() => import('./PageContent'), { ssr: false });
  const LazyExplore = dynamic(() => import('../../sections/ExploreCampSection'), { ssr: false });
  const LazyReviews = dynamic(() => import('../../sections/ReviewsSection'), { ssr: false });
  const LazyKucice = dynamic(() => import('../../sections/KampKuciceSekcija'), { ssr: false });
  const LazyDotatneInfo = dynamic(() => import('../../sections/DodatneInformacije'), { ssr: false });

  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.smjestajMain}>
        <LazyContent
          luka={searchParams.lang === 'hr' ? hrContentLuka : engContentLuka}
          lux={searchParams.lang === 'hr' ? hrContentLux : engContentLux}
        />
        <LazyExplore />
        <LazyReviews />
        <LazyKucice />
        <LazyDotatneInfo isLanding />
      </main>

      <AppFooter />
    </Suspense>
  );
}
