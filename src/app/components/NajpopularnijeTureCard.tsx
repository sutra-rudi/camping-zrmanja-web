'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '../styles/najpopularnijeTureCard.module.scss';
import strelica from '../img/STRELICA-DESNO-ZELENA.svg';
interface PopularTourCard {
  imageUrl: StaticImageData;
  content: string;
  duration: string;
  adrenaline: string;
}

const NajpopularnijeTureCard = (props: PopularTourCard) => {
  const { imageUrl, content, duration, adrenaline } = props;
  return (
    <div draggable={false} className={styles.najpopularnijeTureCard}>
      <div className={styles.imageContainer}>
        <Image draggable={false} src={imageUrl} fill alt='popular tour card image' placeholder='blur' />

        <div className={styles.moreInfoContainer}></div>
        <div className={styles.moreInfoText}>
          <span>{`Trajanje: ${duration}`}</span>
          <span className={styles.moreInfoTextAdrenaline}>|</span>
          <span className={styles.moreInfoTextAdrenaline}>{`Adrenalin: ${adrenaline}/10`}</span>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <p>{content}</p>
        <button>
          <span>Saznaj više</span>
          <Image src={strelica} width={34} height={34} alt='icon' />
        </button>
      </div>
    </div>
  );
};

export default NajpopularnijeTureCard;
