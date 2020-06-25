import React from 'react';
import classes from './Logo.module.css'
import logoImg from '../../../Assets/images/logo.png'; 
const logo = (props) => (
	<div className={classes.Logo}>
		<img src={logoImg}	alt=''/>
	</div>
)
export default logo;