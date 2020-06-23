import React from 'react';
import styles from './Home.module.css';
import '../../components/App.css';

export const Home = () => (
  <>
    <div className={styles.hdrWrapper}>
      <header className={`container ${styles.hdr}`}>
        <h1 className={styles.hdrTitle}>Качественные окна</h1>
        <div className={styles.hdrText}>по лучшим ценам</div>
        <button type='button' className={styles.hdrPriceBtn}>
          Расчитать цену бесплатно
        </button>
      </header>
      <main className={styles.mainSection}></main>
    </div>
  </>
);
