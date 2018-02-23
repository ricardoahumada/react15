import React from 'react';
let createReactClass = require('create-react-class');

const Component = createReactClass ({
	render(){
		return (
			<div className="titulo">
				<h1>Hola {this.props.user.name}, esto es React!!!!</h1>
			</div>
		)
	} 
})

export default Component;