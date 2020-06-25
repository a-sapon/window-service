import React, { useState } from 'react';
import styles from './Calculator.module.css';
import '../../components/App.css';
import WindowTypesSection from '../../components/windowTypesSection/WindowTypesSection';
import { setWindowWidth, setWindowHeight } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import PriceModal from '../../components/priceModal/PriceModal';
import PrimaryBtn from '../../components/primaryBtn/PrimaryBtn';

const Calculator = ({ setWindowWidth, setWindowHeight, windowType }) => {
  const [width, setWidth] = useState(1400);
  const [height, setHeight] = useState(1300);
  const [modal, openModal] = useState(false);
  const [price, setPrice] = useState(0);

  const handleWidth = (e) => {
    setWidth(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const getPriceOnSubmit = (e) => {
    e.preventDefault();
    console.log(
      `windowType: ${windowType}, width: ${width}, height: ${height}`
    );
    setWindowWidth(Number(width));
    setWindowHeight(Number(height));

    const priceForOneMeterSquare = 2235;
    const windowSizeInMetersSquare =
      (Number(width) / 1000) * (Number(height) / 1000);
    const result = priceForOneMeterSquare * windowSizeInMetersSquare;
    if (width < 400 || width > 2400 || height < 400 || height > 2400) {
      return;
    }

    setPrice(result);
    openModal(true);
  };

  const handleBlur = (e) => {
    const hint = e.target.closest('label').children[0];
    if (e.target.value < 400 || e.target.value > 2400) {
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
        <h2 id='calculator' className={styles.calcTitle}>
          Расчет стоимости пластиковых окон
        </h2>
        <WindowTypesSection />

        <div className={styles.windowSizeBox}>
          <h3 className={styles.windowSizeTitle}>Размер окна</h3>
          <div className={styles.windowSizeInputs}>
            <label>
              Ширина <span className={styles.inputHint}>(400 - 2400 мм)</span>
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
              Высота <span className={styles.inputHint}>(400 - 2400 мм)</span>
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

      {modal && <PriceModal onOpenModal={openModal} price={price} />}
    </main>
  );
};

const mapStateToProps = ({ windowType }) => ({
  windowType,
});

export default connect(mapStateToProps, { setWindowWidth, setWindowHeight })(
  Calculator
);
