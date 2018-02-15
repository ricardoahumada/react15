import React from 'react';

const Lista_Multiplicar = React.createClass({

	render(){
		let numtable=[];
		for (let i = this.props.init ; i <=this.props.end; i++) {
			numtable.push(<li key={i} className="list-group-item">{i} x {this.props.num} = 
				{i*this.props.num}</li>);
		}
		

		return (
			<div className="container">
				<h1>Tabla del {this.props.num}</h1>
				<ul className="list-group">
					{numtable}
				</ul>
			</div>
		)
	} 
})

export default Lista_Multiplicar;