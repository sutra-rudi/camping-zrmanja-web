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
import { UserLanguage } from './types/appState';

export async function generateMetadata({ searchParams }: { searchParams: { lang: string } }) {
  const parseByLang = (hrString: string | string[], enString: string | string[]) => {
    if (Array.isArray(hrString) && Array.isArray(enString)) {
      return searchParams.lang === 'hr' ? hrString : enString;
    }
    return searchParams.lang === UserLanguage.hr ? hrString : enString;
  };
  return {
    generator: 'Next.js',
    applicationName: 'Camping Zrmanja',
    referrer: 'origin-when-cross-origin',
    keywords: parseByLang(
      ['camping', 'avantura', 'Hrvatska', 'Zrmanja', 'priroda', 'outdoor', 'šatori', 'kampiranje'],
      ['camping', 'adventure', 'Croatia', 'Zrmanja', 'nature', 'outdoor', 'tents', 'camping']
    ),
    authors: [{ name: 'Camping Zrmanja' }, { name: 'Studio Sutra', url: 'https://www.sutra.hr/' }],
    creator: 'Camping Zrmanja',
    publisher: 'Camping Zrmanja',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: 'index, follow',
    title: parseByLang(
      'Camping Zrmanja - Kampiranje na Zrmanji, Hrvatska',
      'Camping Zrmanja - Camping on the Zrmanja, Croatia'
    ),
    description: parseByLang(
      'Dobrodošli na Camping Zrmanja, vaše odredište za nezaboravne kamping avanture na rijeci Zrmanji u Hrvatskoj. Pridružite nam se i istražite prekrasnu prirodu i uživajte u kampiranju.',
      'Welcome to Camping Zrmanja, your destination for unforgettable camping adventures on the Zrmanja River in Croatia. Join us to explore beautiful nature and enjoy camping.'
    ),
    openGraph: {
      title: parseByLang(
        'Camping Zrmanja - Kampiranje na Zrmanji, Hrvatska',
        'Camping Zrmanja - Camping on the Zrmanja, Croatia'
      ),
      description: parseByLang(
        'Dobrodošli na Camping Zrmanja, vaše odredište za nezaboravne kamping avanture na rijeci Zrmanji u Hrvatskoj. Pridružite nam se i istražite prekrasnu prirodu i uživajte u kampiranju.',
        'Welcome to Camping Zrmanja, your destination for unforgettable camping adventures on the Zrmanja River in Croatia. Join us to explore beautiful nature and enjoy camping.'
      ),
      url: 'https://www.zrmanja-camping.hr/',
      siteName: 'Camping Zrmanja',
      locale: parseByLang('hr_HR', 'en_US'),
      type: 'website',
      images: [
        {
          width: 1200,
          height: 600,
          alt: parseByLang('Riva Rafting avantura na rijeci Zrmanji', 'Riva Rafting Adventure on Zrmanja River'),
        },
      ],
    },
    twitter: {
      title: parseByLang(
        'Camping Zrmanja - Kampiranje na Zrmanji, Hrvatska',
        'Camping Zrmanja - Camping on the Zrmanja, Croatia'
      ),
      description: parseByLang(
        'Dobrodošli na Camping Zrmanja, vaše odredište za nezaboravne kamping avanture na rijeci Zrmanji u Hrvatskoj. Pridružite nam se i istražite prekrasnu prirodu i uživajte u kampiranju.',
        'Welcome to Camping Zrmanja, your destination for unforgettable camping adventures on the Zrmanja River in Croatia. Join us to explore beautiful nature and enjoy camping.'
      ),
      url: '',
      siteName: 'Camping Zrmanja',
      locale: parseByLang('hr_HR', 'en_US'),
      type: 'website',
      images: [
        {
          width: 1200,
          height: 600,
          alt: parseByLang('Riva Rafting avantura na rijeci Zrmanji', 'Riva Rafting Adventure on Zrmanja River'),
        },
      ],
    },
  };
}

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
