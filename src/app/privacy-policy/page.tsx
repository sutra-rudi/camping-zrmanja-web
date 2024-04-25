import React, { Suspense } from 'react';
import styles from '../styles/rulesAndDisclaimers.module.scss';
import AppFooter from '../components/AppFooter';
import pravilaHero from '../img/heros/pravila/pravila-privatnosti-hero.png';
import AppHeader from '../components/AppHeader';

import Loading from './loading';
import dynamic from 'next/dynamic';
const sectionContent_hr = {
  title: 'Privacy policy',
  topText:
    'Riva Rafting Center, PA Ltd. (hereinafter referred to as "we," "us," or "the company") respects your privacy and is committed to protecting your personal data. These Privacy Policies describe how we collect, use, and disclose personal data that we receive through our website riva-rafting.hr (hereinafter referred to as the "website"). Please read these policies carefully to understand our practices regarding your personal data and how we treat it.',
  segments: [
    {
      title: '1. Personal Data We Collect',
      content:
        'We collect personal data that you voluntarily provide to us through our website, such as your name, address, email address, phone number, and similar information, in order to provide you with the services you request or to provide you with the information you have requested.',
    },
    {
      title: '2. Use of Collected Data',
      content:
        'We will use your personal data solely for the purpose of providing the services you request from us, communicating with you, responding to your inquiries, and improving our services and website. We will not share your personal data with third parties without your consent unless required by law or necessary to perform our services.',
    },
    {
      title: '3. Data Security',
      content:
        'We take appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, or disclosure. However, you should be aware that the internet is not a completely secure environment, and we cannot guarantee the security of your personal data.',
    },
    {
      title: '4. User Rights',
      content:
        'You have the right to request access, correction, deletion, or limitation of processing of your personal data that we have. You also have the right to object to how we process your personal data. For any requests or complaints regarding your personal data, please contact us using the contact information provided below.',
    },
    {
      title: '5. Contact Information',
      content:
        'If you have any questions, comments, or complaints regarding these Privacy Policies or our personal data processing practices, please contact us using the following information:\nRiva Rafting Center, PA Ltd.\nAddress: Župani, Drage 7a, 23450 Obrovac, Croatia\nEmail: info@riva-rafting.hr\nPhone: +385 (0) 23 689 920',
    },
    {
      title: '6. Changes to Privacy Policies',
      content:
        'These Privacy Policies may be updated periodically to reflect changes in our personal data processing practices. Any updates will be published on this website. We recommend that you periodically check this page to stay informed of any changes.',
    },
  ],
  imgSrc: pravilaHero,
};

export default async function PrivacyPolicy() {
  const LazyContent = dynamic(() => import('./PageContent'), { ssr: false });

  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.mainSection}>
        <LazyContent {...sectionContent_hr} />
      </main>
      <AppFooter />
    </Suspense>
  );
}
