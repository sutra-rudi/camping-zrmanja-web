'use client';

import React from 'react';
import styles from '../styles/langSwitcher.module.scss';
import { useAppContext } from '../contexts/store';
import { ActionTypes } from '../types/actionTypes';
import { UserLanguage } from '../types/appState';
import { usePathname, useRouter } from 'next/navigation';
import { setLocalStorageItem, getLocalStorageItem } from '../utils/localStorage';
import Image from 'next/image';
import croatianFlag from '../img/icons/country-flags/croatianFlag.svg';
import englishFlag from '../img/icons/country-flags/englishFlag.svg';

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
    <div
      onClick={() => handleLangSwitch(userLang === UserLanguage.hr ? UserLanguage.en : UserLanguage.hr)}
      className={styles.lang}
    >
      {userLang === UserLanguage.hr ? (
        <Image width={30} height={30} alt='croatian flag' src={croatianFlag} />
      ) : (
        <Image width={30} height={30} alt='croatian flag' src={englishFlag} />
      )}
    </div>
  );
};

export default LanguageSwitch;
