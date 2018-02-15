import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({

	loadUsersFromServer: function() {
		fetch('api-mock/users.json',{method:'get'})
		.then(response => response.json())
		.then(json =>{
			console.log("JSON:",json.data);
			this.setState({data: json.data});

		})
		.catch(function(err){
			console.log(err);
		});

	},

	getInitialState: function() {
		return {data:[]};
	},
	componentDidMount: function() {
		this.loadUsersFromServer();
	},
	handleUserSubmit: function(user) {
		var users = this.state.data;
	    user.id = Date.now();
	    var newUsers = users.concat([user]);
	    this.setState({data: newUsers});

	    console.log(user,newUsers);
	},
	render(){
		console.log("rendering...",this.state);
		return (
			<div className="container">
				<h1>Usuarios</h1>
				<nav>
				<Link to="/">Usuarios</Link> | <Link to="/new">Nuevo</Link>
				</nav>
				{/*React.cloneElement(this.props.children, this.props)*/}
				{/*this.props.children*/}
				{React.cloneElement(this.props.children,{data: this.state.data,onUserSubmit:this.handleUserSubmit})}
			</div>
		)
	} 
})

export default Main;

