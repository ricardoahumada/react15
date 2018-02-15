import React from 'react';

var ChildComponent2 = React.createClass({

	render:function(){
		return (
			<div className={this.props.valor==2?'show':'hide'}>
				<h3>Segundo componente:</h3>
				{this.props.valor}
			</div>
		)
	}
});

export default ChildComponent2;