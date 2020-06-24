import React, { useState } from 'react';
import styles from './windows.module.css';

const SingleThirdWindowSide = () => {
  const [value, setValue] = useState('left-3');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const flip = value === 'left-3' ? false : true;

  return (
    <div className={styles.windowWrapper}>
      <div className={styles.window}>
        <div className={styles.innerWindow}></div>
        <svg
          width='140'
          height='120'
          viewBox='0 0 1500 1200'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          className={flip ? styles.flipped : 'unflipped'}
        >
          <g>
            <polygon
              points='0 0 48 48 48 1152 0 1200'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='0 0 48 48 1452 48 1500 0'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1500 0 1452 48 1452 1152 1500 1200'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='0 1200 48 1152 1452 1152 1500 1200'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>

          <rect
            x='982'
            y='48'
            rx='0'
            ry='0'
            width='36'
            height='1104'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>

          <g>
            <polygon
              points='48 48 68 68 68 1132 48 1152'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='48 48 68 68 962 68 982 48'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='982 48 962 68 962 1132 982 1152'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='48 1152 68 1132 962 1132 982 1152'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <g>
            <polygon
              points='1011 40 1071 100 1071 1100 1011 1160'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1011 40 1071 100 1401 100 1461 40'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1461 40 1401 100 1401 1100 1461 1160'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1011 1160 1071 1100 1401 1100 1461 1160'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>

          <rect
            x='1032'
            y='570'
            rx='14'
            ry='14'
            width='28'
            height='60'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='1036'
            y='590'
            rx='10'
            ry='10'
            width='20'
            height='120'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>

          <rect
            x='1461'
            y='40'
            rx='2'
            ry='2'
            width='15'
            height='80'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='1461'
            y='55'
            rx='2'
            ry='2'
            width='15'
            height='50'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>

          <rect
            x='1461'
            y='1145'
            rx='2'
            ry='2'
            width='15'
            height='15'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='1461'
            y='1030'
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
        <label htmlFor='left-3'>
          <input
            type='radio'
            id='left-3'
            name='knob-3'
            value='left-3'
            checked={value === 'left-3'}
            onChange={handleChange}
          ></input>
          Ручка слева
        </label>
        <label htmlFor='right-3'>
          <input
            type='radio'
            id='right-3'
            name='knob-3'
            value='right-3'
            checked={value === 'right-3'}
            onChange={handleChange}
          ></input>
          Ручка справа
        </label>
      </div>
    </div>
  );
};

export default SingleThirdWindowSide;