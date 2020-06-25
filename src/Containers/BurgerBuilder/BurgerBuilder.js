import React from 'react';
import Aux from '../../HOC/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls.js'
import Modal from '../../Components/UI/Modal/Modal';
import Summary from '../../Components/Burger/OrderSummary/OrderSummary'
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
		totalPrice : 2,
		purchasable: false,
		purchasing: false
	}
	purchaseHandler = () => {
		this.setState({purchasing:true});
	}
	purchaseCancelHandler = () => {
		this.setState({purchasing:false});
	}
	purchaseContinueHandler = () => {
		alert('To be continued....')
		this.setState({purchasing:false});
	}
	updatePurchasablility(ingredients){
		// const ingredients = {...this.state.ingredients}
		const sum = Object
					.keys(ingredients)
					.map(igKey =>{
						return ingredients[igKey]
					})
					.reduce((sum,el) =>{
						return sum + el
					},0)
		this.setState({purchasable:sum>0})
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
		this.updatePurchasablility(updatedIngredient);
	}
	removeIngredientHandler = (type) =>{
		const oldCount = this.state.ingredients[type];
		if(oldCount<=0){
			return;
		}
		const newCount = oldCount-1;
		const updatedIngredient = {
			...this.state.ingredients
		} 
		updatedIngredient[type] = newCount;
		const priceChange = INGREDIENT_PRICES[type]
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceChange;
		this.setState({totalPrice:newPrice,ingredients:updatedIngredient})
		this.updatePurchasablility(updatedIngredient);
	}

	render(){
		const disabledInfo = {...this.state.ingredients}
		for (const key in disabledInfo) {
			if (disabledInfo.hasOwnProperty(key)) {
				disabledInfo[key] = disabledInfo[key] <=0
			}
		}
		return (
			<Aux>
				<Modal show={this.state.purchasing} closed={this.purchaseCancelHandler}>
					<Summary 
						ingredient={this.state.ingredients}
						price = {this.state.totalPrice}
						cancel={this.purchaseCancelHandler}
						continue={this.purchaseContinueHandler}
						/>
				</Modal>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls 
					ingredientsAdded = {this.addIngredientHandler}
					ingredientsRemoved = {this.removeIngredientHandler}
					disabledInfo = {disabledInfo}
					price = {this.state.totalPrice}
					purchasable = {!this.state.purchasable}
					purchaseNow = {this.purchaseHandler}
				/>
				
			</Aux>
		)
	}
}
export default BurgerBuilder;