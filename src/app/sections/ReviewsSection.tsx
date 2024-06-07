'use client';
import React from 'react';
import styles from '../styles/reviewsSection.module.scss';
import { useSearchParams } from 'next/navigation';
import { UserLanguage } from '../types/appState';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
interface ReviewsInterface {
  content: any;
}

const ReviewsSection = ({ content }: ReviewsInterface) => {
  const paramsControler = useSearchParams();
  const checkParams = paramsControler.get('lang');
  const parseByLang = React.useCallback(
    (hrString: string, enString: string) => (checkParams === UserLanguage.hr ? hrString : enString),
    [checkParams]
  );

  const shorthand = content.data.allZrmanjaKampingRecenzije.edges;

  const splideOptions: any = {
    perPage: 4,
    type: 'slide',
    drag: 'free',
    snap: true,
    gap: '0.5rem',
    focus: 'center',
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 2000,
    rewind: true,

    breakpoints: {
      640: { perPage: 2.2 },
      960: { perPage: 3.2 },
      1200: { perPage: 4 },
    },
  };

  return (
    <section className={styles.sectionMain}>
      <Splide className={styles.swiper} options={splideOptions}>
        {shorthand.map((rec: any) => {
          return (
            <SplideSlide key={rec.node.id} className={styles.swiperSlide}>
              <p>
                {parseByLang(
                  rec.node.raftingRecenzijeFields.tekstRecenzijeHr,
                  rec.node.raftingRecenzijeFields.tekstRecenzijeEn
                )}
              </p>

              <p>{rec.node.raftingRecenzijeFields.imeMusterije}</p>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default ReviewsSection;
