'use client';

import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import styles from '../app/styles/loadingCustom.module.scss';
const Loading = () => {
  return (
    <div className={styles.loadingCustom}>
      <div className={styles.loadingCustomCont}>
        <ThreeCircles
          visible={true}
          height='100'
          width='100'
          color='#4fa94d'
          ariaLabel='three-circles-loading'
          wrapperStyle={{}}
          wrapperClass=''
        />
      </div>
    </div>
  );
};

export default Loading;
