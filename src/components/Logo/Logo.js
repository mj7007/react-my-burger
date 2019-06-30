import React from 'react';

import BurgerLogo from '../../assets/burger-logo.png';
import classes from './Logo.css';

const logo = () => (
  <div className={classes.Logo}>
    <img src={BurgerLogo} alt="MyBurger" />
    <div className={classes.Name}>
      <strong>My Burger</strong>
    </div>
  </div>
);

export default logo;
