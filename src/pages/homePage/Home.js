import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import styles from './Home.module.css';
import '../../components/App.css';

export const Home = () => (
  <>
    <header className={styles.hdrWrapper}>
      <Navbar />
      <div className={`container ${styles.hdr}`}>
        <h1 id='home' className={styles.hdrTitle}>Качественные окна</h1>
        <div className={styles.hdrText}>по лучшим ценам</div>
        <a href='#calculator' className={styles.hdrPriceBtn}>
          Расчитать цену бесплатно
        </a>
      </div>
    </header>
  </>
);
