import React from 'react';
import styles from '../svg-windows/window-svg.module.css';

const TrippleOneSash = ({ onHandleClick }) => (
  <div onClick={onHandleClick} className={styles.windowWrapper}>
    <div data-type='TrippleOneSash' data-sash='3' className={styles.window}>
      <div
        className={styles.innerWindow}
        style={{ left: '2%', width: '98%' }}
      ></div>
      <svg
        width='187'
        height='120'
        viewBox='0 0 2000 1200'
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
            points='0 0 48 48 1952 48 2000 0'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='2000 0 1952 48 1952 1152 2000 1200'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='0 1200 48 1152 1952 1152 2000 1200'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
        </g>
        <rect
          x='648.66666666667'
          y='48'
          rx='0'
          ry='0'
          width='36'
          height='1104'
          stroke='#0d0d0d'
          fill='#f2f2f2'
          strokeWidth='1'
        ></rect>
        <rect
          x='1315.3333333333'
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
            points='674.66666666667 40 734.66666666667 100 734.66666666667 1100 674.66666666667 1160'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='674.66666666667 40 734.66666666667 100 1261.3333333333 100 1321.3333333333 40'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='1321.3333333333 40 1261.3333333333 100 1261.3333333333 1100 1321.3333333333 1160'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='674.66666666667 1160 734.66666666667 1100 1261.3333333333 1100 1321.3333333333 1160'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
        </g>
      </svg>
    </div>
  </div>
);

export default TrippleOneSash;
