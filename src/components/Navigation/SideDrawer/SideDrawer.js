import React from 'react';

import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = props => (
  <Aux>
    <Backdrop show={props.open} clicked={props.closed} />
    <div
      className={[
        classes.SideDrawer,
        props.open ? classes.Open : classes.Close
      ].join(' ')}
    >
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  </Aux>
);

export default sideDrawer;
