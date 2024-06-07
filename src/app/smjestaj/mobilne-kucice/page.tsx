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
import { getReviews } from '@/app/queries/getReviewsQuery';
import kuciceHero from '../../img/kamp-kucice/luka-kucica/luka-kucica01.png';
import { UserLanguage } from '@/app/types/appState';

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
      ['kampiranje', 'mobilne kućice', 'Hrvatska', 'Zrmanja', 'priroda', 'odmor', 'avantura'],
      ['camping', 'mobile homes', 'Croatia', 'Zrmanja', 'nature', 'vacation', 'adventure']
    ),
    authors: [{ name: 'Camping Zrmanja' }, { name: 'Studio Sutra', url: 'https://www.sutra.hr/' }],
    creator: 'Camping Zrmanja Team',
    publisher: 'Camping Zrmanja',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: 'index, follow',
    title: parseByLang('Kamp kućice', 'Mobile Homes'),
    description: parseByLang(
      'Zrmanja Camping Village, pruža idealan bijeg od gradske vreve u blizini Obrovca. Smješten na osami, na svježem zraku i okružen prirodom, kamp nudi miran i opuštajući ambijent.',
      'Zrmanja Camping Village provides an ideal escape from the hustle and bustle of the city, near Obrovac. Located in a secluded area with fresh air and surrounded by nature, the camp offers a peaceful and relaxing atmosphere.'
    ),
    openGraph: {
      title: parseByLang('Kamp kućice', 'Mobile Homes'),
      description: parseByLang(
        'Zrmanja Camping Village, pruža idealan bijeg od gradske vreve u blizini Obrovca. Smješten na osami, na svježem zraku i okružen prirodom, kamp nudi miran i opuštajući ambijent.',
        'Zrmanja Camping Village provides an ideal escape from the hustle and bustle of the city, near Obrovac. Located in a secluded area with fresh air and surrounded by nature, the camp offers a peaceful and relaxing atmosphere.'
      ),
      siteName: 'Camping Zrmanja',
      type: 'website',
      locale: parseByLang('hr_HR', 'en_US'),
      images: [
        {
          url: kuciceHero.src,
          width: 1200,
          height: 600,
          alt: parseByLang('Riva Rafting avantura na rijeci Zrmanji', 'Riva Rafting Adventure on Zrmanja River'),
        },
        {
          url: kuciceHero.src,
          width: 1200,
          height: 600,
          alt: parseByLang('Riva Rafting avantura na rijeci Zrmanji', 'Riva Rafting Adventure on Zrmanja River'),
        },
      ],
    },
    twitter: {
      title: parseByLang('Kamp kućice', 'Mobile Homes'),
      description: parseByLang(
        'Zrmanja Camping Village, pruža idealan bijeg od gradske vreve u blizini Obrovca. Smješten na osami, na svježem zraku i okružen prirodom, kamp nudi miran i opuštajući ambijent.',
        'Zrmanja Camping Village provides an ideal escape from the hustle and bustle of the city, near Obrovac. Located in a secluded area with fresh air and surrounded by nature, the camp offers a peaceful and relaxing atmosphere.'
      ),
      siteName: 'Camping Zrmanja',
      type: 'website',
      images: [
        {
          url: kuciceHero.src,
          width: 1200,
          height: 600,

          alt: parseByLang('Riva Rafting avantura na rijeci Zrmanji', 'Riva Rafting Adventure on Zrmanja River'),
        },
        {
          url: kuciceHero.src,
          width: 1200,
          height: 600,
          alt: parseByLang('Riva Rafting avantura na rijeci Zrmanji', 'Riva Rafting Adventure on Zrmanja River'),
        },
      ],
    },
  };
}

export default async function MobilneKucice({ searchParams }: { searchParams: { lang: string } }) {
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
          luka={typeof searchParams !== 'undefined' && searchParams.lang === 'hr' ? hrContentLuka : engContentLuka}
          lux={typeof searchParams !== 'undefined' && searchParams.lang === 'hr' ? hrContentLux : engContentLux}
        />
        <ExploreCampSection isSubpage isLuxOrParcel={'lux'} />
        <ReviewsSection content={reviewsData} />
        <KampKuciceSekcija />
        <DodatneInformacije isLanding />
      </main>

      <AppFooter />
    </Suspense>
  );
}
