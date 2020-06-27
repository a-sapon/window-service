import React from 'react';
import styles from './Footer.module.css';
import '../App.css';

export const Footer = () => (
  <footer className={styles.footerWrapper}>
    <div className={`container ${styles.footer}`}>
      &#169; 2020 window-service.com.ua
      <span className={styles.rights}>Все права защищены.</span>
    </div>
  </footer>
);