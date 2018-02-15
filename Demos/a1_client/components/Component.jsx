import React from 'react';

/*const MyComponent = React.createClass({
	getInitialState () {
	    return {data:'hola!'};
	},
	render:function(){
		return (
            <div className="container">
				<h1>Mi componente: {this.state.data}</h1>
			</div>
		)
	}
});*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:'hola!'};
  }
  render() {
    return (
		<div className="container">
			<h1>Mi componente: {this.state.data}</h1>
		</div>
    );
  }
}

export default MyComponent;