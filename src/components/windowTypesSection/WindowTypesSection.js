import React, { useState } from 'react';
import Windows from './windowPicsSection/Windows';
import Doors from './windowPicsSection/Doors';
import Balconies from './windowPicsSection/Balconies';
import BalconyDoors from './windowPicsSection/BalconyDoors';
import styles from './windowTypesSection.module.css';

const WindowTypesSection = () => {
  const [windows, openWindows] = useState(true);
  const [doors, openDoors] = useState(false);
  const [balconies, openBalconies] = useState(false);
  const [balconyDoors, openBalconyDoors] = useState(false);

  const chooseWindowType = (e) => {
    switch (e.target.id) {
      case 'windows':
        openWindows(true);
        openDoors(false);
        openBalconies(false);
        openBalconyDoors(false);
        break;
      case 'doors':
        openDoors(true);
        openWindows(false);
        openBalconies(false);
        openBalconyDoors(false);
        break;
      case 'balconies':
        openBalconies(true);
        openWindows(false);
        openDoors(false);
        openBalconyDoors(false);
        break;
      case 'balconyDoors':
        openBalconyDoors(true);
        openWindows(false);
        openDoors(false);
        openBalconies(false);
        break;
      default:
        return;
    }
  };

  return (
    <div className={styles.products}>
      <ul onClick={chooseWindowType} className={styles.windowTypeList}>
        <li
          id='windows'
          className={
            windows
              ? `${styles.windowTypeListItem} ${styles.active}`
              : styles.windowTypeListItem
          }
        >
          Окна
        </li>
        <li
          id='doors'
          className={
            doors
              ? `${styles.windowTypeListItem} ${styles.active}`
              : styles.windowTypeListItem
          }
        >
          Входные двери
        </li>
        <li
          id='balconies'
          className={
            balconies
              ? `${styles.windowTypeListItem} ${styles.active}`
              : styles.windowTypeListItem
          }
        >
          Балконы
        </li>
        <li
          id='balconyDoors'
          className={
            balconyDoors
              ? `${styles.windowTypeListItem} ${styles.active}`
              : styles.windowTypeListItem
          }
        >
          Балконные двери
        </li>
      </ul>

      <div>
        {windows && <Windows />}
        {doors && <Doors />}
        {balconies && <Balconies />}
        {balconyDoors && <BalconyDoors />}
      </div>
    </div>
  );
};

export default WindowTypesSection;