import React from 'react';
import SingleWindow from '../../../components/windows/SingleWindow';
import SingleWindowWithKnob from '../../../components/windows/SingleWindowWithKnob';
import styles from './windowTypes.module.css';
import SingleHalfWindow from '../../../components/windows/SingleHalfWindow';
import DoubleHalfWindow from '../../../components/windows/DoubleHalfWindow';
import SingleThirdWindowSide from '../../../components/windows/SingleThirdWindowSide';
import SingleThirdWindowCenter from '../../../components/windows/SingleThirdWindowCenter';
import DoubleThirdWindow from '../../../components/windows/DoubleThirdWindow';
import TrippleThirdWindow from '../../../components/windows/TrippleThirdWindow';
import HalfTWindow from '../../../components/windows/HalfTWindow';
import SingleTWindow from '../../../components/windows/SingleTWindow';
import DoubleTWindow from '../../../components/windows/DoubleTWindow';

const Windows = () => {
  return (
    <ul className={styles.productsList}>
      <li className={styles.productsListItem}>
        <SingleWindow />
      </li>
      <li className={styles.productsListItem}>
        <SingleWindowWithKnob />
      </li>
      <li className={styles.productsListItem}>
        <SingleHalfWindow />
      </li>
      <li className={styles.productsListItem}>
        <DoubleHalfWindow />
      </li>
      <li className={styles.productsListItem}>
        <SingleThirdWindowSide />
      </li>
      <li className={styles.productsListItem}>
        <SingleThirdWindowCenter />
      </li>
      <li className={styles.productsListItem}>
        <DoubleThirdWindow />
      </li>
      <li className={styles.productsListItem}>
        <TrippleThirdWindow />
      </li>
      <li className={styles.productsListItem}>
        <HalfTWindow />
      </li>
      <li className={styles.productsListItem}>
        <SingleTWindow />
      </li>
      <li className={styles.productsListItem}>
        <DoubleTWindow />
      </li>
    </ul>
  );
};

export default Windows;
