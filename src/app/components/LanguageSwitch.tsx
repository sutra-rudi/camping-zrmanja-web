'use client';

import React from 'react';
import styles from '../styles/langSwitcher.module.scss';
import { useAppContext } from '../contexts/store';
import { ActionTypes } from '../types/actionTypes';
import { UserLanguage } from '../types/appState';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { setLocalStorageItem, getLocalStorageItem } from '../utils/localStorage';
import Image from 'next/image';
import croatianFlag from '../img/icons/country-flags/croatianFlag.svg';
import englishFlag from '../img/icons/country-flags/englishFlag.svg';

const LanguageSwitch = () => {
  const { dispatch } = useAppContext();

  const router = useRouter();
  const pathname = usePathname();
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const checkLocalStorage = getLocalStorageItem('@riva-rafting-user-language');

  React.useEffect(() => {
    if (typeof checkParams === 'string' && !checkLocalStorage) {
      dispatch({
        type: ActionTypes.SET_USER_LANG,
        payload: checkParams === UserLanguage.hr ? UserLanguage.hr : UserLanguage.en,
      });
      setLocalStorageItem(
        '@riva-rafting-user-language',
        checkParams === UserLanguage.hr ? UserLanguage.hr : UserLanguage.en
      );
    } else if (checkLocalStorage && typeof checkParams !== 'string') {
      dispatch({ type: ActionTypes.SET_USER_LANG, payload: checkLocalStorage });
      const newUrlParams = new URLSearchParams(window.location.search);
      newUrlParams.set('lang', checkLocalStorage);
      const searchString = newUrlParams.toString();
      router.replace(`?${searchString}`);
    } else if (!checkLocalStorage && typeof checkParams !== 'string') {
      dispatch({ type: ActionTypes.SET_USER_LANG, payload: UserLanguage.hr });
      const newUrlParams = new URLSearchParams(window.location.search);
      newUrlParams.set('lang', UserLanguage.hr);
      const searchString = newUrlParams.toString();
      router.replace(`?${searchString}`);
    }
  }, [dispatch, checkParams, router, checkLocalStorage]);

  const handleLangSwitch = (payloadF: UserLanguage) => {
    dispatch({ type: ActionTypes.SET_USER_LANG, payload: payloadF });

    const newUrlParams = new URLSearchParams(window.location.search);
    newUrlParams.set('lang', payloadF);

    const searchString = newUrlParams.toString();

    router.replace(`?${searchString}`);

    setLocalStorageItem('@riva-rafting-user-language', payloadF);

    if (pathname !== '/') {
      router.push(`/?lang=${payloadF}`);
    } else {
      router.refresh();
    }
  };

  return (
    <div
      onClick={() => handleLangSwitch(checkParams === UserLanguage.hr ? UserLanguage.en : UserLanguage.hr)}
      className={styles.lang}
    >
      {checkParams === UserLanguage.hr ? (
        <Image width={30} height={30} alt='croatian flag' src={croatianFlag} />
      ) : (
        <Image width={30} height={30} alt='croatian flag' src={englishFlag} />
      )}
    </div>
  );
};

export default LanguageSwitch;
