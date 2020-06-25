import React, { useState } from 'react';
import styles from './window-svg.module.css';

const SingleHalfWindow = ({ onHandleClick }) => {
  const [value, setValue] = useState('left-2');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const flip = value === 'left-2' ? false : true;

  return (
    <div onClick={onHandleClick} className={styles.windowWrapper}>
      <div data-type='SingleHalfWindow' className={styles.window}>
        <div className={styles.innerWindow}></div>
        <svg
          width='120'
          height='120'
          viewBox='0 0 1200 1200'
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
              points='0 0 48 48 1152 48 1200 0'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1200 0 1152 48 1152 1152 1200 1200'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='0 1200 48 1152 1152 1152 1200 1200'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>

          <rect
            x='582'
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
              points='48 48 68 68 562 68 582 48'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='582 48 562 68 562 1132 582 1152'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='48 1152 68 1132 562 1132 582 1152'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <g>
            <polygon
              points='611 40 671 100 671 1100 611 1160'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='611 40 671 100 1101 100 1161 40'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1161 40 1101 100 1101 1100 1161 1160'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='611 1160 671 1100 1101 1100 1161 1160'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>

          <rect
            x='632'
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
            x='636'
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
            x='1161'
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
            x='1161'
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
            x='1161'
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
            x='1161'
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
        <label htmlFor='left-2'>
          <input
            type='radio'
            id='left-2'
            name='knob-2'
            value='left-2'
            checked={value === 'left-2'}
            onChange={handleChange}
          ></input>
          Ручка слева
        </label>
        <label htmlFor='right-2'>
          <input
            type='radio'
            id='right-2'
            name='knob-2'
            value='right-2'
            checked={value === 'right-2'}
            onChange={handleChange}
          ></input>
          Ручка справа
        </label>
      </div>
    </div>
  );
};

export default SingleHalfWindow;