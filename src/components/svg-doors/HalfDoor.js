import React, { useState } from 'react';
import styles from '../svg-windows/window-svg.module.css';

const HalfDoor = ({ onHandleClick }) => {
  const [value, setValue] = useState('left-9');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const flip = value === 'left-9' ? false : true;

  return (
    <div onClick={onHandleClick} className={styles.windowWrapper}>
      <div data-type='HalfDoor' data-sash='1' className={styles.window}>
        <div
          className={styles.innerWindow}
          style={{ height: '94%', top: '2%' }}
        ></div>
        <svg
          width='140'
          height='220'
          viewBox='0 0 1300 2100'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          className={flip ? styles.flipped : 'unflipped'}
        >
          <g>
            <polygon
              points='0 0 48 48 48 2052 0 2100'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='0 0 48 48 1252 48 1300 0'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1300 0 1252 48 1252 2052 1300 2100'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='0 2100 48 2052 1252 2052 1300 2100'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <g>
            <polygon
              points='441.33333333333 40 551.33333333333 150 551.33333333333 1950 441.33333333333 2060'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='441.33333333333 40 551.33333333333 150 1148 150 1258 40'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1258 40 1148 150 1148 1950 1258 2060'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='441.33333333333 2060 551.33333333333 1950 1148 1950 1258 2060'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <rect
            x='1263'
            y='190'
            rx='4'
            ry='4'
            width='25'
            height='112'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='1182'
            y='190'
            rx='4'
            ry='4'
            width='106'
            height='55'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='1263'
            y='990'
            rx='4'
            ry='4'
            width='25'
            height='112'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='1182'
            y='990'
            rx='4'
            ry='4'
            width='106'
            height='55'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='1263'
            y='1790'
            rx='4'
            ry='4'
            width='25'
            height='112'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='1182'
            y='1790'
            rx='4'
            ry='4'
            width='106'
            height='55'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='453.83333333333'
            y='965'
            rx='10'
            ry='10'
            width='45'
            height='170'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='466.33333333333'
            y='990'
            rx='10'
            ry='10'
            width='130'
            height='20'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='471.33333333333'
            y='1065'
            rx='5'
            ry='5'
            width='10'
            height='35'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='467.33333333333'
            y='1065'
            rx='9'
            ry='9'
            width='18'
            height='18'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
        </svg>
      </div>

      <div className={styles.radioBtns}>
        <label htmlFor='left-9'>
          <input
            type='radio'
            id='left-9'
            name='knob-9'
            value='left-9'
            checked={value === 'left-9'}
            onChange={handleChange}
          ></input>
          Ручка слева
        </label>
        <label htmlFor='right-9'>
          <input
            type='radio'
            id='right-9'
            name='knob-9'
            value='right-9'
            checked={value === 'right-9'}
            onChange={handleChange}
          ></input>
          Ручка справа
        </label>
      </div>
    </div>
  );
};

export default HalfDoor;
