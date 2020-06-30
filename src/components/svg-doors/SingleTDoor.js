import React, { useState } from 'react';
import styles from '../svg-windows/window-svg.module.css';

const SingleTDoor = ({ onHandleClick }) => {
  const [value, setValue] = useState('left-10');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const flip = value === 'left-10' ? false : true;

  return (
    <div onClick={onHandleClick} className={styles.windowWrapper}>
      <div data-type='Одностворчатая Т-образная входная дверь' data-sash='1' className={styles.window}>
        <div
          className={styles.innerWindow}
          style={{ height: '94%', top: '0' }}
        ></div>
        <svg
          width='78'
          height='220'
          viewBox='0 0 900 2730'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          className={flip ? styles.flipped : 'unflipped'}
        >
          <g>
            <polygon
              points='0 0 48 48 48 2682 0 2730'
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
              points='900 0 852 48 852 2682 900 2730'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='0 2730 48 2682 852 2682 900 2730'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>

          <rect
            x='48'
            y='664.5'
            rx='0'
            ry='0'
            width='804'
            height='36'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <g>
            <polygon
              points='40 692.5 150 802.5 150 2580 40 2690'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='40 692.5 150 802.5 750 802.5 860 692.5'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='860 692.5 750 802.5 750 2580 860 2690'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='40 2690 150 2580 750 2580 860 2690'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <rect
            x='865'
            y='842.5'
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
            y='842.5'
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
            y='1642.5'
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
            y='1642.5'
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
            y='2442.5'
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
            y='2442.5'
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
            y='1606.25'
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
            y='1631.25'
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
            y='1706.25'
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
            y='1706.25'
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
        <label htmlFor='left-10'>
          <input
            type='radio'
            id='left-10'
            name='knob-10'
            value='left-10'
            checked={value === 'left-10'}
            onChange={handleChange}
          ></input>
          Ручка слева
        </label>
        <label htmlFor='right-10'>
          <input
            type='radio'
            id='right-10'
            name='knob-10'
            value='right-10'
            checked={value === 'right-10'}
            onChange={handleChange}
          ></input>
          Ручка справа
        </label>
      </div>
    </div>
  );
};

export default SingleTDoor;