import React from 'react';
import styles from './windowPicsSection.module.css';
import RegularDoor from '../../svg-doors/RegularDoor';
import HalfDoor from '../../svg-doors/HalfDoor';

const Doors = ({ handleClick }) => (
  <ul className={styles.productsList}>
    <li className={styles.productsListItem}>
      <RegularDoor onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}>
      <HalfDoor onHandleClick={handleClick} />
    </li>
    <li className={styles.productsListItem}></li>
    <li className={styles.productsListItem}></li>
  </ul>
);

export default Doors;