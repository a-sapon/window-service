import React, { useState } from 'react';
import styles from './window-svg.module.css';

const SingleTWindow = ({ onHandleClick }) => {
  const [value, setValue] = useState('left-7');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const flip = value === 'left-7' ? false : true;

  return (
    <div onClick={onHandleClick} className={styles.windowWrapper}>
      <div data-type='SingleTWindow' className={styles.window}>
        <div className={styles.innerWindow}></div>
        <svg
          width='100'
          height='120'
          viewBox='0 0 1200 1560'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          className={flip ? styles.flipped : 'unflipped'}
          
        >
          <g>
            <polygon
              points='0 0 48 48 48 1512 0 1560'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='0 0 48 48 1152 48 1200 0'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1200 0 1152 48 1152 1512 1200 1560'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='0 1560 48 1512 1152 1512 1200 1560'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <rect
            x='48'
            y='502'
            rx='0'
            ry='0'
            width='1104'
            height='36'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='582'
            y='538'
            rx='0'
            ry='0'
            width='36'
            height='974'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <g>
            <polygon
              points='48 48 68 68 68 482 48 502'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='48 48 68 68 1132 68 1152 48'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1152 48 1132 68 1132 482 1152 502'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='48 502 68 482 1132 482 1152 502'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <g>
            <polygon
              points='48 538 68 558 68 1492 48 1512'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='48 538 68 558 562 558 582 538'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='582 538 562 558 562 1492 582 1512'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='48 1512 68 1492 562 1492 582 1512'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <g>
            <polygon
              points='611 530 671 590 671 1460 611 1520'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='611 530 671 590 1101 590 1161 530'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1161 530 1101 590 1101 1460 1161 1520'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='611 1520 671 1460 1101 1460 1161 1520'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <rect
            x='632'
            y='995'
            rx='14'
            ry='14'
            width='28'
            height='60'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='636'
            y='1015'
            rx='10'
            ry='10'
            width='20'
            height='120'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='1161'
            y='530'
            rx='2'
            ry='2'
            width='15'
            height='80'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='1161'
            y='545'
            rx='2'
            ry='2'
            width='15'
            height='50'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='1161'
            y='1505'
            rx='2'
            ry='2'
            width='15'
            height='15'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='1161'
            y='1390'
            rx='2'
            ry='2'
            width='15'
            height='112'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
        </svg>
      </div>

      <div className={styles.radioBtns}>
        <label htmlFor='left-7'>
          <input
            type='radio'
            id='left-7'
            name='knob-7'
            value='left-7'
            checked={value === 'left-7'}
            onChange={handleChange}
          ></input>
          Ручка слева
        </label>
        <label htmlFor='right-7'>
          <input
            type='radio'
            id='right-7'
            name='knob-7'
            value='right-7'
            checked={value === 'right-7'}
            onChange={handleChange}
          ></input>
          Ручка справа
        </label>
      </div>
    </div>
  );
};

export default SingleTWindow;
