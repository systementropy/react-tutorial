import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
const toolBar = (props) => (
	<header className={classes.Toolbar}>
		<div>Menu</div>
		<Logo />
		<NavigationItems />
		{/* <button></button> */}
	</header>
);
export default toolBar