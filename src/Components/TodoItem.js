import React, { Component } from 'react';
import { PropTypes } from "prop-types";

export class TodoItem extends Component {
	
	getStyle = () => {
		return {
			textDecoration: this.props.todo.isCompleted?'line-through':'none'
		}
	}
	render() {
		return (
			<div className="todoItem" style={this.getStyle()}>
				<h3 onClick={this.clickForMore}>
					<input type='checkbox' onChange={this.props.markComplete.bind(this,this.props.todo.id)} />{' '}{this.props.todo.title}
				</h3>
				<p>{this.props.todo.body}</p>
				<b style={btnStyle} onClick={this.props.delete.bind(this,this.props.todo.id)}>X</b>
			</div>
		)
	}
}
TodoItem.propTypes = {
	todo:PropTypes.object.isRequired
}
const btnStyle ={
	padding :'2px 20px',
	fontStyle: 'normal',
	fontSize: '20px',
	lineHeight: '60px',
	background: '#F007',
	textDecoration: 'unset',
	// transform : 'rotate(45deg)',
	position: 'absolute',
	right: '0px',
	top: '0px',
	cursor: 'pointer',
	height: '100%',
};
export default TodoItem
