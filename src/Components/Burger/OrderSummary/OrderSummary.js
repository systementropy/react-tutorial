import React from 'react';
import Aux from '../../../HOC/Aux';
import Btn from '../../UI/Button/Button'
import classes from './OrderSummary.module.css';
const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredient).map(igKey => {
		return (
			<li key={igKey} className={classes.listItem}>
				<span style={{textTransform:'capitalize'}}>{igKey}:</span>
				<span>{props.ingredient[igKey]}</span>
			</li>
		)
	})
	return (
		<Aux>
			<h2>In your Cart</h2>
			<p>Sharing the designed cards for #News18PublicSentimeter on China.</p>
			<ul className={classes.listContainer}>
				{ingredientSummary}
			</ul>
			<hr />
			<b>Total Price : Rs. {props.price.toFixed(2)}</b>
			<hr />
			<p>Continue...</p>
			<Btn clicked={props.cancel} btnType='Danger'>Cancel</Btn>
			<Btn clicked={props.continue} btnType='Success'>Continue</Btn>
		</Aux>
	)
}
export default orderSummary;