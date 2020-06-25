import React from 'react';
import styles from './RequestForm.module.css';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';

const RequestForm = () => (
  <>
    <h3 className={styles.requestFormTitle}>Оставить заявку</h3>
    <form autoComplete='off' className={styles.requestForm}>
      <input type='text' name='name' placeholder='Имя' />
      <input type='tel' name='tel' placeholder='Телефон' />
      <PrimaryBtn innerText='Отправить заявку' />
    </form>
    <span data-action='close-modal' className={styles.closeBtn}>
      <svg data-action='close-modal' width='24' height='24' viewBox='0 0 24 24'>
        <path
          data-action='close-modal'
          d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z'
        />
      </svg>
    </span>
  </>
);

export default RequestForm;
