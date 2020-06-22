import React from 'react';
import classes from './Modal.module.css';
import Aux from "../../../HOC/Aux";
import Backdrop from '../Backdrop/Backdrop'
const modal = (props)  => (
	<Aux>
		<div 
			className={classes.Modal}
			style={{
				transform: props.show?'scale(1) translateY(0)': 'scale(0.8) translateY(-100vh)',
				opacity: props.show?'1': '0'
			}}
		>{props.children}</div>
		<Backdrop show = {props.show} clicked={props.closed}/>
	</Aux>
);

export default modal;