import React from 'react';
import SingleWindow from '../../svg-windows/SingleWindow';
import SingleWindowWithKnob from '../../svg-windows/SingleWindowWithKnob';
import SingleHalfWindow from '../../svg-windows/SingleHalfWindow';
import DoubleHalfWindow from '../../svg-windows/DoubleHalfWindow';
import SingleThirdWindowSide from '../../svg-windows/SingleThirdWindowSide';
import SingleThirdWindowCenter from '../../svg-windows/SingleThirdWindowCenter';
import DoubleThirdWindow from '../../svg-windows/DoubleThirdWindow';
import TrippleThirdWindow from '../../svg-windows/TrippleThirdWindow';
import HalfTWindow from '../../svg-windows/HalfTWindow';
import SingleTWindow from '../../svg-windows/SingleTWindow';
import DoubleTWindow from '../../svg-windows/DoubleTWindow';
import styles from './windowPicsSection.module.css';

const Windows = ({ handleClick }) => (
  <ul className={styles.productsList}>
    <li className={styles.productsListItem}>
      <SingleWindow onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}>
      <SingleWindowWithKnob onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}>
      <SingleHalfWindow onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}>
      <DoubleHalfWindow onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}>
      <SingleThirdWindowSide onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}>
      <SingleThirdWindowCenter onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}>
      <DoubleThirdWindow onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}>
      <TrippleThirdWindow onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}>
      <HalfTWindow onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}>
      <SingleTWindow onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}>
      <DoubleTWindow onHandleClick={handleClick} />
    </li>
  </ul>
);

export default Windows;