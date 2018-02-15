import React from 'react';

import UserList from './UserList.jsx';

const UserBox = React.createClass({
  loadUsers: function() {
    let data = [
      {id: "1",name: "Ricardo",email: "ricardo@netmind.com"},
      {id: "2",name: "Juan",email: "juan@netmind.com"},
      {id: "3",name: "Roberto",email: "roberto@netmind.com"}
    ];

    this.setState({data: data});
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    var lu=this.loadUsers;
    setTimeout(function(){
      lu();
    },3000);
  },

  render: function() {
    return (
      <div className="UserBox">
        <h1>Usuarios</h1>
        <UserList data={this.state.data} />
      </div>
    );
  }
  
});

export default UserBox;