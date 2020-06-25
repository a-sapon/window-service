import React, { useState } from 'react';
import styles from './window-svg.module.css';

const HalfTWindow = ({ onHandleClick }) => {
  const [value, setValue] = useState('left-6');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const flip = value === 'left-6' ? false : true;

  return (
    <div onClick={onHandleClick} className={styles.windowWrapper}>
      <div data-type='HalfTWindow' className={styles.window}>
        <div className={styles.innerWindow} style={{width: '86%'}}></div>
        <svg
          width='70'
          height='120'
          viewBox='0 0 800 1560'
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
              points='0 0 48 48 752 48 800 0'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='800 0 752 48 752 1512 800 1560'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='0 1560 48 1512 752 1512 800 1560'
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
            width='704'
            height='36'
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
              points='48 48 68 68 732 68 752 48'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='752 48 732 68 732 482 752 502'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='48 502 68 482 732 482 752 502'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <g>
            <polygon
              points='40 530 100 590 100 1460 40 1520'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='40 530 100 590 700 590 760 530'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='760 530 700 590 700 1460 760 1520'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='40 1520 100 1460 700 1460 760 1520'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <rect
            x='61'
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
            x='65'
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
            x='760'
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
            x='760'
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
            x='760'
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
            x='760'
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
        <label htmlFor='left-6'>
          <input
            type='radio'
            id='left-6'
            name='knob-6'
            value='left-6'
            checked={value === 'left-6'}
            onChange={handleChange}
          ></input>
          Ручка слева
        </label>
        <label htmlFor='right-6'>
          <input
            type='radio'
            id='right-6'
            name='knob-6'
            value='right-6'
            checked={value === 'right-6'}
            onChange={handleChange}
          ></input>
          Ручка справа
        </label>
      </div>
    </div>
  );
};

export default HalfTWindow;
