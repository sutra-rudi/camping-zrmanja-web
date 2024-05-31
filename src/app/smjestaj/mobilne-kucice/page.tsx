import { Suspense } from 'react';
import Loading from './loading';
import AppHeader from '@/app/components/AppHeader';
import AppFooter from '@/app/components/AppFooter';
import styles from '../../styles/smjestaj.module.scss';
import { engContentLuka, engContentLux, hrContentLuka, hrContentLux } from '@/app/staticContentData/smjestaj';
import PageContent from './PageContent';
import ExploreCampSection from '../../sections/ExploreCampSection';
import ReviewsSection from '../../sections/ReviewsSection';
import KampKuciceSekcija from '../../sections/KampKuciceSekcija';
import DodatneInformacije from '../../sections/DodatneInformacije';

export default async function MobilneKucice({ searchParams }: { searchParams: { lang: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.smjestajMain}>
        <PageContent
          luka={typeof searchParams !== 'undefined' && searchParams.lang === 'hr' ? hrContentLuka : engContentLuka}
          lux={typeof searchParams !== 'undefined' && searchParams.lang === 'hr' ? hrContentLux : engContentLux}
        />
        <ExploreCampSection isSubpage isLuxOrParcel={'lux'} />
        <ReviewsSection />
        <KampKuciceSekcija />
        <DodatneInformacije isLanding />
      </main>

      <AppFooter />
    </Suspense>
  );
}
