import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
	render(){
		return (
			<div className="container">
				<h1>Gestor de Usuarios</h1>
				<nav>
					<Link to="/">Lista</Link> | <Link to="/form">Añadir</Link>	
				</nav>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	} 
})

export default Main;