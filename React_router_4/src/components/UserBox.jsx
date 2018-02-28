import React from 'react';
let createReactClass = require('create-react-class');

import UserList from './UserList.jsx';

const UserBox = createReactClass({

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    console.log("props",this.props);
    this.setState({data: this.props.data});
  },

  render: function() {
    return (
      <div className="UserBox">
        <UserList data={this.state.data} />
      </div>
    );
  }
});

export default UserBox;