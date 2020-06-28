import React from 'react';
import styles from '../svg-windows/window-svg.module.css';

const QuadrupleTwoSash = ({ onHandleClick }) => (
  <div onClick={onHandleClick} className={styles.windowWrapper}>
    <div data-type='QuadrupleTwoSash' data-sash='4' className={styles.window}>
      <div
        className={styles.innerWindow}
        style={{ left: '2%', width: '98%' }}
      ></div>
      <svg
        width='228'
        height='120'
        viewBox='0 0 2500 1200'
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
            points='0 0 48 48 2452 48 2500 0'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='2500 0 2452 48 2452 1152 2500 1200'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='0 1200 48 1152 2452 1152 2500 1200'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
        </g>
        <rect
          x='607'
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
          x='1232'
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
          x='1857'
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
            points='633 40 693 100 693 1100 633 1160'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='633 40 693 100 1178 100 1238 40'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='1238 40 1178 100 1178 1100 1238 1160'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='633 1160 693 1100 1178 1100 1238 1160'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
        </g>
        <g>
          <polygon
            points='1258 40 1318 100 1318 1100 1258 1160'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='1258 40 1318 100 1803 100 1863 40'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='1863 40 1803 100 1803 1100 1863 1160'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='1258 1160 1318 1100 1803 1100 1863 1160'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
        </g>
      </svg>
    </div>
  </div>
);

export default QuadrupleTwoSash;