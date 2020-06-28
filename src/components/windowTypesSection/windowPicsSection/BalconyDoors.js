import React from 'react';
import RegularBalconyDoor from '../../svg-balcony-doors/RegularBalconyDoor';
import HalfBalconyDoor from '../../svg-balcony-doors/HalfBalconyDoor';
import styles from './windowPicsSection.module.css';

const BalconyDoors = ({ handleClick }) => (
  <ul className={styles.productsList}>
    <li className={styles.BalconyDoorsListItem}>
      <RegularBalconyDoor onHandleClick={handleClick} />
    </li>
    <li className={styles.BalconyDoorsListItem}>
      <HalfBalconyDoor onHandleClick={handleClick} />
    </li>
  </ul>
);

export default BalconyDoors;
