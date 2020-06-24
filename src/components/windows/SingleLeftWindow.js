import React from 'react';
import styles from './windows.module.css';

const SingleLeftWindow = ({ flip, value, onHandleChange }) => (
  <div className={styles.windowWrapper}>
    <div className={styles.window}>
      <div className={styles.innerWindow}></div>
      <svg
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
        <g>
          <polygon
            points='100 100 120 120 120 1080 100 1100'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='100 100 120 120 680 120 700 100'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='700 100 680 120 680 1080 700 1100'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='100 1100 120 1080 680 1080 700 1100'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
        </g>
      </svg>
    </div>

    <form className={styles.radioBtns}>
      <label htmlFor='left'>
        <input
          type='radio'
          id='left'
          name='knob'
          value='left'
          checked={value === 'left'}
          onChange={onHandleChange}
        ></input>
        Ручка слева
      </label>
      <label htmlFor='right'>
        <input
          type='radio'
          id='right'
          name='knob'
          value='right'
          checked={value === 'right'}
          onChange={onHandleChange}
        ></input>
        Ручка справа
      </label>
    </form>
  </div>
);

export default SingleLeftWindow;
