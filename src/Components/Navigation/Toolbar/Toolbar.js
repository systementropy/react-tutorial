import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/Drawertoggle/Drawertoggle'
const toolBar = (props) => (
	<header className={classes.Toolbar}>
		{/* <div onClick={props.openSideDrawerMenu}>Menu</div> */}
		<DrawerToggle openSideDrawer={props.openSideDrawerMenu}/>
		<Logo />
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
		{/* <button></button> */}
	</header>
);
export default toolBar