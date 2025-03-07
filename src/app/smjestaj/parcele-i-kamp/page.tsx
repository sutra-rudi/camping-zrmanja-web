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
import { UserLanguage } from '@/app/types/appState';
import parcelHero from '../../img/sections/kamp-kucice-sekcija/camp-site-back.png';

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
      ['kampiranje', 'parcele', 'kamp mjesta', 'Hrvatska', 'Zrmanja', 'priroda', 'odmor', 'avantura'],
      ['camping', 'pitches', 'campsites', 'Croatia', 'Zrmanja', 'nature', 'vacation', 'adventure']
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
    title: parseByLang('Parcele i kamp mjesta', 'Pitches and Campsites'),
    description: parseByLang(
      'Zrmanja Camping Village, pruža idealan bijeg od gradske vreve u blizini Obrovca. Smješten na osami, na svježem zraku i okružen prirodom, kamp nudi miran i opuštajući ambijent.',
      'Zrmanja Camping Village provides an ideal escape from the hustle and bustle of the city, near Obrovac. Located in a secluded area with fresh air and surrounded by nature, the camp offers a peaceful and relaxing atmosphere.'
    ),
    openGraph: {
      title: parseByLang('Parcele i kamp mjesta', 'Pitches and Campsites'),
      description: parseByLang(
        'Zrmanja Camping Village, pruža idealan bijeg od gradske vreve u blizini Obrovca. Smješten na osami, na svježem zraku i okružen prirodom, kamp nudi miran i opuštajući ambijent.',
        'Zrmanja Camping Village provides an ideal escape from the hustle and bustle of the city, near Obrovac. Located in a secluded area with fresh air and surrounded by nature, the camp offers a peaceful and relaxing atmosphere.'
      ),
      siteName: 'Camping Zrmanja',
      type: 'website',
      locale: parseByLang('hr_HR', 'en_US'),
      images: [
        {
          url: parcelHero.src,
          width: 1200,
          height: 600,
          alt: parseByLang('Riva Rafting avantura na rijeci Zrmanji', 'Riva Rafting Adventure on Zrmanja River'),
        },
        {
          url: parcelHero.src,
          width: 1200,
          height: 600,
          alt: parseByLang('Riva Rafting avantura na rijeci Zrmanji', 'Riva Rafting Adventure on Zrmanja River'),
        },
      ],
    },
    twitter: {
      title: parseByLang('Parcele i kamp mjesta', 'Pitches and Campsites'),
      description: parseByLang(
        'Zrmanja Camping Village, pruža idealan bijeg od gradske vreve u blizini Obrovca. Smješten na osami, na svježem zraku i okružen prirodom, kamp nudi miran i opuštajući ambijent.',
        'Zrmanja Camping Village provides an ideal escape from the hustle and bustle of the city, near Obrovac. Located in a secluded area with fresh air and surrounded by nature, the camp offers a peaceful and relaxing atmosphere.'
      ),
      siteName: 'Camping Zrmanja',
      type: 'website',
      images: [
        {
          url: parcelHero.src,
          width: 1200,
          height: 600,
          alt: parseByLang('Riva Rafting avantura na rijeci Zrmanji', 'Riva Rafting Adventure on Zrmanja River'),
        },
        {
          url: parcelHero.src,
          width: 1200,
          height: 600,
          alt: parseByLang('Riva Rafting avantura na rijeci Zrmanji', 'Riva Rafting Adventure on Zrmanja River'),
        },
      ],
    },
  };
}

export default async function ParceleKamp({ searchParams }: any) {
  const getReviewsQuery = await fetch(`${process.env.CMS_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getReviews,
    }),
  });

  const reviewsData = await getReviewsQuery.json();
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}
