import React from 'react';

var User = React.createClass({
  render: function() {
    return (
      <tr><td>{this.props.id}</td><td>{this.props.name}</td><td>{this.props.email}</td></tr>
    );
  }
});

export default User;
