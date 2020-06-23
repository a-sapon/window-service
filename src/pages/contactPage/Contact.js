import React from 'react';
import { Phone } from './phone/Phone';
import { Location } from './location/Location';
import { Email } from './email/Email';
import styles from './Contact.module.css';
import '../../components/App.css';

export const Contact = () => (
  <div className={`${styles.contactWrapper} container`}>
    <h1 className={styles.contactTitle}>Контакты</h1>
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
    </ul>
  </div>
);