import React, { useState } from 'react';
import styles from '../svg-windows/window-svg.module.css';

const RegularBalconyDoor = ({ onHandleClick }) => {
  const [value, setValue] = useState('left-12');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const flip = value === 'left-12' ? false : true;

  return (
    <div onClick={onHandleClick} className={styles.windowWrapper}>
      <div
        data-type='RegularBalconyDoor'
        data-sash='1'
        className={styles.window}
      >
        <div className={styles.innerWindow} style={{ height: '92%' }}></div>
        <svg
          width='90'
          height='220'
          viewBox='0 0 800 2000'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          className={flip ? styles.flipped : 'unflipped'}
        >
          <g>
            <polygon
              points='0 0 48 48 48 1952 0 2000'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='0 0 48 48 752 48 800 0'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='800 0 752 48 752 1952 800 2000'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='0 2000 48 1952 752 1952 800 2000'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <g>
            <polygon
              points='40 40 100 100 100 1900 40 1960'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='40 40 100 100 700 100 760 40'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='760 40 700 100 700 1900 760 1960'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='40 1960 100 1900 700 1900 760 1960'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <rect
            x='61'
            y='970'
            rx='14'
            ry='14'
            width='28'
            height='60'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='65'
            y='990'
            rx='10'
            ry='10'
            width='20'
            height='120'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='760'
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
            x='760'
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
            x='760'
            y='1945'
            rx='2'
            ry='2'
            width='15'
            height='15'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='760'
            y='1830'
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
        <label htmlFor='left-12'>
          <input
            type='radio'
            id='left-12'
            name='knob-12'
            value='left-12'
            checked={value === 'left-12'}
            onChange={handleChange}
          ></input>
          Ручка слева
        </label>
        <label htmlFor='right-12'>
          <input
            type='radio'
            id='right-12'
            name='knob-12'
            value='right-12'
            checked={value === 'right-12'}
            onChange={handleChange}
          ></input>
          Ручка справа
        </label>
      </div>
    </div>
  );
};

export default RegularBalconyDoor;
