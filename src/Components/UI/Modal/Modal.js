import React from 'react';
import classes from './Modal.module.css';
import Aux from "../../../HOC/Aux";
import Backdrop from '../Backdrop/Backdrop'
class Modal extends React.Component {
	shouldComponentUpdate (nextProps, nextState){
		return nextProps.show !== this.props.show || nextProps.children !== this.props.children
	}
	render () {
		return (
			<Aux>
				<div 
					className={classes.Modal}
					style={{
						transform: this.props.show?'scale(1) translateY(0)': 'scale(0.8) translateY(-100vh)',
						opacity: this.props.show?'1': '0'
					}}
				>{this.props.children}</div>
				<Backdrop show = {this.props.show} clicked={this.props.closed}/>
			</Aux>
		);

	}
}

export default Modal;