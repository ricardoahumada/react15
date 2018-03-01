import React from 'react';
let createReactClass = require('create-react-class');
import { ConnectedRouter } from 'connected-react-router'
import { Link, BrowserRouter, Route,Switch } from 'react-router-dom'

import UserBox from '../components/UserBox';
import UserForm from '../components/UserForm';
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'

const Main = createReactClass({
	render(){
    	console.log("Main PROPS:",this.props);

		return (
			<div className="container">
				<h1>Gestor de Usuarios</h1>
				
    			<ConnectedRouter {...this.props}>
    				<main>
    					<NavBar />
    					<Switch>
							<Route path="/" exact render={() => ( <UserBox {...this.props} /> )} />
		      				<Route path="/new" render={() => (<UserForm {...this.props} />)}/>
      						<Route component={NoMatch} />
	      				</Switch>
      				</main>
    			</ConnectedRouter>

			</div>
		)
	} 
})

export default Main;