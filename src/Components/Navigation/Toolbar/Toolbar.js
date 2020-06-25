import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo'
const toolBar = (props) => (
	<header className={classes.Toolbar}>
		<div>Menu</div>
		<Logo />
		<nav>
			...
		</nav>
		{/* <button></button> */}
	</header>
);
export default toolBar