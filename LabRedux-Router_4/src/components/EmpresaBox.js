import React from 'react';
let createReactClass = require('create-react-class');

import UserList from './UserList';
import {Link} from 'react-router';

const EmpresaBox = createReactClass({
  deleteEmpresaBoxHandler(id){
    console.log('Delete box empresa!',id);
    this.props.deleteEmpresa(id);
  },

  componentDidMount: function() {
    console.log('UserBox',this.props);
  },

  render: function() {
    return (
      <div className="UserBox">
        <h4>Usuarios</h4>
      </div>
    );
  }
});

export default EmpresaBox;