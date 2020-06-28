import React from 'react';
import TrippleOneSash from '../../svg-balconies/TrippleOneSash';
import TrippleThreeSash from '../../svg-balconies/TrippleThreeSash';
import QuadrupleTwoSash from '../../svg-balconies/QuadrupleTwoSash';
import QuadrupleTwoSashWIthKnob from '../../svg-balconies/QuadrupleTwoSashWIthKnob';
import QuadrupleFourSash from '../../svg-balconies/QuadrupleFourSash';
import styles from './windowPicsSection.module.css';

const Balconies = ({ handleClick }) => (
  <ul className={styles.productsList}>
    <li className={styles.productsListItem}>
      <TrippleOneSash onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}>
      <TrippleThreeSash onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}>
      <QuadrupleTwoSash onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}>
      <QuadrupleTwoSashWIthKnob onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}>
      <QuadrupleFourSash onHandleClick={handleClick} />
    </li>
  </ul>
);

export default Balconies;
