import AppHeader from './components/AppHeader';
import styles from './styles/page.module.scss';
import { Suspense } from 'react';
import Loading from './loading';
import AppFooter from './components/AppFooter';
import HeroSekcija from './sections/HeroSekcija';
import OdmoriSeSekcija from './sections/OdmoriSeSekcija';
import KampKuciceSekcija from './sections/KampKuciceSekcija';
import ExploreCampSection from './sections/ExploreCampSection';
import ParallaxVideoSection from './sections/ParallaxVideoSection';
import DodatneInformacije from './sections/DodatneInformacije';
import OnamaSekcija from './sections/OnamaSekcija';
import PogledajVideo from './sections/PogledajVideo';
import GallerySection from './sections/GallerySection';
import ReviewsSection from './sections/ReviewsSection';
import { getReviews } from './queries/getReviewsQuery';

export default async function Home() {
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
      <main className={styles.homeMain}>
        <HeroSekcija />
        <OdmoriSeSekcija />
        <KampKuciceSekcija />
        <ExploreCampSection isSubpage={false} isLuxOrParcel={'both'} />
        <ParallaxVideoSection />
        <ReviewsSection content={reviewsData} />
        <PogledajVideo />
        <OnamaSekcija />
        <DodatneInformacije isLanding />
        <GallerySection />
      </main>
      <AppFooter />
    </Suspense>
  );
}
