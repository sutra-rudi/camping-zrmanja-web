'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '../styles/kampKucicaSekcija.module.scss';
import { useAppContext } from '../contexts/store';
import { parseByLang } from '../utils/parseByLang';
import articleArrow from '../img/icons/article-arrow-subpage-thin.svg';

interface KampKucicaCard {
  imageUrl: StaticImageData;
  titleHr: string;
  titleEng: string;
  learnMoreHr: string;
  learnMoreEng: string;
  checkAvailabilityHr: string;
  checkAvailabilityEng: string;
}

const KampKucicaCard = (props: KampKucicaCard) => {
  const { imageUrl, titleHr, titleEng, learnMoreHr, learnMoreEng, checkAvailabilityEng, checkAvailabilityHr } = props;

  const {
    state: { userLang },
  } = useAppContext();

  return (
    <article className={styles.kampKucicaCard}>
      <div className={styles.kampKucicaImageCont}>
        <Image fill src={imageUrl} alt='camp house thumbnail' />
      </div>
      <div className={styles.kampKucicaContent}>
        <h2>{parseByLang(titleHr, titleEng, userLang)}</h2>

        <div className={styles.kampKucicaCtaCont}>
          <a href=''>
            <span>{parseByLang(learnMoreHr, learnMoreEng, userLang)}</span>
            <span>
              <Image src={articleArrow} width={20} height={20} alt='arrow icon' />
            </span>
          </a>
          <a href=''>
            <span>{parseByLang(checkAvailabilityHr, checkAvailabilityEng, userLang)}</span>
            <span>
              <Image src={articleArrow} width={20} height={20} alt='arrow icon' />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default KampKucicaCard;
