import React from 'react';

import ChildComponent from './ChildComponent.jsx';
import ChildComponent2 from './ChildComponent2.jsx';
import ChildComponent3 from './ChildComponent3.jsx';

var ParentComponent = React.createClass({
    handleParentChange: function(valorobj) {
       console.log('you changed child component');
       console.log(valorobj); //e is sysnthetic event instance
       this.setState({valor:valorobj.seleccion});
    },
    getInitialState: function(){
        return {valor:0}
    },
    render: function() {
        return (
            <div className="container">
                <h1>Event detector</h1>
                <ChildComponent onChange={this.handleParentChange}/>
                <ChildComponent2 valor={this.state.valor}/>
                <ChildComponent3 valor={this.state.valor}/>
            </div>
        );
    }

});

export default ParentComponent;
