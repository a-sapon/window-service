import React, { useState } from 'react';
import styles from '../svg-windows/window-svg.module.css';

const HalfBalconyDoor = ({ onHandleClick }) => {
  const [value, setValue] = useState('left-13');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const flip = value === 'left-13' ? false : true;

  return (
    <div onClick={onHandleClick} className={styles.windowWrapper}>
      <div data-type='HalfBalconyDoor' data-sash='1' className={styles.window}>
        <div className={styles.innerWindow}></div>
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
            x='100'
            y='1164'
            rx='0'
            ry='0'
            width='600'
            height='36'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='61'
            y='1010'
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
            y='1030'
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
          <g>
            <polygon
              points='100 1200 120 1220 120 1880 100 1900'
              stroke='#f2f2f2'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='100 1200 120 1220 680 1220 700 1200'
              stroke='#f2f2f2'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='700 1200 680 1220 680 1880 700 1900'
              stroke='#f2f2f2'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='100 1900 120 1880 680 1880 700 1900'
              stroke='#f2f2f2'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <g>
            <polygon
              points='120 1220 680 1220 680 1880 120 1880'
              stroke='#666666'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
        </svg>
      </div>

      <div className={styles.radioBtns}>
        <label htmlFor='left-13'>
          <input
            type='radio'
            id='left-13'
            name='knob-13'
            value='left-13'
            checked={value === 'left-13'}
            onChange={handleChange}
          ></input>
          Ручка слева
        </label>
        <label htmlFor='right-13'>
          <input
            type='radio'
            id='right-13'
            name='knob-13'
            value='right-13'
            checked={value === 'right-13'}
            onChange={handleChange}
          ></input>
          Ручка справа
        </label>
      </div>
    </div>
  );
};

export default HalfBalconyDoor;
