import React from 'react';
import { Phone } from './Phone';
import { Location } from './Location';
import { Email } from './Email';
import styles from './Contact.module.css';
import '../../components/App.css';

export const Contact = () => (
  <div className={styles.contactContainer}>
    <div className={`${styles.contactWrapper} container`}>
      <h1 id='contact' className={styles.contactTitle}>
        Контакты
      </h1>
      <ul className={styles.contactList}>
        <li className={styles.contactListItem}>
          <Location />
        </li>
        <li className={styles.contactListItem}>
          <Phone />
        </li>
        <li className={styles.contactListItem}>
          <Email />
        </li>
        <li className={styles.contactListItem}>Telegram</li>
        <li className={styles.contactListItem}>Viber</li>
      </ul>
    </div>
  </div>
);
