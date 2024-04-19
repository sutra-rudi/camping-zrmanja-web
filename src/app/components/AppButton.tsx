import React from 'react';
import styles from '../styles/appButton.module.scss';
import { BsArrowRight as ArrowIcon } from 'react-icons/bs';
import { CiMail as MailIcon } from 'react-icons/ci';

interface ButtonProps {
  content: string;
  isNav?: boolean;
  isHero?: boolean;
  isAbout?: boolean;
  isSecondary?: boolean;
  isContact?: boolean;
  isRelax?: boolean;
}

const AppButton = ({
  content,
  isNav = false,
  isHero = false,
  isAbout = false,
  isSecondary = false,
  isContact = false,
  isRelax,
}: ButtonProps) => {
  const buttonClassNames = isNav
    ? `${styles.appButton} ${styles.navButton}`
    : isHero && isSecondary
    ? `${styles.appButton} ${styles.secondaryButton} ${styles.heroButton}`
    : isHero
    ? `${styles.appButton} ${styles.heroButton}`
    : isAbout && isSecondary
    ? `${styles.appButton} ${styles.secondaryButton} ${styles.aboutButton}`
    : isAbout && isRelax
    ? `${styles.appButton} ${styles.aboutButton} ${styles.odmoriSeAlt}`
    : isAbout
    ? `${styles.appButton} ${styles.aboutButton}`
    : isSecondary
    ? `${styles.appButton} ${styles.secondaryButton}`
    : isContact
    ? `${styles.appButton} ${styles.contactButton}`
    : `${styles.appButton}`;

  return (
    <button className={buttonClassNames}>
      <span>{content}</span>
      {isAbout && (
        <span className={styles.buttonIcon}>
          <ArrowIcon />
        </span>
      )}
      {isContact && (
        <span className={styles.buttonIcon}>
          <MailIcon />
        </span>
      )}
    </button>
  );
};

export default AppButton;
