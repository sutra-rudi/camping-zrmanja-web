'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '../styles/kampKucicaSekcija.module.scss';
import { useAppContext } from '../contexts/store';
import { parseByLang } from '../utils/parseByLang';

import { TfiArrowTopRight as ArticleArrow } from 'react-icons/tfi';
import Link from 'next/link';
interface KampKucicaCard {
  imageUrl: StaticImageData;
  titleHr: string;
  titleEng: string;
  learnMoreHr: string;
  learnMoreEng: string;
  checkAvailabilityHr: string;
  checkAvailabilityEng: string;
  url: string;
}

const KampKucicaCard = (props: KampKucicaCard) => {
  const { imageUrl, titleHr, titleEng, learnMoreHr, learnMoreEng, checkAvailabilityEng, checkAvailabilityHr, url } =
    props;

  const {
    state: { userLang },
  } = useAppContext();

  return (
    <Link className={styles.kampKucicaCard} href={url ?? '/'}>
      <article>
        <div className={styles.kampKucicaImageCont}>
          <Image fill src={imageUrl} alt='camp house thumbnail' />
        </div>
        <div className={styles.kampKucicaContent}>
          <h2>{parseByLang(titleHr, titleEng, userLang)}</h2>

          <div className={styles.kampKucicaCtaCont}>
            <div>
              <span>{parseByLang(learnMoreHr, learnMoreEng, userLang)}</span>

              <ArticleArrow className={styles.articleArrow} />
            </div>
            <div>
              <span>{parseByLang(checkAvailabilityHr, checkAvailabilityEng, userLang)}</span>

              <ArticleArrow className={styles.articleArrow} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default KampKucicaCard;
