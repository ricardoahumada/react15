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
    this.loadUsers();
  },

  render: function() {
    return (
      <div className="UserBox">
        <nav>{this.props.headerProp}</nav>
        <h1>Usuarios</h1>
        <UserList data={this.state.data} />
        <div>{this.props.contentProp}</div>
      </div>
    );
  }
});

UserBox.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}

export default UserBox;