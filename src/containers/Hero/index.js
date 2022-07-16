import React from 'react';
import styles from '../../styles/pages/hero.module.scss';
import { ScrollToTop } from '../../hooks/';

const Hero = () => {
  const resumeURL = 'https://drive.google.com/file/d/1Isc0W2scGzs7uuCCQb9019xfiVOpTVhF/view';
  const profilePhoto = 'https://avatars.githubusercontent.com/u/57993667?v=4';

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4>
            <span className={styles.heymoji}>👋🏼</span>Hey there! My name is
          </h4>
          <h2>Rizal Nur Faizi.</h2>
          <h3>Welcome to my portfolio website</h3>
          <p>
            I'm a Final Year <span>Computer Enginnering</span> Student Telkom University.
            I'm interested in Cloud Computing, Cybersecurity and Computer Networking.
          </p>
          <button className={`${styles.btn} ${styles.btn__cta}`}>
            <a href={resumeURL} target="_blank" rel="noopener noreferrer">
              Check out my resume!
            </a>
          </button>
        </div>
        <div className={styles.image}>
          <img src={profilePhoto} alt="profilephoto" />
        </div>

        <ScrollToTop />
      </div>
    </section>
  );
};

export default Hero;
