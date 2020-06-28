import React, { useState } from 'react';
import styles from '../svg-windows/window-svg.module.css';

const DoubleTDoor = ({ onHandleClick }) => {
  const [value, setValue] = useState('left-11');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const flip = value === 'left-11' ? false : true;

  return (
    <div onClick={onHandleClick} className={styles.windowWrapper}>
      <div data-type='DoubleTDoor' data-sash='2' className={styles.window}>
        <div
          className={styles.innerWindow}
          style={{ height: '94%', top: '2%' }}
        ></div>
        <svg
          width='110'
          height='220'
          viewBox='0 0 1300 2730'
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
              points='0 0 48 48 1252 48 1300 0'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1300 0 1252 48 1252 2682 1300 2730'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='0 2730 48 2682 1252 2682 1300 2730'
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
            width='1204'
            height='36'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <rect
            x='415.33333333333'
            y='700.5'
            rx='0'
            ry='0'
            width='36'
            height='1981.5'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></rect>
          <g>
            <polygon
              points='441.33333333333 692.5 551.33333333333 802.5 551.33333333333 2578 441.33333333333 2688'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='441.33333333333 692.5 551.33333333333 802.5 1148 802.5 1258 692.5'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='1258 692.5 1148 802.5 1148 2578 1258 2688'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
            <polygon
              points='441.33333333333 2688 551.33333333333 2578 1148 2578 1258 2688'
              stroke='#0d0d0d'
              fill='#f2f2f2'
              strokeWidth='1'
            ></polygon>
          </g>
          <rect
            x='1263'
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
            x='1182'
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
            x='1263'
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
            x='1182'
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
            x='1263'
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
            x='1182'
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
            x='453.83333333333'
            y='1605.25'
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
            y='1630.25'
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
            y='1705.25'
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
            y='1705.25'
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
        <label htmlFor='left-11'>
          <input
            type='radio'
            id='left-11'
            name='knob-11'
            value='left-11'
            checked={value === 'left-11'}
            onChange={handleChange}
          ></input>
          Ручка слева
        </label>
        <label htmlFor='right-11'>
          <input
            type='radio'
            id='right-11'
            name='knob-11'
            value='right-11'
            checked={value === 'right-11'}
            onChange={handleChange}
          ></input>
          Ручка справа
        </label>
      </div>
    </div>
  );
};

export default DoubleTDoor;
