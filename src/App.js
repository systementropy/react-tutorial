import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Todos from './Components/Todos'
// function App() {
class App extends React.Component{
	state = {
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
	render(){
		return (
			<div className="App">
				<h1>Hello World</h1>
				<Todos todos = {this.state.todos}></Todos>
			</div>
		  );
	}
  	
}

export default App;
