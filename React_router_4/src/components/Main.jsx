import React from 'react';
let createReactClass = require('create-react-class');

import { Link, BrowserRouter, Route } from 'react-router-dom'

import UserBox from './UserBox.jsx';
import UserForm from './UserForm.jsx';


const Main = createReactClass({
	getInitialState: function() {
		let data = [
	      {id: "1",name: "Ricardo",email: "ricardo@netmind.com"},
	      {id: "2",name: "Juan",email: "juan@netmind.com"},
	      {id: "3",name: "Roberto",email: "roberto@netmind.com"}
	    ];
		return {data: data};
	},

	handleUserSubmit: function(user) {
		var users = this.state.data;
		user.id = Date.now();
		var newUsers = users.concat([user]);
		this.setState({data: newUsers});

		console.log(user,newUsers);
	},
	render(){
		return (
			<div className="container">
				<h1>Usuarios</h1>
				<nav>
					<Link to="/">Usuarios</Link> | <Link to="/new">Nuevo</Link>
				</nav>

				<Route path="/" exact render={() => ( <UserBox data={this.state.data} /> )} />
      			<Route path="/new" render={({history}) => (<UserForm history={history} data={this.state.data} onUserSubmit={this.handleUserSubmit} />)}/>
			</div>
		)
	} 
})

export default Main;