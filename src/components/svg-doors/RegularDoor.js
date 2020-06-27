import React, { useState } from 'react';
import styles from '../svg-windows/window-svg.module.css';

const RegularDoor = ({ onHandleClick }) => {
  const [value, setValue] = useState('left-8');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const flip = value === 'left-8' ? false : true;

  return (
    <div onClick={onHandleClick} className={styles.windowWrapper}>
      <div data-type='RegularDoor' data-sash='1' className={styles.window}>
        <div className={styles.innerWindow}></div>
        <svg
          width='100'
          height='220'
          viewBox='0 0 900 2100'
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
              points='0 0 48 48 852 48 900 0'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='900 0 852 48 852 2052 900 2100'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='0 2100 48 2052 852 2052 900 2100'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <g>
            <polygon
              points='40 40 150 150 150 1950 40 2060'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='40 40 150 150 750 150 860 40'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='860 40 750 150 750 1950 860 2060'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='40 2060 150 1950 750 1950 860 2060'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <rect
            x='865'
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
            x='784'
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
            x='865'
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
            x='784'
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
            x='865'
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
            x='784'
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
            x='52.5'
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
            x='65'
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
            x='70'
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
            x='66'
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
        <label htmlFor='left-8'>
          <input
            type='radio'
            id='left-8'
            name='knob-8'
            value='left-8'
            checked={value === 'left-8'}
            onChange={handleChange}
          ></input>
          Ручка слева
        </label>
        <label htmlFor='right-8'>
          <input
            type='radio'
            id='right-8'
            name='knob-8'
            value='right-8'
            checked={value === 'right-8'}
            onChange={handleChange}
          ></input>
          Ручка справа
        </label>
      </div>
    </div>
  );
};

export default RegularDoor;
