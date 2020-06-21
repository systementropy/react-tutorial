import React from 'react';
import Aux from '../../HOC/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls.js'
const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};
class BurgerBuilder extends React.Component{
	// constructor(props){
	// 	super(props);
	// 	this.state ={}
	// }
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice : 2
	}
	addIngredientHandler = (type) =>{
		const oldCount = this.state.ingredients[type];
		const newCount = oldCount+1;
		const updatedIngredient = {
			...this.state.ingredients
		} 
		updatedIngredient[type] = newCount;
		const priceChange = INGREDIENT_PRICES[type]
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceChange;
		this.setState({totalPrice:newPrice,ingredients:updatedIngredient})
	}
	removeIngredientHandler = (type) =>{
		const oldCount = this.state.ingredients[type];
		const newCount = oldCount-1;
		const updatedIngredient = {
			...this.state.ingredients
		} 
		updatedIngredient[type] = newCount;
		const priceChange = INGREDIENT_PRICES[type]
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceChange;
		this.setState({totalPrice:newPrice,ingredients:updatedIngredient})
	}
	render(){
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls 
					ingredientsAdded = {this.addIngredientHandler}
					ingredientsRemoved = {this.removeIngredientHandler}
				/>
			</Aux>
		)
	}
}
export default BurgerBuilder;