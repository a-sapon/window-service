import React from 'react';
import styles from './PrimaryBtn.module.css';

const PrimaryBtn = ({ innerText }) => (
  <button type='submit' className={styles.btn}>
    {innerText}
  </button>
);

export default PrimaryBtn;
