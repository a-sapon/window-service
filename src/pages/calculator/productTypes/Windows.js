import React, { useState } from 'react';
import SingleWindow from '../../../components/windows/SingleWindow';
import SingleLeftWindow from '../../../components/windows/SingleLeftWindow';
import styles from './ProductTypes.module.css';

const Windows = () => {
  const [value, setValue] = useState('left');

  const handleChange = e => {
    setValue(e.target.value);
  }

  const flip = value === 'left' ? false : true;

  return (
    <div className={styles.productsContainer}>
      <SingleWindow />
      <SingleLeftWindow flip={flip} value={value} onHandleChange={handleChange} />
    </div>
  );
}

export default Windows;