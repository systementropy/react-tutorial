import React from 'react';
import Aux from '../../HOC/Aux';
import Burger from '../../Components/Burger/Burger'
class BurgerBuilder extends React.Component{
	render(){
		return (
			<Aux>
				<Burger />
				<div>Controls</div>
			</Aux>
		)
	}
}
export default BurgerBuilder;