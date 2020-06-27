import React from 'react';
import Navmodal from './Navmodal';
import { CSSTransition } from 'react-transition-group';
import styles from './Burger.module.css';
import animations from '../../../styles/burgerAnimation.module.css';

export const Burger = ({ opened }) => (
  <>
    <div
      className={opened ? styles.closeIcon : styles.burgerIcon}
      data-icon='burgerIcon'
    >
      <span className={styles.burgerIconLine} data-icon='burgerIcon'></span>
      <span className={styles.burgerIconLine} data-icon='burgerIcon'></span>
      <span className={styles.burgerIconLine} data-icon='burgerIcon'></span>
    </div>

    <CSSTransition
      in={opened}
      timeout={300}
      classNames={animations}
      unmountOnExit
    >
      <Navmodal />
    </CSSTransition>
  </>
);
