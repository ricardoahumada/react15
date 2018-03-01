import React from 'react';
import UserList from './UserList';
import {Link} from 'react-router';

const UserBox = React.createClass({
  deleteUserBoxHandler(id){
    console.log('Delete box user!',id);
    this.props.deleteUser(id,2);
  },

  componentDidMount: function() {
    console.log('UserBox',this.props);
  },

  render: function() {
    return (
      <div className="UserBox">
        <h4>Usuarios</h4>
        <UserList data={this.props.users.data} onDeleteHandler={this.deleteUserBoxHandler} />
      </div>
    );
  }
});

export default UserBox;