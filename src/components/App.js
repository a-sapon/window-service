import React, { useState, useEffect, createContext } from 'react';
import { Home } from '../pages/homePage/Home';
import Calculator from '../pages/calculator/Calculator';
import { Contact } from '../pages/contactPage/Contact';
import { Footer } from './footer/Footer';
import CallButton from './callButton/CallButton';
import Spinner from './spinner/Spinner';
import { connect } from 'react-redux';
import Swipe from 'react-easy-swipe';
import { closeManuOnSwipe } from '../redux/actionCreators';
import './App.css';

export const ScreenContext = createContext();

const App = ({ spinner, closeManuOnSwipe }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false);
    };
    checkScreenWidth();
  }, []);

  const swipeHandler = () => {
    closeManuOnSwipe();
  };

  return (
    <ScreenContext.Provider value={isMobile}>
      <Swipe onSwipeRight={swipeHandler}>
        <Home />
        <Calculator />
        <Contact />
        <Footer />
      </Swipe>
      <CallButton />
      {spinner && <Spinner />}
    </ScreenContext.Provider>
  );
};

const mapStateToProps = ({ spinner }) => ({
  spinner,
});

export default connect(mapStateToProps, { closeManuOnSwipe })(App);
