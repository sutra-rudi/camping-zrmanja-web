'use client';
import React from 'react';
import styles from '../styles/reviewsSection.module.scss';
const ReviewsSection = () => {
  return (
    <section className={styles.sectionMain}>
      <div className={styles.reviewCardContainer}>
        <div className={styles.reviewCard}>
          <p>
            Imali smo predivnih 5 dana u Micanovim Dvorima. Osoblje je bilo super ljubazno i uslužno. Bili su spremni
            ispuniti svaku našu želju. Samo selo, kao i okolica, izvrsno je za opušten obiteljski odmor.
          </p>
          <p>Muller, DEBooking.com / 9.6*</p>
        </div>
        <div className={styles.reviewCard}>
          <p>
            Odlićna klopa,ambijent prva liga Kamp je prelijep sa bazenom i odbojkaskim igralistem.😀 sve u svemu odlićno
            👌
          </p>
          <p>Muller, DEBooking.com / 9.6*</p>
        </div>
        <div className={styles.reviewCard}>
          <p>
            Fantastično mjesto za aktivni boravak od raftinga do jahanja , te boravka i pješačenja prekrasnim krajevima
            uz Zrmanju i Velebit.Navečer ugodan doživljaj u konobi ili kupanje u bazenu
          </p>
          <p>Muller, DEBooking.com / 9.6*</p>
        </div>
        <div className={styles.reviewCard}>
          <p>
            Imali smo predivnih 5 dana u Micanovim Dvorima. Osoblje je bilo super ljubazno i uslužno. Bili su spremni
            ispuniti svaku našu želju. Samo selo, kao i okolica, izvrsno je za opušten obiteljski odmor.
          </p>
          <p>Muller, DEBooking.com / 9.6*</p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
