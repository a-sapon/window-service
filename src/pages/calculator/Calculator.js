import React, { useState } from 'react';
import Windows from './productTypes/Windows';
import Doors from './productTypes/Doors';
import Balconies from './productTypes/Balconies';
import BalconyDoors from './productTypes/BalconyDoors';
import styles from './Calculator.module.css';
import '../../components/App.css';

const Calculator = () => {
  const [windows, openWindows] = useState(true);
  const [doors, openDoors] = useState(false);
  const [balconies, openBalconies] = useState(false);
  const [balconyDoors, openBalconyDoors] = useState(false);

  const handleClick = (e) => {
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
    <main className={`${styles.calcSection} container`}>
      <h2 id='calculator' className={styles.calcTitle}>Расчет стоимости пластиковых окон</h2>
      <div className={styles.products}>

        <ul onClick={handleClick} className={styles.windowTypeList}>
          <li id='windows' className={windows ? `${styles.windowTypeListItem} ${styles.active}` : styles.windowTypeListItem}>
            Окна
          </li>
          <li id='doors' className={doors ? `${styles.windowTypeListItem} ${styles.active}` : styles.windowTypeListItem}>
            Входные двери
          </li>
          <li id='balconies' className={balconies ? `${styles.windowTypeListItem} ${styles.active}` : styles.windowTypeListItem}>
            Балконы
          </li>
          <li id='balconyDoors' className={balconyDoors ? `${styles.windowTypeListItem} ${styles.active}` : styles.windowTypeListItem}>
            Балконные двери
          </li>
        </ul>

        <div className={styles.windowPics}>
          {windows && <Windows />}
          {doors && <Doors />}
          {balconies && <Balconies />}
          {balconyDoors && <BalconyDoors />}
        </div>

      </div>
    </main>
  );
};

export default Calculator;
