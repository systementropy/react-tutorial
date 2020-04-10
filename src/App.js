import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Todos from './Components/Todos'
// function App() {
class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			todos : [
				{
					id:"1",
					title:'title1',
					body:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
					isCompleted:false
				},{
					id:"2",
					title:'title2',
					body:'Enim, earum? Non nam, debitis inventore delectus',
					isCompleted:true
				},{
					id:"3",
					title:'title3',
					body:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
					isCompleted:false
				},{
					id:"4",
					title:'title4',
					body:'doloribus doloremque architecto suscipit accusantium nisi',
					isCompleted:true
				},{
					id:"5",
					title:'title5',
					body:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
					isCompleted:false
				},{
					id:"6",
					title:'title6',
					body:'illum maxime vitae quas, explicabo quam. Architecto, fugit dolores.',
					isCompleted:false
				},{
					id:"7",
					title:'title7',
					body:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
					isCompleted:true
				},{
					id:"8",
					title:'title8',
					body:'Lorem ipsum dolor sit amet consectetur adipisicing elit',
					isCompleted:false
				},
			],
			showMoreIndex:"1"
		}
	}

	markComplete = (id) =>{
		let todos=this.state.todos;
		todos.map(todo=>{
			if(todo.id===id){
				todo.isCompleted=!todo.isCompleted;
			}
			return todo;
		})
		this.setState({
			todos:todos
		})
	}

	delete = (id) =>{
		// let todos= [...this.state.todos];
		// todos.filter(todo => todo.id !==id)
		// this.setState({
		// 	todos:todos
		// })
		this.setState({todos:[...this.state.todos.filter(todo =>(todo.id!==id))]})
	}

	render(){
		return (
			<div className="App">
				<h1>Hello World</h1>
				<Todos todos = {this.state.todos} markComplete={this.markComplete} delete={this.delete}></Todos>
			</div>
		  );
	}
  	
}

export default App;
