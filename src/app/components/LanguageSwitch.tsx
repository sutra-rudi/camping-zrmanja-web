'use client';

import React from 'react';
import styles from '../styles/langSwitcher.module.scss';
import { useAppContext } from '../contexts/store';
import { ActionTypes } from '../types/actionTypes';
import { UserLanguage } from '../types/appState';
import { usePathname, useRouter } from 'next/navigation';
import { setLocalStorageItem, getLocalStorageItem } from '../utils/localStorage';
import Image from 'next/image';
import croatianFlag from '../img/country-flags/croatiaFlag.svg';
import englishFlag from '../img/country-flags/englishFlag.svg';

const LanguageSwitch = () => {
  const {
    state: { userLang },
    dispatch,
  } = useAppContext();

  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    const checkIfLangSet = getLocalStorageItem('@riva-rafting-language');
    if (checkIfLangSet) {
      dispatch({ type: ActionTypes.SET_USER_LANG, payload: checkIfLangSet });
    }
  }, [dispatch]);

  const handleLangSwitch = (payloadF: UserLanguage) => {
    dispatch({ type: ActionTypes.SET_USER_LANG, payload: payloadF });

    setLocalStorageItem('@riva-rafting-language', payloadF);

    if (pathname !== '/') {
      router.push('/');
    }
  };

  return (
    <div className={styles.langSwitcherParent}>
      <div
        onClick={() => handleLangSwitch(UserLanguage.hr)}
        className={`${userLang === UserLanguage.hr ? `${styles.croa} ${styles.active}` : `${styles.croa}`} `}
      >
        {/* <Image width={20} height={20} alt='croatian flag' src={croatianFlag} /> */}
        <span>HR</span>
      </div>

      <div
        onClick={() => handleLangSwitch(UserLanguage.en)}
        className={`${userLang === UserLanguage.en ? `${styles.engl} ${styles.active}` : `${styles.engl}`} `}
      >
        {/* <Image width={20} height={20} alt='croatian flag' src={englishFlag} /> */}
        <span>ENG</span>
      </div>
    </div>
  );
};

export default LanguageSwitch;
