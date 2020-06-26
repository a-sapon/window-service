import React, { useState } from 'react';
import styles from './RequestForm.module.css';
import PrimaryBtn from '../primaryBtn/PrimaryBtn';
import { connect } from 'react-redux';
import axios from 'axios';
import { openResponseModal, closePriceModal } from '../../redux/actionCreators';

const RequestForm = ({
  windowType,
  width,
  height,
  price,
  openResponseModal,
  closePriceModal
}) => {
  const [info, setInfo] = useState({ name: '', tel: '' });
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    e.persist();
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      ...info,
      windowType,
      width,
      height,
      price,
    };

    try {
      const response = await axios.post('/telegram', order);
      const msg = await response.data.message;
      setResponseMsg(msg);
      closePriceModal();
      openResponseModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h3 className={styles.requestFormTitle}>Оставить заявку</h3>
      <form
        onSubmit={handleSubmit}
        autoComplete='off'
        className={styles.requestForm}
        action='/telegram'
        method='post'
        encType='application/x-www-form-urlencoded'
      >
        <input
          type='text'
          name='name'
          value={info.name}
          onChange={handleChange}
          placeholder='Имя'
        />
        <input
          type='tel'
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

export default connect(mapStateToProps, { openResponseModal, closePriceModal })(
  RequestForm
);
