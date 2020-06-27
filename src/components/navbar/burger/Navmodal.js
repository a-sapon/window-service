import React from 'react';
import styles from './Burger.module.css';
import { openPriceModal } from '../../../redux/actionCreators';
import { connect } from 'react-redux';

const Navmodal = ({ openPriceModal }) => (
  <div className={styles.modalWrapper}>
    <ul className={styles.modalList}>
      <li>
        <a href='#home' className={styles.modalListItem}>
          Главная
        </a>
      </li>
      <li>
        <a href='#calculator' className={styles.modalListItem}>
          Стоимость
        </a>
      </li>
      <li>
        <a
          href='#request'
          onClick={() => openPriceModal()}
          className={styles.modalListItem}
        >
          Оставить заявку
        </a>
      </li>
      <li>
        <a href='#contact' className={styles.modalListItem}>
          Контакты
        </a>
      </li>
    </ul>
  </div>
);

export default connect(null, { openPriceModal })(Navmodal);
