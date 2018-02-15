import React from 'react';

import ChildComponent from './ChildComponent.jsx';
import MyButton from './MyButton.jsx';

var ParentComponent = React.createClass({
    handleParentChange: function(e) {
       console.log('you changed child component');
       console.log(e); //e is sysnthetic event instance
    },
    render: function() {
        return (
            <div className="container">
                <h1>Event detector</h1>
                <ChildComponent onChange={this.handleParentChange}/>
                <MyButton />
            </div>
        );
    }

});

export default ParentComponent;
