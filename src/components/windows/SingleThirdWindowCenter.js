import React, { useState } from 'react';
import styles from './windows.module.css';

const SingleThirdWindowCenter = () => {
  const [value, setValue] = useState('left-4');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const flip = value === 'left-4' ? false : true;

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
            x='482'
            y='48'
            rx='0'
            ry='0'
            width='36'
            height='1104'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
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
              points='48 48 68 68 462 68 482 48'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='482 48 462 68 462 1132 482 1152'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='48 1152 68 1132 462 1132 482 1152'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <g>
            <polygon
              points='508 40 568 100 568 1100 508 1160'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='508 40 568 100 928 100 988 40'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='988 40 928 100 928 1100 988 1160'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='508 1160 568 1100 928 1100 988 1160'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <rect
            x='529'
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
            x='533'
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
            x='988'
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
            x='988'
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
            x='988'
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
            x='988'
            y='1030'
            rx='2'
            ry='2'
            width='15'
            height='112'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <g>
            <polygon
              points='1018 48 1038 68 1038 1132 1018 1152'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1018 48 1038 68 1432 68 1452 48'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1452 48 1432 68 1432 1132 1452 1152'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1018 1152 1038 1132 1432 1132 1452 1152'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
        </svg>
      </div>

      <div className={styles.radioBtns}>
        <label htmlFor='left-4'>
          <input
            type='radio'
            id='left-4'
            name='knob-4'
            value='left-4'
            checked={value === 'left-4'}
            onChange={handleChange}
          ></input>
          Ручка слева
        </label>
        <label htmlFor='right-4'>
          <input
            type='radio'
            id='right-4'
            name='knob-4'
            value='right-4'
            checked={value === 'right-4'}
            onChange={handleChange}
          ></input>
          Ручка справа
        </label>
      </div>
    </div>
  );
};

export default SingleThirdWindowCenter;
