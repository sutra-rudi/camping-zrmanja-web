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
    <Link className={`${styles.kampKucicaCard} ${parseClass}`} href={url ? `${url}/?lang=${checkParams}` : '/'}>
      <article>
        <div className={styles.kampKucicaImageCont}>
          <Image fill src={imageUrl} placeholder='blur' alt='camp house thumbnail' />
        </div>
        <div className={styles.kampKucicaContent}>
          <h2>{parseByLang(titleHr, titleEng)}</h2>

          <div className={styles.kampKucicaCtaCont}>
            <div>
              <span>{parseByLang(learnMoreHr, learnMoreEng)}</span>

              <ArticleArrow className={styles.articleArrow} />
            </div>
            <div>
              <span>{parseByLang(checkAvailabilityHr, checkAvailabilityEng)}</span>

              <ArticleArrow className={styles.articleArrow} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default KampKucicaCard;
