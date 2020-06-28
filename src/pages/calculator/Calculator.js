import React, { useState } from 'react';
import styles from './Calculator.module.css';
import '../../components/App.css';
import WindowTypesSection from '../../components/windowTypesSection/WindowTypesSection';
import {
  setWindowWidth,
  setWindowHeight,
  openPriceModal,
  setPrice,
} from '../../redux/actionCreators';
import { connect } from 'react-redux';
import PriceModal from '../../components/priceModal/PriceModal';
import PrimaryBtn from '../../components/primaryBtn/PrimaryBtn';
import { CSSTransition } from 'react-transition-group';
import animations from '../../styles/modalAnimation.module.css';
import ResponseModal from '../../components/priceModal/ResponseModal';

const Calculator = ({
  setWindowWidth,
  setWindowHeight,
  sashes,
  priceModal,
  openPriceModal,
  formResponseModal,
  setPrice,
}) => {
  const [width, setWidth] = useState(1400);
  const [height, setHeight] = useState(1300);

  const handleWidth = (e) => {
    setWidth(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const getPriceOnSubmit = (e) => {
    e.preventDefault();
    if (width < 300 || width > 4400 || height < 300 || height > 4400) {
      return;
    }
    setWindowWidth(Number(width));
    setWindowHeight(Number(height));

    const priceForOneMeterSquare = 2235;
    const priceForSash = 300;
    const windowSizeInMetersSquare =
      (Number(width) / 1000) * (Number(height) / 1000);
    const result =
      priceForOneMeterSquare * windowSizeInMetersSquare + sashes * priceForSash;
    const formatedPrice = new Intl.NumberFormat('uk-UK', {
      style: 'currency',
      currency: 'UAH',
    }).format(result);

    setPrice(formatedPrice);
    openPriceModal();
  };

  const handleBlur = (e) => {
    const hint = e.target.closest('label').children[0];
    if (e.target.value < 300 || e.target.value > 4400) {
      e.target.style.border = '1px solid red';
      hint.style.color = 'red';
    } else {
      e.target.style.border = '1px solid #d9d9d9';
      hint.style.color = '#808080';
    }
  };

  return (
    <main className={`container ${styles.calcSection}`}>
      <form onSubmit={getPriceOnSubmit} className={styles.calcForm}>
        <h2 className={styles.calcTitle}>
          Расчет стоимости пластиковых окон
        </h2>
        <WindowTypesSection />

        <div className={styles.windowSizeBox}>
          <h3 className={styles.windowSizeTitle}>Размер окна</h3>
          <div className={styles.windowSizeInputs}>
            <label>
              Ширина <span className={styles.inputHint}>(300 - 4400 мм)</span>
              <span className={styles.inputsWrapper}>
                <input
                  onChange={handleWidth}
                  value={width}
                  onBlur={handleBlur}
                  type='number'
                ></input>
              </span>
            </label>
            <label>
              Высота <span className={styles.inputHint}>(300 - 4400 мм)</span>
              <span className={styles.inputsWrapper}>
                <input
                  onChange={handleHeight}
                  value={height}
                  onBlur={handleBlur}
                  type='number'
                ></input>
              </span>
            </label>
          </div>
        </div>
        <PrimaryBtn innerText='Цена' />
      </form>

      <CSSTransition
        in={priceModal}
        timeout={300}
        classNames={animations}
        unmountOnExit
      >
        <PriceModal />
      </CSSTransition>

      <CSSTransition
        in={formResponseModal}
        timeout={300}
        classNames={animations}
        unmountOnExit
      >
        <ResponseModal />
      </CSSTransition>
    </main>
  );
};

const mapStateToProps = ({ window, modal }) => ({
  windowType: window.windowType,
  sashes: window.sashes,
  priceModal: modal.priceModalOpen,
  formResponseModal: modal.formResponseModalOpen,
});

export default connect(mapStateToProps, {
  setWindowWidth,
  setWindowHeight,
  openPriceModal,
  setPrice,
})(Calculator);
