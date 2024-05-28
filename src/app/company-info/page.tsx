import React, { Suspense } from 'react';
import styles from '../styles/rulesAndDisclaimers.module.scss';
import AppFooter from '../components/AppFooter';
import pravilaHero from '../img/heros/pravila/podatci-o-tvrtki-hero.png';
import AppHeader from '../components/AppHeader';
import Loading from './loading';

import PageContent from './PageContent';
const sectionContent_hr = {
  title: 'Company info',
  topText: '',
  segments: [
    {
      title: 'Address',
      content: 'Župani, Drage 7a\n23450 Obrovac\nCroatia',
    },
    {
      title: 'Business Manager',
      content: 'Romana Župan, bacc.oec',
    },
    {
      title: 'Employee Status',
      content: 'Authorized employee of Riva Rafting Center, PA Ltd. according to GL.3 Art. 16-19 of the imposed Law.',
    },
    {
      title: 'Certification',
      content:
        'Certified according to the Certificate of passing the professional exam for branch manager (N.N. 8/96) and (N.N. 62/96)\nNumber: 76/2007, July 19, 2007\nUniversity of Split - Faculty of Economics',
    },
    {
      title: 'Contact Information',
      content:
        'Email: info@riva-rafting.hr\nPhone: +385 (0) 23 689 920\nMobile: +385 (0) 98 438 711\nFax: +385 (0) 23 689 930',
    },
    {
      title: 'Business Hours',
      content: 'Monday - Friday: 08:00 - 15:00\nSaturday - Sunday: 08:00 - 13:00',
    },
    {
      title: 'Registry',
      content: 'Registered in the Commercial Court Register Zadar, No. 110013185',
    },
    {
      title: 'Tax Identification Number (OIB)',
      content: '07465455406',
    },
    {
      title: 'ID Code',
      content: 'HR-AB-23-110013185',
    },
    {
      title: 'Director/Board Member',
      content: 'Đuro Župan',
    },
    {
      title: 'Supervisory Authority',
      content:
        'Ministry of Tourism – Independent Sector of Tourism Inspection\nAddress: Trg Republike Hrvatske 8/1, 10000 Zagreb, Croatia',
    },
    {
      title: 'According to Article 6 Point 3 of the Law on Tourism Services',
      content:
        "Consumers are informed that any dissatisfaction with the provided service can be expressed by written complaint at the agency's premises or sent via mail, fax, or email to info@riva-rafting.hr.",
    },
  ],
  imgSrc: pravilaHero,
};

export default async function CompanyInfo() {
  return (
    <Suspense fallback={<Loading />}>
      <AppHeader />
      <main className={styles.mainSection}>
        <PageContent {...sectionContent_hr} />
      </main>
      <AppFooter />
    </Suspense>
  );
}
