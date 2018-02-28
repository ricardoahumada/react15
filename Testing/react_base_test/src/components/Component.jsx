import React from 'react';
let createReactClass = require('create-react-class');

const Component = createReactClass ({
	getInitialState(){
		return {clicks:0};
	},
	captureClick(evnt){
		this.setState({ clicks: this.state.clicks + 1 });
		this.props.doneChange(this.state.clicks);
	},
	render(){
		return (
			<div className="titulo">
				<h1  onClick={this.captureClick}>Hola {this.props.user.name}, esto es React!!!!</h1>
				<p>Haz hecho {this.state.clicks}</p>
			</div>
		)
	} 
})

export default Component;