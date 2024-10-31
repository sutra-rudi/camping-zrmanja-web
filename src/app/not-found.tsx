import Link from 'next/link';
import { Suspense } from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import styles from './styles/notFound.module.scss';
import Loading from './loading';
import PaperDividTop from './components/PaperDividTop';
import PaperDividBotAlt from './components/PaperDivitBotAlt';
import AppButton from './components/AppButton';
export default function NotFound({ searchParams }: any) {
  return (
    <Suspense fallback={<Loading />}>
      <main className={styles.pageMain}>
        <PaperDividTop />
        <div className={styles.notFoundCtaCont}>
          <h1>
            {typeof searchParams !== 'undefined' && searchParams.lang === 'hr'
              ? `Stranica nije pronađena`
              : `Oops, Page Not Found!`}
          </h1>
          <p>
            {typeof searchParams !== 'undefined' && searchParams.lang === 'hr'
              ? `Nismo uspjeli pronaći traženi resurs.`
              : `Sorry, we couldn't find the page you're looking for.`}
          </p>
          <Link href='/'>
            <AppButton
              content={
                typeof searchParams !== 'undefined' && searchParams.lang === 'hr'
                  ? `Vratite se na Početnu stranicu`
                  : `Go Back to Home Page`
              }
            />
          </Link>
        </div>

        <PaperDividBotAlt />
      </main>
    </Suspense>
  );
}
