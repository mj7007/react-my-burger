import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div className={classes.DrawerToggleContainer}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
    </div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <div className={classes.NavigationContainer}>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  </header>
);

export default toolbar;
