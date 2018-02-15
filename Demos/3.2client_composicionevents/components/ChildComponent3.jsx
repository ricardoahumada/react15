import React from 'react';

var ChildComponent3 = React.createClass({

	render:function(){
		return (
			<div className={this.props.valor==1?'show':'hide'}>
				<h3>Tercer componente:</h3>
				{this.props.valor}
			</div>
		)
	}
});

export default ChildComponent3;