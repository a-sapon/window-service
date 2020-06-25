import React from 'react';
import SingleWindow from '../../window-svg-pics/SingleWindow';
import SingleWindowWithKnob from '../../window-svg-pics/SingleWindowWithKnob';
import SingleHalfWindow from '../../window-svg-pics/SingleHalfWindow';
import DoubleHalfWindow from '../../window-svg-pics/DoubleHalfWindow';
import SingleThirdWindowSide from '../../window-svg-pics/SingleThirdWindowSide';
import SingleThirdWindowCenter from '../../window-svg-pics/SingleThirdWindowCenter';
import DoubleThirdWindow from '../../window-svg-pics/DoubleThirdWindow';
import TrippleThirdWindow from '../../window-svg-pics/TrippleThirdWindow';
import HalfTWindow from '../../window-svg-pics/HalfTWindow';
import SingleTWindow from '../../window-svg-pics/SingleTWindow';
import DoubleTWindow from '../../window-svg-pics/DoubleTWindow';
import styles from './windowPicsSection.module.css';
import { connect } from 'react-redux';
import { selectWindowType } from '../../../redux/actionCreators';

const Windows = ({ selectWindowType }) => {

  const handleClick = (e) => {
    const selected = document.querySelector(`.${styles.selected}`);
    const clickedWindow = e.currentTarget.children[0];
    if (selected) {
      selected.classList.remove(styles.selected);
    }

    clickedWindow.classList.add(styles.selected);
    selectWindowType(clickedWindow.dataset.type);
  };

  return (
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
};

export default connect(null, { selectWindowType })(Windows);
