import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
// function Todos(props){
class Todos extends React.Component{
	// markComplete = () => {
	// 	console.log('here');
	// }

	render(){
		return (
			<div className="todoContainer">
			{this.props.todos.map((todo)=>(
				<TodoItem 
					className="todoItem"
					key={todo.id} 
					todo={todo}
					markComplete = {this.props.markComplete} 
					delete = {this.props.delete}
				/>
			))}
			</div>
		)
	}
}
Todos.prototypes ={
	todos: PropTypes.object.isRequired
}
export default Todos;