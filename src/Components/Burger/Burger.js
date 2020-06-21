import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
	let receivedIngredients = Object.keys(props.ingredients)
										.map(igKey => {
											return [...Array(props.ingredients[igKey])].map((_,i)=>{
												return <BurgerIngredient key={igKey + i} type={igKey} />
											})
										})
										.reduce((arr,el)=>{
											return arr.concat(el)
										},[]);
	if(receivedIngredients.length===0){
		receivedIngredients = <p>Add ingredients to continue</p>
	}
	return(
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{receivedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
		
	)
}
export default burger;