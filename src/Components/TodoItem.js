import React, { Component } from 'react';
import { PropTypes } from "prop-types";

export class TodoItem extends Component {
	
	getStyle = () => {
		return {
			textDecoration: this.props.todo.isCompleted?'line-through':'normal'
		}
	}

	// markComplete = (e) =>{
		
	// }


	render() {
		console.log(this.getStyle());
		
		return (
			// <div className="todoItem" style={{backgroundColor : '#EEE'}}>
			<div className="todoItem" style={this.getStyle()}>
				<h3 onClick={this.clickForMore}>
					<input type='checkbox' onChange={this.props.markComplete} />{' '}{this.props.todo.title}
				</h3>
				<p>{this.props.todo.body}</p>
				
			</div>
		)
	}
}
TodoItem.propTypes = {
	todo:PropTypes.object.isRequired
}

export default TodoItem
