import React, { Component } from 'react';
import { ScreenContext } from '../App';
import Burger from './burger/Burger';
import styles from './Navbar.module.css';
import '../App.css';
import { openPriceModal, toggleMenuOnMobile } from '../../redux/actionCreators';
import { connect } from 'react-redux';

class Navbar extends Component {
  state = {
    bg: 'navWrapperTop'
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    if (window.pageYOffset > 0) {
      this.setState({
        bg: 'navWrapper',
      });
    } else {
      this.setState({
        bg: 'navWrapperTop',
      });
    }
  }

  handleClick = (e) => {
    if (e.target.dataset.icon === 'burgerIcon') {
      this.props.toggleMenuOnMobile();
    }
  };

  render() {
    const { bg } = this.state;
    return (
      <ScreenContext.Consumer>
        {(isMobile) => (
          <div className={styles[`${bg}`]}>
            <nav
              className={`container ${styles.navbar}`}
              onClick={this.handleClick}
            >
              <a href='#home' className={styles.logo}>
                <div>Window
                  <div className={styles.logoText}>Service</div>
                </div>
              </a>
              {isMobile ? (
                <Burger />
              ) : (
                <ul className={styles.navList}>
                  <li className={styles.navListItem}>
                    <a href='#home'>Главная</a>
                  </li>
                  <li>
                    <a href='#calculator' className={styles.navListItem}>
                      Стоимость
                    </a>
                  </li>
                  <li>
                    <a href='#request' onClick={() => this.props.openPriceModal()} className={styles.navListItem}>
                      Оставить заявку
                    </a>
                  </li>
                  <li>
                    <a href='#contact' className={styles.navListItem}>
                      Контакты
                    </a>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        )}
      </ScreenContext.Consumer>
    );
  }
}

export default connect(null, { toggleMenuOnMobile, openPriceModal })(Navbar);
