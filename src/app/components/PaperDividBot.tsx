import Image from 'next/image';
import React from 'react';
import styles from '../styles/paperDivider.module.scss';
import papirDivider from '../img/globals/PAPIR-RAZMAK-ALT.svg';
const PaperDividBot = () => {
  return (
    <div className={styles.paperBottom}>
      <Image src={papirDivider} fill alt='deco' priority />
    </div>
  );
};

export default PaperDividBot;
