import React, { Component } from 'react';
import { ScreenContext } from '../App';
import { Burger } from './burger/Burger';
import styles from './Navbar.module.css';
import '../App.css';

class Navbar extends Component {
  state = {
    bg: 'navWrapperTop',
    opened: false,
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
      this.setState({
        opened: !this.state.opened,
      });
    }
  };

  render() {
    const { bg, opened } = this.state;
    return (
      <ScreenContext.Consumer>
        {(isMobile) => (
          <div className={styles[`${bg}`]}>
            <nav
              className={`container ${styles.navbar}`}
              onClick={this.handleClick}
            >
              <a href='#home' className={styles.logo}>
                Окна на заказ
              </a>
              {isMobile ? (
                <Burger opened={opened} />
              ) : (
                <ul className={styles.navList}>
                  <li className={styles.navListItem}>
                    <a
                      href='#home'
                      
                    >
                      Главная
                    </a>
                  </li>
                  <li>
                    <a
                      href='#calculator'
                      className={styles.navListItem}
                    >
                      Расчитать стоимость
                    </a>
                  </li>
                  <li>
                    <a
                      href='#contact'
                      className={styles.navListItem}
                    >
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

export default Navbar;