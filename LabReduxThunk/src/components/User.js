import React from 'react';

var User = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <tr><td>{this.props.id}</td><td>{this.props.name}</td><td>{this.props.email}</td></tr>
    );
  }
});

export default User;
