import React from 'react';
import Aux from '../../HOC/Aux';
import ToolBar from '../../Components/Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
class Layout extends React.Component{
	state = {
		showSideDrawer: false
	}
	closeSideDrawerHandler = () =>{
		this.setState({showSideDrawer: false})
	}
	openSideDrawerMenuhandler = () =>{
		this.setState((prevState) => {return {showSideDrawer: !prevState.showSideDrawer}})
	}
	render(){
		return(
			<Aux>
				<ToolBar openSideDrawerMenu={this.openSideDrawerMenuhandler}/>
				<SideDrawer showBackDrop={this.state.showSideDrawer} closed = {this.closeSideDrawerHandler}/>
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		)
	}
};
export default Layout;