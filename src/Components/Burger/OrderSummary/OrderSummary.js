import React from 'react';
import Aux from '../../../HOC/Aux';
import Btn from '../../UI/Button/Button'
const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredient).map(igKey => {
										return (<li key={igKey}>
												<span style={{textTransform:'capitalize'}}>{igKey}:</span>
												{props.ingredient[igKey]}
											</li>)
									})
	return (
		<Aux>
			<h2>In your Cart</h2>
			<p>Sharing the designed cards for #News18PublicSentimeter on China.</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>Continue...</p>
			<Btn clicked={null} btnType='Danger'>Cancel</Btn>
			<Btn clicked={null} btnType='Success'>Continue</Btn>
		</Aux>
	)
}
export default orderSummary;