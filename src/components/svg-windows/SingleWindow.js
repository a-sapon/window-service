import React from 'react';
import styles from './window-svg.module.css';

const SingleWindow = ({ onHandleClick }) => (
  <div onClick={onHandleClick} className={styles.windowWrapper}>
    <div data-type='Глухое окно' data-sash='0' className={styles.window}>
      <div className={styles.innerWindow}></div>
      <svg
        width='86'
        height='120'
        viewBox='0 0 800 1200'
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
            points='48 48 68 68 68 1132 48 1152'
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
            points='752 48 732 68 732 1132 752 1152'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
          <polygon
            points='48 1152 68 1132 732 1132 752 1152'
            stroke='#0d0d0d'
            fill='#f2f2f2'
            strokeWidth='1'
          ></polygon>
        </g>
      </svg>
    </div>
  </div>
);

export default SingleWindow;
