import React from 'react';

var MyComponent = React.createClass({
	mouseOverHandler:function mouseOverHandler(e) {
			console.log('you moused over');
			console.log(e); //e is sysnthetic event instance
		},
	clickHandler:function clickhandler(e) {
			console.log('you clicked');
			console.log(e); //e is sysnthetic event instance
			this.setState({count:this.state.count+1});
		},
	getInitialState:function(){
		return {count:0}
	},
	render:function(){
		return (
            <div className="container">
				<h1 onClick={this.clickHandler} onMouseOver={this.mouseOverHandler}>Haz click o pasa el ratón encima</h1>
				<div>Clicks:{this.state.count}</div>
			</div>
		)
	}
});

export default MyComponent;