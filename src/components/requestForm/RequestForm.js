import React, { useState } from 'react';
import styles from './RequestForm.module.css';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  openResponseModal,
  closePriceModal,
  setResponse,
  spinnerON,
  spinnerOFF,
} from '../../redux/actionCreators';

const RequestForm = ({
  windowType,
  width,
  height,
  price,
  openResponseModal,
  closePriceModal,
  setResponse,
  spinnerON,
  spinnerOFF
}) => {
  const [info, setInfo] = useState({ name: '', tel: '' });

  const handleChange = (e) => {
    e.persist();
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    spinnerON();
    const order = {
      ...info,
      windowType,
      width,
      height,
      price,
    };

    try {
      const response = await axios.post(
        'https://window-service.herokuapp.com/telegram',
        order
      );
      setResponse(response.data);
      spinnerOFF();
    } catch (err) {
      console.log(err);
      setResponse({
        status: 'error',
        message: 'Произошла ошибка! Попробуйте еще раз или перезвоните нам.',
      });
      spinnerOFF();
    }
    closePriceModal();
    openResponseModal();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={styles.requestForm}
      >
        <input
          type='text'
          name='name'
          value={info.name}
          onChange={handleChange}
          placeholder='ФИО'
          autoFocus
        />
        <input
          type='number'
          name='tel'
          value={info.tel}
          onChange={handleChange}
          placeholder='Телефон'
        />
        <PrimaryBtn innerText='Отправить заявку' />
      </form>
    </>
  );
};

const mapStateToProps = ({ window }) => ({
  windowType: window.windowType,
  width: window.width,
  height: window.height,
  price: window.price,
});

export default connect(mapStateToProps, {
  openResponseModal,
  closePriceModal,
  setResponse,
  spinnerON,
  spinnerOFF
})(RequestForm);
