import React from 'react';
import styles from './Calculator.module.css';
import '../../components/App.css';
import WindowTypesSection from '../../components/windowTypesSection/WindowTypesSection';

const Calculator = () => {
  const handleChange = (e) => {
    
  }

  const getPriceOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className='container'>
      <form onSubmit={getPriceOnSubmit} className={styles.calcForm}>
        <h2 id='calculator' className={styles.calcTitle}>
          Расчет стоимости пластиковых окон
        </h2>
        <WindowTypesSection />

        <div className={styles.windowSizeBox}>
          <h3 className={styles.windowSizeTitle}>Размер окна</h3>
          <div className={styles.windowSizeInputs}>
            <label>
              Ширина
              <span className={styles.inputsWrapper}>
                <input onChange={handleChange} type='number'></input>
              </span>
            </label>
            <label>
              Высота
              <span className={styles.inputsWrapper}>
                <input onChange={handleChange} type='number'></input>
              </span>
            </label>
          </div>
        </div>

        <button type='submit' className={styles.getPriceBtn}>
          Цена
        </button>
      </form>
    </main>
  );
};

export default Calculator;
