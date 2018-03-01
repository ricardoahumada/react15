import React from 'react';
import UserList from './UserList';
import {Link} from 'react-router';

const UserBox = React.createClass({

  getInitialState: function() {
    console.log('UserBox getInitialState',this.props);
    // this.props.loadUsers('api/users.json');

    return this.props.users;
  },

  componentDidMount: function() {
    console.log('UserBox props:',this.props);
  },

  render: function() {
    return (
      <div className="UserBox">
        <h4>Usuarios</h4>
        <UserList data={this.props.users.data} />
      </div>
    );
  }
});

export default UserBox;