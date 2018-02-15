import React from 'react';

var ChildComponent = React.createClass({
	mouseOverHandler:function mouseOverHandler(e) {
			console.log('you moused over');
			console.log(e); //e is sysnthetic event instance
		},
	clickHandler:function clickhandler(e) {
			console.log('you clicked');
			console.log(e); //e is sysnthetic event instance
		},
	handleChange: function(e) {
		console.log('you changed select');
		console.log(e); //e is sysnthetic event instance

		this.props.onChange({seleccion:e.target.value});
    },
	render:function(){
		return (
			<div className="list-group">
				<div onClick={this.clickHandler} onMouseOver={this.mouseOverHandler} className="list-group-item">Haz click o pasa el ratón encima</div>
				<div className="list-group-item">
					<label>Selecciona una alternativa:</label>
					<select onChange={this.handleChange}>
						<option value="1">1</option>
						<option value="2">2</option>
					</select>
				</div>
			</div>
		)
	}
});

export default ChildComponent;