'use client';

import React from 'react';
import { kampKuciceContent } from '../staticContentData/kampKucice';
import KampKucicaCard from '../components/KampKucicaCard';
import styles from '../styles/kampKucicaSekcija.module.scss';
const KampKuciceSekcija = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.kampKuciceCardContainer}>
        {kampKuciceContent.map((item, index) => {
          const { titleEng, titleHr, learnMoreEn, learnMoreHr, imageUrl, checkAvailabilityEng, checkAvailabilityHr } =
            item;
          return (
            <KampKucicaCard
              key={index}
              titleEng={titleEng}
              titleHr={titleHr}
              learnMoreEng={learnMoreEn}
              learnMoreHr={learnMoreHr}
              imageUrl={imageUrl}
              checkAvailabilityEng={checkAvailabilityEng}
              checkAvailabilityHr={checkAvailabilityHr}
            />
          );
        })}
      </div>
    </section>
  );
};

export default KampKuciceSekcija;
