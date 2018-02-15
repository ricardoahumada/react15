import React from 'react';

var MyButton = React.createClass({
	_onPressButtonStart:function(e) {
    	console.log("You start touching the button!");
	},
	_onPressButtonEnd:function(e) {
    	console.log("You end touching the button!");
	},

	render() {
		return (
		 <a href="#" onTouchStart={this._onPressButtonStart} onTouchEnd={this._onPressButtonEnd} className="btn btn-default navbar-btn">Touch me!</a>
		);
	}
});

export default MyButton;
