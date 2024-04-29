import React, { Suspense } from 'react';
import styles from '../styles/rulesAndDisclaimers.module.scss';
import AppFooter from '../components/AppFooter';
import pravilaHero from '../img/heros/pravila/pravila-privatnosti-hero.png';
import AppHeader from '../components/AppHeader';
import Loading from './loading';
import dynamic from 'next/dynamic';
const sectionContent_hr = {
  title: 'Terms of use',
  topText:
    'Please carefully read the following Terms of Use (hereinafter referred to as the "Terms") before accessing or using the website riva-rafting.hr (hereinafter referred to as the "website") operated by Riva Rafting Center, PA Ltd. (hereinafter referred to as the "company", "we", or "us"). By using this website, you agree to these Terms. If you do not agree to these Terms, do not access or use this website.',
  segments: [
    {
      title: '1. Intellectual Property',
      content:
        'All content on this website, including text, graphics, logos, icons, images, audio and video clips, digital downloads, and other materials, is protected by copyright laws and other intellectual property laws. You may not reproduce, distribute, modify, display, perform, transmit, or use any material from this website without prior written consent from the company.',
    },
    {
      title: '2. Third-Party Links',
      content:
        'This website may contain links to third-party websites or resources. These links are provided for your convenience only and do not imply endorsement or approval by the company. We are not responsible for the content of third-party websites or the protection of your data when using those sites.',
    },
    {
      title: '3. Limitation of Liability',
      content:
        'The company does not guarantee the accuracy, completeness, or timeliness of information on this website. To the fullest extent permitted by law, the company shall not be liable for any losses or damages arising from the use of this website or its content.',
    },
    {
      title: '4. Changes and Amendments',
      content:
        'The company reserves the right to modify or amend these Terms at any time without prior notice. Any changes will be posted on this website and will take effect immediately upon posting. Your continued use of this website after such changes constitutes your acceptance of the amendments.',
    },
    {
      title: '5. Governing Law',
      content:
        'These Terms are governed by and construed in accordance with the laws of the Republic of Croatia. Any disputes arising from these Terms shall be exclusively subject to the jurisdiction of the courts in the Republic of Croatia.',
    },
    {
      title: 'Contact Information',
      content:
        'If you have any questions or concerns regarding these Terms, please contact us using the contact information provided on the website.',
    },
  ],
  imgSrc: pravilaHero,
};

export default async function TermsOfUse() {
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
