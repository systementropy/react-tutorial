import React from 'react';
import classes from "./SideDrawer.module.css";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../HOC/Aux'
const SideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer,classes.Close];
	if(props.showBackDrop){
		attachedClasses = [classes.SideDrawer,classes.Open];
	}
	return(
		<Aux>
			<Backdrop show={props.showBackDrop} clicked={props.closed}/>
			<div className={attachedClasses.join(' ')}>
				<div className={classes.LogoCont}>
					<Logo />
				</div>
				
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	)
}; 
export default SideDrawer;