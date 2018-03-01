import React from 'react';
import User from './User';

const UserList = React.createClass({
  deleteUserListHandler:function(id){
    console.log('Delete list user!',id);
    this.props.onDeleteHandler(id);
  },

  render: function() {
    var deleteUserListHandler=this.deleteUserListHandler;
    var userNodes = this.props.data.map(function(user) {
      return (
        <User key={user.id} id={user.id} name={user.name} email={user.email} onDeleteUser={deleteUserListHandler} />
      );
    });
    return (
      <div className="UserList">
        <table className="table table-striped">
          <thead>
            <tr><th>Id</th><th>Nombre</th><th>Email</th></tr>
          </thead>
          <tbody>
            {userNodes}
          </tbody>
        </table>
      </div>
    );
  }
});

export default UserList;
