import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import styles from '../styles/obrovackiKraj.module.scss';
import { Suspense } from 'react';
import Loading from './loading';
import PageContent from './PageContent';

export default async function ObrovackiKraj() {
  return (
    <Suspense fallback={<Loading />}>
      <main className={styles.sectionMain}>
        <PageContent />
      </main>
    </Suspense>
  );
}
