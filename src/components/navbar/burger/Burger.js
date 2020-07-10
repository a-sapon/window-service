import React from 'react';
import Navmodal from './Navmodal';
import { CSSTransition } from 'react-transition-group';
import styles from './Burger.module.css';
import animations from '../../../styles/burgerAnimation.module.css';
import { connect } from 'react-redux';

const Burger = ({ open }) => (
  <>
    <div
      className={open ? styles.closeIcon : styles.burgerIcon}
      data-icon='burgerIcon'
    >
      <span className={styles.burgerIconLine} data-icon='burgerIcon'></span>
      <span className={styles.burgerIconLine} data-icon='burgerIcon'></span>
      <span className={styles.burgerIconLine} data-icon='burgerIcon'></span>
    </div>

    <CSSTransition
      in={open}
      timeout={300}
      classNames={animations}
      unmountOnExit
    >
      <Navmodal />
    </CSSTransition>
  </>
);

const mapStateToProps = ({ menuOnMobileOpen }) => ({
  open: menuOnMobileOpen
});

export default connect(mapStateToProps)(Burger);