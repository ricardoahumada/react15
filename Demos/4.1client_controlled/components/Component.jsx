import React from 'react';

var InputExample = React.createClass({
	getInitialState() {
		return (
			{ name: '-'}
		);
	},
	handlerSubmit(event) {
		this.setState({ name: event.target.value });
	},
	render() {
		return (
			<div className="container">
				<h1>Input Controlled</h1>
				<form onSubmit={this.handlerSubmit}>
					<input type="text" name="mi_input"/>
				 </form>
			</div>
		);
	}
});

export default InputExample;