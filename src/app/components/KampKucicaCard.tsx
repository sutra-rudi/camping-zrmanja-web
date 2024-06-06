'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '../styles/kampKucicaSekcija.module.scss';
import { parseByLang } from '../utils/parseByLang';

import { TfiArrowTopRight as ArticleArrow } from 'react-icons/tfi';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
interface KampKucicaCard {
  imageUrl: StaticImageData;
  titleHr: string;
  titleEng: string;
  learnMoreHr: string;
  learnMoreEng: string;
  checkAvailabilityHr: string;
  checkAvailabilityEng: string;
  url: string;
  klasa: string;
}

const KampKucicaCard = (props: KampKucicaCard) => {
  const {
    imageUrl,
    titleHr,
    titleEng,
    learnMoreHr,
    learnMoreEng,
    checkAvailabilityEng,
    checkAvailabilityHr,
    url,
    klasa,
  } = props;

  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  const parseClass = `${styles[klasa]}`;

  return (
    <article className={`${styles.kampKucicaCard} ${parseClass}`}>
      <div className={styles.kampKucicaImageCont}>
        <Image fill src={imageUrl} placeholder='blur' alt='camp house thumbnail' />
      </div>
      <div className={styles.kampKucicaContent}>
        <h2>{parseByLang(titleHr, titleEng)}</h2>

        <div className={styles.kampKucicaCtaCont}>
          <Link href={url ? `${url}/?lang=${checkParams}#${klasa}` : '/'}>
            <span>{parseByLang(learnMoreHr, learnMoreEng)}</span>

            <span>
              <ArticleArrow className={styles.articleArrow} />
            </span>
          </Link>
          <Link href={`/kontakt/?lang=${checkParams}`}>
            <span>{parseByLang(checkAvailabilityHr, checkAvailabilityEng)}</span>

            <span>
              <ArticleArrow className={styles.articleArrow} />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default KampKucicaCard;
