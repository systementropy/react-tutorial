import React from 'react';
import Aux from '../../HOC/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls.js'
import Modal from '../../Components/UI/Modal/Modal';
import Summary from '../../Components/Burger/OrderSummary/OrderSummary'
import axios from "../../axios-order";
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler'

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
		ingredients: null,
		totalPrice : 2,
		purchasable: false,
		purchasing: false,
		loadingRequest: false
	}

	componentDidMount (){
		axios
			.get('https://burger-builder-react-324a3.firebaseio.com/ingredients.json')
			.then(response => {
				console.log(response.data);
				this.setState({ingredients: response.data})
			}).catch(()=>{})
	}
	purchaseHandler = () => {
		this.setState({purchasing:true});
	}
	purchaseCancelHandler = () => {
		this.setState({purchasing:false});
	}
	purchaseContinueHandler = () => {
		// alert('To be continued....')
		this.setState({loadingRequest: true})
		const order = {
			ingredients: this.state.ingredients ,
			totalPrice:  this.state.totalPrice ,
			customer : {
				name : "saket",
				address : {
					street : "test",
					pin: "test",
					country: "india"
				},
				email: "test.test@test.com"
			},
			deliveryMethod : "fastest"
			// purchasable: this.state.purchasable ,
			// purchasing: this.state.purchasing 
		}
		axios
			.post('/orders.json', order)
			.then(response => {
				this.setState({loadingRequest: false, purchasing: false})
				console.log(response);
			})
			.catch(error => {
				this.setState({loadingRequest: false, purchasing: false})
				console.log(error);
			})
		// this.setState({purchasing:false});
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
		let orderSummary = null
		
		let burger = <Spinner />
		if(this.state.ingredients){
			burger = (
				<Aux>
					<Burger ingredients={this.state.ingredients}/>
					<BuildControls 
						ingredientsAdded = {this.addIngredientHandler}
						ingredientsRemoved = {this.removeIngredientHandler}
						disabledInfo = {disabledInfo}
						price =  {this.state.totalPrice}
						purchasable = {!this.state.purchasable}
						purchaseNow = {this.purchaseHandler}
					/>
				</Aux>
			)
			orderSummary = 	(<Summary 
				ingredient={this.state.ingredients}
				price = {this.state.totalPrice}
				cancel={this.purchaseCancelHandler}
				continue={this.purchaseContinueHandler}
			/>)
		}
		if(this.state.loadingRequest){
			orderSummary = <Spinner />
		}
		return (
			<Aux>
				<Modal show={this.state.purchasing} closed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{burger}
				
			</Aux>
		)
	}
}
export default withErrorHandler(BurgerBuilder, axios);