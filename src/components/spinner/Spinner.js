import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.overlay}>
    <Loader
      type='TailSpin'
      color='#0066cc'
      height={100}
      width={100}
      timeout={5000}
      className={styles.spinner}
    />
  </div>
);

export default Spinner;