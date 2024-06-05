'use client';

import React from 'react';
import { parseByLang } from '../utils/parseByLang';
import { useAppContext } from '../contexts/store';
import { UserLanguage } from '../types/appState';
import { taxonomyEn, taxonomyHr } from '../staticContentData/exploreTaxonomyCont';
import Image from 'next/image';
import styles from '../styles/exploreCampSection.module.scss';
import { kampKuciceArray } from '../utils/staticImageImports';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useSearchParams } from 'next/navigation';

interface ExploreCampSection {
  isSubpage: boolean;
  isLuxOrParcel: 'lux' | 'parcel' | 'both';
}

const ExploreCampSection = ({ isSubpage, isLuxOrParcel }: ExploreCampSection) => {
  const [currentActiveFilter, setCurrentActiveFilter] = React.useState<number>(
    isLuxOrParcel === 'both' ? 2 : isLuxOrParcel === 'lux' ? 0 : 6
  );
  const [isLightboxOpen, setIsLightboxOpen] = React.useState<boolean>(false);
  const [firstLightboxImage, setFirstLightboxImage] = React.useState<number>(0);
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  const TaxonomyFilterCont = () => {
    if (checkParams === UserLanguage.hr) {
      if (isLuxOrParcel === 'lux') {
        return taxonomyHr.map((tax, index) => {
          if (index === 2 || index === 6) {
            return null;
          } else
            return (
              <span
                className={currentActiveFilter === index ? `${styles.activeFilter}` : ''}
                onClick={() => setCurrentActiveFilter(index)}
                key={tax}
              >
                {tax}
              </span>
            );
        });
      } else if (isLuxOrParcel === 'parcel') {
        return taxonomyHr.map((tax, index) => {
          if (index === 0 || index === 5) {
            return null;
          } else
            return (
              <span
                className={currentActiveFilter === index ? `${styles.activeFilter}` : ''}
                onClick={() => setCurrentActiveFilter(index)}
                key={tax}
              >
                {tax}
              </span>
            );
        });
      } else
        return taxonomyHr.map((tax, index) => (
          <span
            className={currentActiveFilter === index ? `${styles.activeFilter}` : ''}
            onClick={() => setCurrentActiveFilter(index)}
            key={tax}
          >
            {tax}
          </span>
        ));
    } else
      return taxonomyEn.map((tax, index) => {
        if (isLuxOrParcel === 'lux') {
          if (index === 2 || index === 6) return null;
          else
            return (
              <span
                className={currentActiveFilter === index ? `${styles.activeFilter}` : ''}
                onClick={() => setCurrentActiveFilter(index)}
                key={tax}
              >
                {tax}
              </span>
            );
        } else if (isLuxOrParcel === 'parcel') {
          if (index === 0 || index === 5) {
            return null;
          } else
            return (
              <span
                className={currentActiveFilter === index ? `${styles.activeFilter}` : ''}
                onClick={() => setCurrentActiveFilter(index)}
                key={tax}
              >
                {tax}
              </span>
            );
        } else
          return (
            <span
              className={currentActiveFilter === index ? `${styles.activeFilter}` : ''}
              onClick={() => setCurrentActiveFilter(index)}
              key={tax}
            >
              {tax}
            </span>
          );
      });
  };

  const findData = () => kampKuciceArray.find((indexObjekta) => indexObjekta.id === currentActiveFilter);

  return (
    <section className={styles.sectionMain}>
      {isSubpage === false && (
        <div className={styles.sectionTitle}>
          <h2>{parseByLang('Istražite naš kamp', 'Explore our camp')}</h2>
        </div>
      )}

      <div className={styles.taxonomyFilterContainer}>
        <TaxonomyFilterCont />
      </div>

      <div className={styles.galleryContainer}>
        {findData()?.images.map((galItem, index) => (
          <div key={galItem.src} className={styles.imageContainer}>
            <Image
              src={galItem.src}
              width={400}
              height={300}
              alt='camp site view'
              placeholder='blur'
              blurDataURL={galItem.blurDataURL}
              loading='eager'
              onLoad={() => console.log('IMG LOADED')}
              priority
              onClick={() => {
                setFirstLightboxImage(index);
                setIsLightboxOpen(true);
              }}
            />
          </div>
        ))}
        <Lightbox
          open={isLightboxOpen}
          close={() => setIsLightboxOpen(false)}
          slides={findData()?.images}
          index={firstLightboxImage}
        />
      </div>
    </section>
  );
};

export default ExploreCampSection;
