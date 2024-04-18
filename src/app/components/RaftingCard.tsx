'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from '../styles/promoSekcijaJedan.module.scss';
import arrowIcon from '../img/STRELICA-DESNO-ALT-NOVA.svg';
import locationIcon from '../img/lokacija-ikonica.svg';
import Link from 'next/link';
import { useAppContext } from '../contexts/store';
interface RaftingCardProps {
  title: string;
  location: string;
  imageUrl: StaticImageData;
  delay?: number;
  url: string;
}

const RaftingCard = (props: RaftingCardProps) => {
  const { title, location, imageUrl, delay } = props;
  const {
    state: { userLang },
  } = useAppContext();
  return (
    <div style={{ animationDelay: delay ? `${delay}s` : '0' }} className={styles.raftingCard}>
      <Link href={`${userLang === 'hr' ? '/aktivnosti/' : '/activities/'}${props.url}`}>
        <div className={styles.imageContainer}>
          <p className={styles.cardLocation}>
            <span>
              <Image src={locationIcon} width={13} height={13} alt='arrow' className={styles.cardLocationIcon} />
            </span>
            {location}
          </p>
          <Image
            className={styles.raftingImage}
            src={imageUrl}
            fill
            alt='rafting img'
            placeholder='blur'
            loading='lazy'
          />
        </div>
        <div className={styles.raftingCartInteractiveOverlay}>
          <div className={styles.interactiveOverlayTitleCont}>
            <h5 className={styles.cardTitle}>{title}</h5>
          </div>
          <Image src={arrowIcon} width={33} height={33} alt='arrow' className={styles.cardArrowIcon} />
        </div>
      </Link>
    </div>
  );
};

export default RaftingCard;
