'use client';

import React from 'react';
import style from '../styles/turePonuda.module.scss';
import AppButton from './AppButton';
import Image, { StaticImageData } from 'next/image';
import { useAppContext } from '../contexts/store';

interface TureKarticaData {
  subtitle: string;
  title: string;
  content: string;
  isCTA: boolean;
  imageSRC: StaticImageData;
}

const TureArticle = (props: TureKarticaData) => {
  const { subtitle, title, content, isCTA, imageSRC } = props;

  const {
    state: { userLang },
  } = useAppContext();
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
        {isCTA && <AppButton content={userLang === 'hr' ? 'Kontaktirajte nas' : 'Contact us'} />}
      </div>
    </article>
  );
};

export default TureArticle;
