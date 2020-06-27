import React, { useState } from 'react';
import styles from './window-svg.module.css';

const SingleWindowWithKnob = ({ onHandleClick }) => {
  const [value, setValue] = useState('left-1');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const flip = value === 'left-1' ? false : true;

  return (
    <div onClick={onHandleClick} className={styles.windowWrapper}>
      <div data-type='SingleWindowWithKnob' data-sash='1' className={styles.window}>
        <div className={styles.innerWindow}></div>
        <svg
          width='80'
          height='120'
          viewBox='0 0 800 1200'
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
              points='0 0 48 48 752 48 800 0'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='800 0 752 48 752 1152 800 1200'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='0 1200 48 1152 752 1152 800 1200'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <g>
            <polygon
              points='40 40 100 100 100 1100 40 1160'
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
              points='760 40 700 100 700 1100 760 1160'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='40 1160 100 1100 700 1100 760 1160'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <rect
            x='61'
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
            x='65'
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
            x='760'
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
        <label htmlFor='left-1'>
          <input
            type='radio'
            id='left-1'
            name='knob-1'
            value='left-1'
            checked={value === 'left-1'}
            onChange={handleChange}
          ></input>
          Ручка слева
        </label>
        <label htmlFor='right-1'>
          <input
            type='radio'
            id='right-1'
            name='knob-1'
            value='right-1'
            checked={value === 'right-1'}
            onChange={handleChange}
          ></input>
          Ручка справа
        </label>
      </div>
    </div>
  );
};

export default SingleWindowWithKnob;