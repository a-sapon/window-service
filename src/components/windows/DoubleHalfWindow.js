import React from 'react';
import styles from './windows.module.css';

const DoubleHalfWindow = () => (
  <div className={styles.windowWrapper}>
    <div className={styles.window}>
      <div className={styles.innerWindow}></div>
      <svg
      width='120'
      height='120'
        viewBox='0 0 1200 1200'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
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
            points='40 40 100 100 100 1100 40 1160'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='40 40 100 100 530 100 590 40'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='590 40 530 100 530 1100 590 1160'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='40 1160 100 1100 530 1100 590 1160'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
        </g>

        <rect
          x='541'
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
          x='545'
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
          x='22'
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
          x='22'
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
          x='22'
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
          x='22'
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
  </div>
);

export default DoubleHalfWindow;