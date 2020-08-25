import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'
const controls =[
	{label: 'Salad',type:'salad'},
	{label: 'Cheese',type:'cheese'},
	{label: 'Bacon',type:'bacon'},
	{label: 'Meat',type:'meat'},
]
const buildControls = (props) =>(
	<div className={classes.BuildControls}>
		<h2>Order Price: <strong>{props.price.toFixed(2)}</strong></h2>
		{controls.map(ctrl => (
			<BuildControl 
				key={ctrl.label} 
				label={ctrl.label} 
				type = {ctrl.type}
				added = {() => props.ingredientsAdded(ctrl.type)}
				removed = {() => props.ingredientsRemoved(ctrl.type)}
				disabled = {props.disabledInfo[ctrl.type]}
			/>
		))}
		<button 
			className={classes.OrderButton}
			disabled = {props.purchasable}
			onClick = {props.purchaseNow}
		>Place your Order</button>
	</div>
);
export default buildControls;