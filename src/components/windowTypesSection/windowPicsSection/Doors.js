import React from 'react';
import SingleDoor from '../../svg-doors/SingleDoor';
import DoubleDoor from '../../svg-doors/DoubleDoor';
import SingleTDoor from '../../svg-doors/SingleTDoor';
import DoubleTDoor from '../../svg-doors/DoubleTDoor';
import styles from './windowPicsSection.module.css';

const Doors = ({ handleClick }) => (
  <ul className={styles.productsList}>
    <li className={styles.DoorsListItem}>
      <SingleDoor onHandleClick={handleClick} />
    </li>
    <li className={styles.DoorsListItem}>
      <DoubleDoor onHandleClick={handleClick} />
    </li>
    <li className={styles.DoorsListItem}>
      <SingleTDoor onHandleClick={handleClick} />
    </li>
    <li className={styles.DoorsListItem}>
      <DoubleTDoor onHandleClick={handleClick} />
    </li>
  </ul>
);

export default Doors;