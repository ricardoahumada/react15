import React from 'react';
let createReactClass = require('create-react-class');

var User = createReactClass({
  render: function() {
    return (
      <tr><td>{this.props.id}</td><td>{this.props.name}</td><td>{this.props.email}</td></tr>
    );
  }
});

export default User;
