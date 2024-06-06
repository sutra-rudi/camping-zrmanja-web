import { Suspense } from 'react';
import Loading from './loading';
import AppHeader from '@/app/components/AppHeader';
import AppFooter from '@/app/components/AppFooter';
import styles from '../../styles/smjestaj.module.scss';
import { enContentParcel, engContentLux, hrContentLux, hrContentParcel } from '@/app/staticContentData/smjestaj';
import PageContent from './PageContent';
import ExploreCampSection from '../../sections/ExploreCampSection';
import ReviewsSection from '../../sections/ReviewsSection';
import KampKuciceSekcija from '../../sections/KampKuciceSekcija';
import DodatneInformacije from '../../sections/DodatneInformacije';
import { getReviews } from '@/app/queries/getReviewsQuery';

export default async function ParceleKamp({ searchParams }: any) {
  const getReviewsQuery = await fetch(`${process.env.CAMPING_REVIEWS_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getReviews,
    }),
    cache: 'no-store',
  });

  const reviewsData = await getReviewsQuery.json();
  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.smjestajMain}>
        <PageContent
          luka={typeof searchParams !== 'undefined' && searchParams.lang === 'hr' ? hrContentParcel : enContentParcel}
          lux={typeof searchParams !== 'undefined' && searchParams.lang === 'hr' ? hrContentLux : engContentLux}
        />
        <ExploreCampSection isSubpage isLuxOrParcel={'parcel'} />
        <ReviewsSection content={reviewsData} />
        <KampKuciceSekcija />
        <DodatneInformacije isLanding />
      </main>

      <AppFooter />
    </Suspense>
  );
}
