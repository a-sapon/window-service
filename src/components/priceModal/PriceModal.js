import React, { useContext } from 'react';
import styles from './PriceModal.module.css';
import { ScreenContext } from '../App';
import RequestForm from '../requestForm/RequestForm';
import { connect } from 'react-redux';

const PriceModal = ({ onOpenModal, price, width, height }) => { 
  const isMobile = useContext(ScreenContext);
  const formatedPrice = new Intl.NumberFormat('uk-UK', { style: 'currency', currency: 'UAH' }).format(price)

  const closeModal = (e) => {
    if (e.target === e.currentTarget || e.target.dataset.action === 'close-modal') {
      onOpenModal(false)
    }
  }

  return(
  <div onClick={closeModal} className={styles.overlay}>
    <div className={styles.modal}>

      <div className={styles.price}>
        Приблизительная цена за двухстворчатое окно {width} x {height}: <b>{formatedPrice}</b>
      </div>

      {!isMobile && (
        <p className={styles.priceText}>С вами свяжется наш замерщик и приедет в удобное время. Мы составим расчет в течение 24 часов и свяжемся с вами</p>
      )}
      <RequestForm />

    </div>
  </div>
);}

const mapStateToProps = ({ width, height }) => ({
  width, height
})

export default connect(mapStateToProps)(PriceModal);
