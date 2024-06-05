'use client';

import React from 'react';
import style from '../styles/turePonuda.module.scss';
import AppButton from './AppButton';
import Image, { StaticImageData } from 'next/image';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';

interface TureKarticaData {
  subtitle: string;
  title: string;
  content: string;
  isCTA: boolean;
  imageSRC: StaticImageData;
}

const TureArticle = (props: TureKarticaData) => {
  const { subtitle, title, content, isCTA, imageSRC } = props;

  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );
  return (
    <article className={isCTA ? `${style.tureArticle}` : `${style.tureArticle} ${style.articleReverse}`}>
      <div className={style.imgHolder}>
        <Image src={imageSRC} fill alt='Offer image' />
      </div>
      <div className={style.contentHolder}>
        <div>
          <h4 className={style.contentSubtitle}>{subtitle}</h4>
          <h2 className={style.contentTitle}>{title}</h2>
        </div>
        <p className={style.contentText}>{content}</p>
        {isCTA && <AppButton content={parseByLang('Kontaktirajte nas', 'Contact us')} />}
      </div>
    </article>
  );
};

export default TureArticle;
